"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    Cal?: ((...args: unknown[]) => void) & {
      loaded?: boolean;
      ns?: Record<string, (...args: unknown[]) => void>;
      q?: unknown[];
    };
  }
}

const CAL_NAMESPACE = "downlowshots";
const CAL_LINK = "https://cal.com/downlowshots/book-a-session";
const CAL_ORIGIN = "https://app.cal.com";
const CAL_CONTAINER_ID = "downlowshots-cal-inline";

type QueuedFn = ((...args: unknown[]) => void) & { q?: unknown[] };

function bootstrapCal() {
  (function (C, A, L) {
    const p = function (a: { q?: unknown[] }, ar: unknown[]) {
      a.q = a.q || [];
      a.q.push(ar);
    };

    const d = C.document;

    C.Cal =
      C.Cal ||
      function (...args: unknown[]) {
        const cal = C.Cal!;

        if (!cal.loaded) {
          cal.ns = {};
          cal.q = cal.q || [];
          const script = d.createElement("script");
          script.src = A;
          d.head.appendChild(script);
          cal.loaded = true;
        }

        if (args[0] === L) {
          const api: QueuedFn = function (...apiArgs: unknown[]) {
            p(api, apiArgs);
          };

          const namespace = args[1];
          api.q = api.q || [];

          if (typeof namespace === "string") {
            cal.ns![namespace] = cal.ns![namespace] || api;
            p(cal.ns![namespace] as { q?: unknown[] }, args);
            p(cal, ["initNamespace", namespace]);
          } else {
            p(cal, args);
          }
          return;
        }

        p(cal, args);
      };
  })(window as Window & typeof globalThis, `${CAL_ORIGIN}/embed/embed.js`, "init");
}

export function CalBookingEmbed() {
  useEffect(() => {
    bootstrapCal();

    window.Cal?.("init", CAL_NAMESPACE, { origin: CAL_ORIGIN });
    window.Cal?.ns?.[CAL_NAMESPACE]?.("inline", {
      elementOrSelector: `#${CAL_CONTAINER_ID}`,
      calLink: CAL_LINK,
      config: {
        layout: "month_view",
      },
    });
    window.Cal?.ns?.[CAL_NAMESPACE]?.("ui", {
      hideEventTypeDetails: false,
      layout: "month_view",
      styles: {
        branding: {
          brandColor: "#111111",
        },
      },
    });
  }, []);

  return (
    <div
      id={CAL_CONTAINER_ID}
      className="min-h-[940px] w-full overflow-hidden rounded-[1.5rem] bg-background"
    />
  );
}
