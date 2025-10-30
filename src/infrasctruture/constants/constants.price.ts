import { ServicePrice, SpecialOffer } from '../interfaces/service.interface'

export const PRICE_LIST_HEADER = {
  subtitle: 'Ofrecemos una variedad de servicios',
  title: 'Lista de precios',
  description: 'Descubre nuestros servicios de barbería, diseñados para resaltar tu estilo personal y brindarte una experiencia excepcional. Desde cortes de cabello hasta afeitados, nuestro equipo de expertos te ayudará a lucir y sentirte genial.',
} as const

export const SERVICE_PRICES: ServicePrice[] = [
  { name: 'CORTE', price: 7000 },
  { name: 'AFEITADO', price: 5000 },
  { name: 'RECORTE DE BARBA', price: 4000 },
  { name: 'CORTE PARA NIÑOS', price: 6000 },
  { name: 'CORTE PARA MAYORES', price: 6500 },
] as const

export const SPECIAL_OFFER: SpecialOffer = {
  title: '¡OFERTA!',
  services: 'CORTE + PEINADO + SECADO',
  price: 8500,
} as const
