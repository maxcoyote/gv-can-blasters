// Single source of truth for site copy. Edit values here to update the page.
// ⚠️ = placeholder, awaiting client confirmation. Grep for "⚠️" or "TODO" to find them.

export const site = {
  name: 'Grand Valley Can Blasters',
  tagline: 'Sanitize. Deodorize. Done.',
  url: 'https://grandvalleycanblasters.com',
  description:
    'Professional trash & recycle bin cleaning in the Grand Valley. Hot-water, eco-friendly sanitizing that kills odor and bacteria. Serving Grand Junction, Fruita & Palisade.',

  // ⚠️ NAP — confirm with Tyler before launch
  phone: '(970) 250-1125',
  phoneHref: 'tel:+19702501125',
  email: 'hello@grandvalleycanblasters.com', // ⚠️ placeholder
  emailHref: 'mailto:hello@grandvalleycanblasters.com', // ⚠️ placeholder

  address: {
    // ⚠️ Full street address pending — JSON-LD uses region only for now
    region: 'CO',
    locality: 'Grand Junction',
    postalCode: '', // ⚠️ TBD
    street: '', // ⚠️ TBD
    country: 'US',
  },

  // ⚠️ Hours TBD
  hours: 'Mon–Sat · By appointment', // ⚠️ placeholder
  openingHoursSchema: ['Mo-Sa 08:00-17:00'], // ⚠️ placeholder

  priceRange: '$25–$45',

  social: {
    facebook: '', // ⚠️ TBD
    instagram: '', // ⚠️ TBD
  },
} as const;

export const nav = [
  { label: 'Services', href: '#services' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
] as const;

export const serviceAreas = [
  {
    city: 'Grand Junction',
    blurb:
      "We're based right here in Grand Junction and clean cans across every neighborhood — from the Redlands to North Avenue and out to East Orchard Mesa. If you live in town, we can almost certainly get to your bin.",
  },
  {
    city: 'Fruita',
    blurb:
      "Fruita's our backyard. We service bins from downtown out to the trailheads, and we love that Fruita folks care about keeping the valley clean. Recurring routes available on your normal pickup day.",
  },
  {
    city: 'Palisade',
    blurb:
      "Orchards, vineyards, and the cleanest cans on the Western Slope. We run weekly routes through Palisade and the surrounding ag corridor — fruit-stand-friendly bins are kind of our thing.",
  },
  // ⚠️ Confirm exact coverage — Clifton / Orchard Mesa optional
  {
    city: 'Clifton & Orchard Mesa',
    blurb:
      "We extend service into Clifton and Orchard Mesa on a rotating schedule. Drop your address in the form and we'll confirm coverage and the next available slot.",
  },
] as const;

export const services = [
  {
    title: 'Recurring Residential Cleaning',
    body: 'Regular trash & recycle can cleaning on a schedule that fits your pickup day. We show up right after the truck does — you do nothing.',
    price: 'From $25/mo',
    featured: true,
  },
  {
    title: 'One-Time / First Clean',
    body: 'A deep blast for badly built-up bins, move-in/move-out resets, or a one-off refresh before company comes over.',
    price: 'From $45',
    featured: false,
  },
  {
    title: 'Recycle Bin Cleaning',
    body: 'Recycle cans get gross too — sticky cans, broken bottles, fruit flies. We sanitize and deodorize them right alongside the trash bin.',
    price: 'Included with any plan',
    featured: false,
  },
  // Structure supports a 4th card if needed.
] as const;

// The cleaning process, mirroring Tyler's "How It Works" video storyboard.
// Booking is intentionally NOT a step here — it's folded into the section intro.
export const howItWorks = [
  {
    n: '01',
    title: 'Curbside pickup & prep',
    body: 'We pull up right after your trash truck and grab your bin straight from the curb, then clear out leftover trash, leaves, and stuck-on debris so the deep clean can reach every surface.',
  },
  {
    n: '02',
    title: 'Hot, high-pressure wash',
    body: 'Powerful jets of hot water (up to 190°F) scour the inside and outside of the can, blasting away baked-on buildup, bacteria, and grime — the part that earns us the "Can Blasters" name.',
  },
  {
    n: '03',
    title: 'Sanitize & deodorize',
    body: "We finish with an eco-friendly deodorizer that kills odor-causing bacteria and leaves your bin smelling clean instead of like last week's garbage.",
  },
  {
    n: '04',
    title: 'Returned fresh & ready',
    body: "Your clean, sanitized can goes right back to the curb — or wherever you'd like it — and the dirty water leaves with us in our reclamation tank. Cleaner cans, less odor, fewer germs.",
  },
] as const;

export const trustChips = [
  'Local & Family-Owned',
  'High-Heat Pressure Washing',
  'Eco-Friendly Water Reclamation',
  'Satisfaction Guaranteed',
] as const;

export const pricingTiers = [
  {
    name: 'Monthly',
    price: '$25/mo',
    cadence: 'Cleaned every month',
    perks: [
      'Covers up to 2 cans (trash + recycle)',
      '+$10 per additional can',
      'Cleaned right after your pickup day',
      'Cancel anytime',
    ],
    cta: 'Request a Quote',
    featured: true,
  },
  {
    name: 'Quarterly',
    price: '$35',
    cadence: 'Per cleaning · every 3 months',
    perks: [
      'Covers up to 2 cans (trash + recycle)',
      '+$10 per additional can',
      'Same hot-water sanitize & deodorize',
      'Great for low-volume households',
    ],
    cta: 'Request a Quote',
    featured: false,
  },
  {
    name: 'One-Time',
    price: '$45',
    cadence: 'A single deep clean',
    perks: [
      'Covers up to 2 cans (trash + recycle)',
      '+$10 per additional can',
      'No commitment — perfect for move-ins or seasonal resets',
    ],
    cta: 'Request a Quote',
    featured: false,
  },
] as const;

export const faqs = [
  {
    q: 'How often should I get my trash cans cleaned?',
    a: "For most Grand Valley households, monthly cleaning keeps cans fresh year-round and prevents the heavy buildup that summer heat bakes in. Quarterly works well for lower-volume households or folks who bag everything. If your bin is already in rough shape, start with a one-time deep clean and then go on a schedule.",
  },
  {
    q: 'Do you clean both trash and recycle bins?',
    a: 'Yes. Recycle cans actually get pretty grim — sticky residue, broken glass, fruit flies — so we sanitize and deodorize them the same way we do trash cans. Your recycle bin is included in the base price: every plan covers up to two cans (trash + recycle), and additional cans are just $10 each.',
  },
  {
    q: 'What happens to the dirty water?',
    a: "Our trailer was built from the ground up with an eco-friendly wastewater reclamation system. Every drop of the dirty rinse water is captured on the truck and hauled away for proper disposal — none of it runs into your yard, your driveway, or the storm drain.",
  },
  {
    q: 'Which areas do you serve?',
    a: 'We serve the Grand Valley: Grand Junction, Fruita, and Palisade, plus parts of Clifton and Orchard Mesa on rotating routes. If you\'re unsure whether we reach your street, drop your address in the form and we\'ll confirm.',
  },
  {
    q: 'How much does it cost?',
    a: 'Pricing is flat across the Grand Valley: $25/month for recurring monthly service, $35 per cleaning on a quarterly schedule, or $45 for a one-time deep clean. Each plan covers up to two cans (your trash and recycle), and extra cans are just $10 each. Most households have two cans, so the base price is usually your total. Request a quote with your address and pickup day and we\'ll confirm.',
  },
  {
    q: 'Do I need to be home?',
    a: "Nope. As long as your cans are out at the curb on your normal pickup day, we'll clean them after the truck comes through and roll them back to wherever you want them. Most of our customers never see us — they just notice the smell is gone.",
  },
] as const;
