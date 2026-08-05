# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

The primary audience is engineering and computer science students in the Ottawa area who are evaluating and preparing to attend SPAC in order to meet industry professionals, understand career paths, and build professional connections.

Employers, industry professionals, patrons, speakers, and academic partners are a secondary audience. They use the site to understand the event, evaluate participation or sponsorship, and contact the organizing team.

## Product Purpose

IEEE SPAC is the official web presence for Ottawa's annual IEEE Student Professional Awareness Conference. It explains what the conference offers, publishes the current event details, and connects prospective attendees and participating organizations to the appropriate registration, sponsorship, agenda, gallery, and contact paths.

The site succeeds when students can confidently decide to attend and register, while prospective patrons and participants can understand the opportunity and take the next step with the organizing team.

## Positioning

SPAC bridges classrooms and professional practice through a formal, student-focused conference built around direct access to industry: networking booths, one-to-one conversations, presentations, masterclasses, and workshops. It is an IEEE-affiliated Ottawa event rather than a generic job board or passive conference listing.

## Operating Context

The product follows an annual event lifecycle. Before the conference, visitors need current event details, registration, sponsorship information, the agenda, and ways to contact the team. Around the event, the site serves as a reference for the schedule, location, participating organizations, and organizers. Afterward, the gallery and prior-event evidence help communicate what SPAC is and support the next annual cycle.

The existing implementation contains 2025 event content. The next conference is the upcoming 2026 event, so future updates must deliberately roll the site forward rather than treating the current year-specific content as evergreen.

## Capabilities and Constraints

- Present the conference purpose, format, date, time, location, patrons, agenda, and organizing team.
- Route attendees to external registration and location services.
- Route prospective patrons to the patronage package.
- Publish a post-event gallery.
- Accept contact inquiries through the site's Resend-backed form.
- Keep annual dates, venues, registration links, agenda details, sponsors, team members, statistics, and sponsor-specific opportunities tied to their verified event year.
- Do not present 2025 content as fact about the 2026 conference. The 2026 date, venue, registration links, agenda, patrons, team roster, statistics, and sponsor-specific opportunities remain open until confirmed and added to the repository.
- Do not fabricate sponsors, attendance figures, testimonials, partnerships, or event claims.

## Brand Commitments

- Preserve the IEEE SPAC name and IEEE affiliation.
- Preserve SPAC's Ottawa identity and its focus on engineering and computer science students connecting with industry.
- Treat the incumbent Twilight design system, SPAC logos, and established component vocabulary as the identity baseline unless a future request explicitly authorizes a redesign or rebrand.
- Keep the voice credible, welcoming, student-focused, and specific about what attendees and participating organizations can do.

## Evidence on Hand

- `src/content/constants.ts` contains the current 2025 event copy, links, patrons, team data, and conference claims. These are evidence for the 2025 cycle only.
- `public/assets/twilight-design-system/` contains the incumbent SPAC and IEEE SPAC logos, conference illustrations, and Twilight identity assets.
- `public/assets/patron-logos/`, `public/assets/institution-logos/`, and `public/assets/team-member-headshots/` contain organization and team assets used by the current implementation; their presence does not by itself confirm participation in 2026.
- `public/spac-patronage-package-2024.pdf` is a prior-year sponsorship artifact and must not be represented as the 2026 package.
- The repository includes links and screenshots for the existing Figma design system, Storybook, source repository, project board, and prior site work.
- No verified 2026 event facts or evidence are currently recorded in this product context beyond the fact that the conference is upcoming in 2026.

## Product Principles

1. Make the current event year unmistakable and keep every time-sensitive claim attached to verified source material.
2. Help students decide and act first, without hiding the equally important participation and sponsorship path for organizations.
3. Explain SPAC through its concrete access to professionals and professional-development experiences, not generic conference language.
4. Use real event assets and evidence to build trust; never fill missing annual content with plausible-looking assumptions.
5. Preserve continuity across annual editions while making each year's facts easy to replace, audit, and archive.
