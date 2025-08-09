import facebookIcon from '@/assets/svgs/facebookIcon.svg'
import instagramIcon from '@/assets/svgs/instagram.svg'
import youtubeIcon from '@/assets/svgs/youtubeIcon.svg'
import rotateIcon from '@/assets/svgs/rotateIcon.svg'
import heartIcon from '@/assets/svgs/heartIcon.svg'
import cartIcon from '@/assets/svgs/cartIcon.svg'

const DataBoxIconLeft = [
  { img: facebookIcon, href: '#', alt: 'facebook' },
  { img: instagramIcon, href: '#', alt: 'instagram' },
  { img: youtubeIcon, href: '#', alt: 'youtube' }
]

const DataBoxIconRight = [
  { img: rotateIcon, href: '#', alt: 'compare' },
  { img: heartIcon, href: '#', alt: 'whiteList' },
  { img: cartIcon, href: '#', alt: 'cart' }
]

const DataMenuLeft = [
  { content: 'Elements', href: '#' },
  { content: 'Our Shop', href: '#' },
  { content: 'About us', href: '#' }
]

const DataMenuRight = [
  { content: 'Contacts', href: '#' },
  { content: 'Search', href: '#' },
  { content: 'Sign in', href: '#' }
]

export { DataBoxIconLeft, DataBoxIconRight, DataMenuLeft, DataMenuRight }
