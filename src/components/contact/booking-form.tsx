"use client";

import { useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { contactSchema, type ContactFormData } from "@/lib/validations";
import { DatePicker } from "./date-picker";

const sessionTypes = [
  "Headshot - $50/person",
  "Portrait Session",
  "Team Booking",
];

export function BookingForm() {
  const [submitted, setSubmitted] = useState(false);

  const {
    control,
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      sessionType: "headshot - $50/person",
      message: "",
    },
  });

  const preferredDate = useWatch({ control, name: "preferredDate" });
  const sessionType = useWatch({ control, name: "sessionType" });

  async function onSubmit(data: ContactFormData) {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...data,
        preferredDate: data.preferredDate?.toISOString(),
      }),
    });

    if (res.ok) {
      setSubmitted(true);
    }
  }

  if (submitted) {
    return (
      <div className="rounded-lg border border-border bg-muted/50 p-10 text-center">
        <h3 className="font-heading text-2xl font-light">You&apos;re booked in</h3>
        <p className="mt-3 text-sm font-light text-muted-foreground">
          We got your request and we&apos;ll reach out soon with the next step.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 rounded-[1.5rem] border border-foreground/10 bg-background p-6 sm:p-7">
      <div className="space-y-2">
        <Label htmlFor="name" className="text-sm tracking-wider">
          Name
        </Label>
        <Input
          id="name"
          placeholder="Your name"
          className="h-12"
          {...register("name")}
        />
        {errors.name && (
          <p className="text-xs text-destructive">{errors.name.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="email" className="text-sm tracking-wider">
          Email
        </Label>
        <Input
          id="email"
          type="email"
          placeholder="your@email.com"
          className="h-12"
          {...register("email")}
        />
        {errors.email && (
          <p className="text-xs text-destructive">{errors.email.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone" className="text-sm tracking-wider">
          Phone <span className="text-muted-foreground">(optional)</span>
        </Label>
        <Input
          id="phone"
          type="tel"
          placeholder="(555) 123-4567"
          className="h-12"
          {...register("phone")}
        />
      </div>

      <div className="space-y-2">
        <Label className="text-sm tracking-wider">
          Session Type
        </Label>
        <Select
          value={sessionType || undefined}
          onValueChange={(val) => setValue("sessionType", val as string)}
        >
          <SelectTrigger className="h-12 w-full">
            <SelectValue placeholder="Select a session type" />
          </SelectTrigger>
          <SelectContent>
            {sessionTypes.map((type) => (
              <SelectItem key={type} value={type.toLowerCase()}>
                {type}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {errors.sessionType && (
          <p className="text-xs text-destructive">
            {errors.sessionType.message}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <Label className="text-sm tracking-wider">
          Preferred Date <span className="text-muted-foreground">(optional)</span>
        </Label>
        <DatePicker
          value={preferredDate}
          onChange={(date) => setValue("preferredDate", date)}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="message" className="text-sm tracking-wider">
          Details
        </Label>
        <Textarea
          id="message"
          rows={4}
          placeholder="How many people, what you need the photos for, and any timing notes."
          className="resize-none"
          {...register("message")}
        />
        {errors.message && (
          <p className="text-xs text-destructive">{errors.message.message}</p>
        )}
      </div>

      <Button
        type="submit"
        size="lg"
        className="h-12 w-full tracking-wider"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Sending..." : "Request Booking"}
      </Button>
    </form>
  );
}
