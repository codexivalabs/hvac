// ✏️ Edit business details + images here
const U = (id, w = 1200) => `https://images.unsplash.com/photo-${id}?q=80&w=${w}&auto=format&fit=crop`

export const BUSINESS = {
  name: 'Arctic Air',
  tagline: 'HVAC Engineers · Climate Control',
  phone: '+923712392632',
  whatsapp: '923712392632',
  email: 'hello@arcticair.example',
  address: 'Office 12, Business Plaza, Main Boulevard, Your City',
  founder: 'Engr. Ali Raza',
  founderRole: 'Lead HVAC Engineer, Founder',
}

export const NAV = ['Home', 'Services', 'Portfolio', 'About', 'Contact']

export const IMG = {
  hero: U('1718203862467-c33159fdc504', 2400),
  about: U('1744123146393-4b5438a5d98f'),
}

export const SERVICES = [
  { n: '01', title: 'AC Design & Installation', text: 'Load calculation, equipment selection and clean installation of split, ducted and VRF systems sized exactly for your space.' },
  { n: '02', title: 'Repair & Annual Maintenance', text: 'Fast fault diagnosis, gas refilling, coil cleaning and scheduled servicing that keeps your system efficient and your bills low.' },
  { n: '03', title: 'Ventilation & Commercial HVAC', text: 'Duct design, fresh-air and exhaust systems, chillers and packaged units for offices, clinics, kitchens and retail.' },
]

export const FILTERS = ['All', 'Residential', 'Commercial', 'Ventilation']

export const PROJECTS = [
  { title: 'Villa Split AC Installation', cat: 'Residential', img: U('1757219525975-03b5984bc6e8') },
  { title: 'Apartment Block Cooling', cat: 'Residential', img: U('1700124113583-81aa99ea2aa2') },
  { title: 'Corporate Office Multi-Unit', cat: 'Commercial', img: U('1667983453881-4992fe86ab1b') },
  { title: 'Retail Plaza Outdoor Units', cat: 'Commercial', img: U('1698479603408-1a66a6d9e80f') },
  { title: 'Duct & Piping Works', cat: 'Ventilation', img: U('1615309662243-70f6df917b59') },
  { title: 'Air Vent & Diffuser Fit-out', cat: 'Ventilation', img: U('1558358235-a0a93f68a52c') },
]

export const STATS = [['500+', 'Systems Installed'], ['10', 'Years of Practice'], ['100%', 'Engineer-Reviewed']]

export const POINTS = [
  ['Certified HVAC Engineers', 'Every design is calculated and signed off by a qualified engineer, never guessed on site.'],
  ['Right-Sized Systems', 'Proper heat-load calculations mean lower bills, even cooling and longer equipment life.'],
  ['Transparent Pricing', 'Clear itemised quotes and warranty on parts and workmanship before work begins.'],
]

export const BUDGETS = ['Under $1,000', '$1,000–$5,000', '$5,000–$20,000', '$20,000+']
