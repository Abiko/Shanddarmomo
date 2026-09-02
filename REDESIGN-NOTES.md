# Shanddar MoMo redesign

This pass keeps the original restaurant/menu data and ordering logic intact while rebuilding the public UI around a cleaner, food-first direction.

## What changed
- New editorial home page with a dark food-led hero and direct Menu / Locations CTAs.
- Signature dish photography now carries the visual hierarchy instead of decorative cards/gradients.
- Rebuilt desktop and mobile header, including a proper mobile menu.
- Rebuilt branch menu landing page.
- Rebuilt branch menus while preserving names, descriptions, prices, images, dietary badges and order controls.
- Restyled the WhatsApp order flow without changing its state/quantity/note/message logic.
- Rebuilt locations UI around a simpler branch switcher, map and hours layout.
- Simplified Contact and social/delivery pages.
- Removed fake-looking review marketing from the homepage.
- Reworked footer and site-wide spacing, typography and color system.
- Removed the placeholder email UI from Contact.

## Data/function preservation
`src/lib/restaurant.ts` was not edited. The original and redesigned copy have the same SHA-256 checksum for this file.

Existing functionality retained:
- branch-specific menus
- QR menu route
- dietary labels
- quantity controls
- item notes
- general order notes
- WhatsApp order generation
- Wolt / Bolt Food links
- branch map switcher
- phone and WhatsApp links

## Validation
- All 26 TS/TSX source files were parsed using the TypeScript compiler API with 0 parse diagnostics.
- A full Next.js production build could not be run in the sandbox because the npm registry is unreachable here and the uploaded project did not include installed dependencies.

Run locally:
```bash
npm install
npm run build
npm run dev
```
