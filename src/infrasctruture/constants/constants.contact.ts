import { BusinessHours, Address } from '../interfaces/contact.interface'

export const CONTACT_HEADER = {
  subtitle: 'Te invitamos a disfrutar de un excelente corte de pelo',
  title: 'Contáctanos',
} as const

export const BUSINESS_HOURS: BusinessHours[] = [
  { day: 'Lunes - Viernes', hours: '9:00 - 20:00' },
  { day: 'Sábado', hours: '9:00 - 21:00' },
  { day: 'Domingo', hours: 'Cerrado' },
] as const

export const BUSINESS_ADDRESS: Address = {
  street: '244 Avenida Acoyte',
  district: 'Cabellito, CABA 1405',
  city: 'Buenos Aires',
  phone: '11-1111-1111',
} as const

export const MAP_CONFIG = {
  embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.5624482193334!2d-58.44038588826946!3d-34.61522427283749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca404ec63db7%3A0xba89fa92f51220aa!2sAv.%20Acoyte%20244%2C%20C1405BGN%20Cdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1724608684797!5m2!1ses-419!2sar',
  title: 'Ubicación de Il Figaro Barbería',
} as const

export const STORE_IMAGE = '/img/barberia-nueve.webp' as const
