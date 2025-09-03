import Link from 'next/link'
import { Instagram, Facebook, Mail, Heart } from 'lucide-react'

const socialLinks = [
  {
    name: 'Instagram',
    href: '#',
    icon: Instagram,
  },
  {
    name: 'Facebook',
    href: '#',
    icon: Facebook,
  },
  {
    name: 'Email',
    href: 'mailto:hello@augustjones.com',
    icon: Mail,
  },
]

const footerNavigation = [
  {
    name: 'Gallery',
    href: '/gallery',
  },
  {
    name: 'About',
    href: '/about',
  },
  {
    name: 'Contact',
    href: '/contact',
  },
]

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Heart className="h-6 w-6 text-gray-900" />
              <span className="text-lg font-bold text-gray-900">August Jones</span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Unique, one-of-a-kind clothing and accessories. Each piece tells a story 
              and is crafted with love and attention to detail.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
              Navigation
            </h3>
            <ul className="space-y-2">
              {footerNavigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-600 hover:text-gray-900 text-sm transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
              Follow Us
            </h3>
            <div className="flex space-x-4">
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
                  target={item.name !== 'Email' ? '_blank' : undefined}
                  rel={item.name !== 'Email' ? 'noopener noreferrer' : undefined}
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-5 w-5" aria-hidden="true" />
                </a>
              ))}
            </div>
            <p className="text-gray-600 text-sm">
              Stay updated with our latest creations and behind-the-scenes content.
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <p className="text-gray-600 text-sm">
              &copy; {new Date().getFullYear()} August Jones. All rights reserved.
            </p>
            <p className="text-gray-600 text-sm mt-2 md:mt-0">
              Made with <Heart className="inline h-4 w-4 text-red-500" /> for unique fashion
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
