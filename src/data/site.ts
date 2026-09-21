/**
 * Single source of truth for every business fact on the site.
 * These values are confirmed in PRODUCT.md. Do not edit one without the other.
 */

export const business = {
  name: 'Mountain Hill Construction',
  shortName: 'Mountain Hill',
  license: '1024711',
  licenseLabel: 'CSLB #1024711',
  phone: '(909) 648-8760',
  phoneHref: 'tel:+19096488760',
  email: 'Rafael@mountainhillconstruction.com',
  emailHref: 'mailto:Rafael@mountainhillconstruction.com',
  address: '7563 Hwy 18, Big Bear City, CA 92314',
  hours: 'Daily 7:00 AM – 7:00 PM',
  instagram: 'https://www.instagram.com/mountain_hill_construction/',
  serviceArea: [
    'Big Bear Lake',
    'Big Bear City',
    'Fawnskin',
    'Lake Arrowhead',
    'Running Springs',
  ],
} as const;

export const services = [
  {
    slug: 'residential',
    name: 'Residential Construction',
    blurb: 'New builds, additions, and whole-home remodels engineered for snow loads.',
  },
  {
    slug: 'commercial',
    name: 'Commercial Construction',
    blurb: 'Tenant improvements and build-outs with clean, brand-aligned finishes.',
  },
  {
    slug: 'kitchen',
    name: 'Kitchen Remodel',
    blurb: 'Layout optimization, custom cabinetry, lighting, and ventilation.',
  },
  {
    slug: 'bath',
    name: 'Bathroom Remodel',
    blurb: 'Waterproofing, radiant heat, and timeless tilework.',
  },
  {
    slug: 'adu',
    name: 'ADU Construction',
    blurb: 'Income-generating ADUs with efficient utilities and finishes.',
  },
  {
    slug: 'deck',
    name: 'Deck & Outdoor',
    blurb: 'Helical piers, waterproof membranes, cable rail, and durable decking.',
  },
  {
    slug: 'roofing',
    name: 'Roofing & Windows',
    blurb: 'Ice-dam prevention, flashing details, and energy-efficient glazing.',
  },
  {
    slug: 'restoration',
    name: 'Insurance Restoration',
    blurb: 'Fire, water, and storm damage — fast response and documentation.',
  },
] as const;

export const credentials = [
  business.licenseLabel,
  'General Liability & Workers’ Comp',
  'EPA Lead-Safe Certified',
  'BBB A+ · Chamber Member',
] as const;

export const whyUs = [
  'Transparent pricing and clear schedules',
  'Dedicated project manager',
  'Clean jobsites, respectful crews',
  'Permits & inspections handled',
] as const;

export const featured = [
  {
    title: 'Mountain cabin exterior',
    category: 'Residential',
    src: '/projects/cabin-exterior.webp',
    srcSmall: '/projects/cabin-exterior-sm.webp',
    alt: 'Finished timber cabin with an attached garage among pine trees',
  },
  {
    title: 'Custom kitchen remodel',
    category: 'Kitchen',
    src: '/projects/kitchen-remodel.webp',
    srcSmall: '/projects/kitchen-remodel-sm.webp',
    alt: 'Finished kitchen with navy cabinetry, white counters, and open wood shelving',
  },
  {
    title: 'Timber living space',
    category: 'Interior',
    src: '/projects/timber-interior.webp',
    srcSmall: '/projects/timber-interior-sm.webp',
    alt: 'Finished living room with exposed timber beams and a wood-burning stove',
  },
  {
    title: 'Mountain home framing',
    category: 'New construction',
    src: '/projects/new-build-framing.webp',
    srcSmall: '/projects/new-build-framing-sm.webp',
    alt: 'Mountain home under construction with roof and wall framing in place',
  },
  {
    title: 'Steep-site retaining work',
    category: 'Site work',
    src: '/projects/retaining-walls.webp',
    srcSmall: '/projects/retaining-walls-sm.webp',
    alt: 'Tiered retaining wall forms under construction on a wooded slope',
  },
  {
    title: 'White tile bathroom',
    category: 'Bathroom',
    src: '/projects/tile-bathroom.webp',
    srcSmall: '/projects/tile-bathroom-sm.webp',
    alt: 'Finished bathroom with white subway tile, black fixtures, and a round mirror',
  },
  {
    title: 'Custom timber deck',
    category: 'Deck & outdoor',
    src: '/projects/deck-construction.webp',
    srcSmall: '/projects/deck-construction-sm.webp',
    alt: 'Completed timber deck and railing surrounded by mature trees',
  },
] as const;

export const gallery = [
  ...featured,
  {
    title: 'Garage addition',
    category: 'New construction',
    src: '/projects/garage-addition.webp',
    srcSmall: '/projects/garage-addition-sm.webp',
    alt: 'Garage addition under construction with exterior sheathing and roof framing',
  },
  {
    title: 'Utility excavation',
    category: 'Site work',
    src: '/projects/utility-excavation.webp',
    srcSmall: '/projects/utility-excavation-sm.webp',
    alt: 'Compact excavator preparing utility trenches beside a mountain home',
  },
  {
    title: 'Roof framing layout',
    category: 'Framing',
    src: '/projects/framing-layout.webp',
    srcSmall: '/projects/framing-layout-sm.webp',
    alt: 'Close view of measured roof framing channels and timber blocking',
  },
  {
    title: 'Wall framing',
    category: 'Framing',
    src: '/projects/wall-framing.webp',
    srcSmall: '/projects/wall-framing-sm.webp',
    alt: 'Exterior wall and roof framing on a mountain addition',
  },
  {
    title: 'Exposed timber beams',
    category: 'Interior',
    src: '/projects/timber-beams.webp',
    srcSmall: '/projects/timber-beams-sm.webp',
    alt: 'Interior ceiling finish built around exposed timber beams',
  },
  {
    title: 'Interior finish work',
    category: 'Interior',
    src: '/projects/interior-finish.webp',
    srcSmall: '/projects/interior-finish-sm.webp',
    alt: 'Interior finish work around a window and exposed ceiling beam',
  },
  {
    title: 'Custom barn door',
    category: 'Exterior detail',
    src: '/projects/custom-barn-door.webp',
    srcSmall: '/projects/custom-barn-door-sm.webp',
    alt: 'Custom timber barn door set into a stone-clad exterior wall',
  },
  {
    title: 'Foundation layout',
    category: 'Foundation',
    src: '/projects/foundation-layout.webp',
    srcSmall: '/projects/foundation-layout-sm.webp',
    alt: 'Foundation formwork and utility layout on a sloped wooded site',
  },
] as const;

export const nav = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/projects', label: 'Our Projects' },
] as const;
