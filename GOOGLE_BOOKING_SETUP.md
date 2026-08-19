# Google Appointment Schedule Setup

Use this to manage the Google Calendar Appointment Schedule link for Castellanos Coaching.

## Setup steps

1. Sign into Google Calendar using `gregcastellanoswork@gmail.com`.
2. Make sure all real appointments and unavailable periods are on the primary calendar.
3. Make sure unavailable events are marked `Busy`, not `Free`.
4. Select `Create`, then `Appointment schedule`.
5. Create one free booking page.
   - The current Google plan may only allow one active appointment schedule at a time.
   - Keep `Free 30 Min Coaching Consultation` as the active schedule unless the website link is updated and tested immediately.
6. Use a professional title such as `Free Consultation with Gregory Castellanos`.
7. Suggested consultation duration: 20 or 30 minutes.
8. Add reasonable scheduling safeguards:
   - Minimum notice of 24 hours.
   - At least 15 minutes of buffer time.
   - Limit how far in advance someone can book.
   - Prevent same-day appointments unless intentionally enabled.
9. Add Google Meet videoconferencing.
10. Copy the public booking-page URL.
11. Paste it into the centralized website configuration value:

```env
PUBLIC_GOOGLE_BOOKING_URL=https://calendar.google.com/calendar/appointments/schedules/AcZssZ3ylZREqz5fTpWyNA3PNrZVMS0e-XxJWyPbR-eJGtrzbN1hkW23ls1o6_uraVSoi3FYc9_uc7zS
```

Replace the URL with a new public Google Appointment Schedule link if it changes later.

12. Rebuild or redeploy the website.
13. Test the booking flow in a private browser window.
14. Confirm that an existing `Busy` appointment removes that time from availability.
15. Run the website link check before pushing changes:

```sh
npm run check:links
```

The `Link Health` GitHub Action also runs on pushes and once per day. It fails if the old Google Calendar short link reappears or if the live booking page looks inactive or unavailable.

## Where to paste the link

For local development, create a `.env` file in the project root and add:

```env
PUBLIC_GOOGLE_BOOKING_URL=https://calendar.google.com/calendar/appointments/schedules/AcZssZ3ylZREqz5fTpWyNA3PNrZVMS0e-XxJWyPbR-eJGtrzbN1hkW23ls1o6_uraVSoi3FYc9_uc7zS
```

For Cloudflare Pages, add the same variable in:

`Cloudflare Dashboard > Workers & Pages > your site > Settings > Environment variables`

For GitHub Pages, add the value as a repository secret or variable used by the deploy workflow.

## Fallback behavior

The website has a default public booking URL in `src/data/site.ts`. If an environment variable is set, `PUBLIC_GOOGLE_BOOKING_URL` overrides that default. If a future value is invalid, booking buttons fall back to a prefilled email instead of sending visitors to a broken link.
