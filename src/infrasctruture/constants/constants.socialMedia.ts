import { IoLogoFacebook, IoLogoInstagram } from 'react-icons/io5'
import { FaSquareXTwitter } from 'react-icons/fa6'
import { createElement } from 'react'
import { SocialMedia } from '../interfaces/contact.interface'

export const SOCIAL_MEDIA: readonly SocialMedia[] = [
  {
    name: 'Facebook',
    icon: createElement(IoLogoFacebook, { className: 'icon' }),
    available: false,
  },
  {
    name: 'Twitter',
    icon: createElement(FaSquareXTwitter, { className: 'icon' }),
    available: false,
  },
  {
    name: 'Instagram',
    icon: createElement(IoLogoInstagram, { className: 'icon' }),
    available: false,
  },
]
