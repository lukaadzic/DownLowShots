# Down Low Shots

Official website for Down Low Shots, a photography studio run by UPenn students in Philadelphia.

## Overview

This repository contains the studio website and booking flow for Down Low Shots, built for portrait and headshot clients.

The project focuses on:

- Editorial-style homepage with featured sessions
- Portfolio gallery browsing
- Booking flow through Cal.com
- Contact API endpoint with Zod validation

## Tech Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS v4
- Zod + React Hook Form
- Framer Motion

## Local Development

### Requirements

- Node.js 20+
- npm

### Install

```bash
npm install
```

### Run Dev Server

```bash
npm run dev
```

Open http://localhost:3000.

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Create a production build
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint

## Routes

- `/` - Landing page
- `/about` - Studio/story page
- `/portfolio` - Portfolio gallery
- `/contact` - Redirects to Cal.com booking URL
- `/api/contact` - Contact form POST endpoint (validated with Zod)

## Booking Configuration

Booking uses a constant defined in `src/lib/site-config.ts`:

- `CAL_BOOKING_URL`

If you want a different booking destination, update that value.

## API Notes

The contact endpoint currently validates and logs submissions. It is ready for integration with a transactional email provider.

File: `src/app/api/contact/route.ts`

## Project Structure

```text
src/
	app/
		about/
		api/contact/
		contact/
		portfolio/
	components/
		contact/
		home/
		layout/
		portfolio/
		shared/
		ui/
	lib/
	styles/
```

## Deploy

The project deploys cleanly to Vercel and other Node-hosted platforms.

Typical production flow:

1. `npm run build`
2. `npm run start`

## License

MIT. See [LICENSE](LICENSE).
