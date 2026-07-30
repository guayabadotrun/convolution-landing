import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import mainLogo from '../assets/images/convolution-logo-main.svg'
import { Button } from './CTA/Button'

const navigation = [
  { name: 'About', href: 'https://docs.convolution.agency', current: false },
  { name: 'Whitepaper', href: 'https://docs.convolution.agency/tokenomics', current: false },
]

export default function TopNav() {
  return (
    <Disclosure as="nav">
      <div className="mx-auto px-2 w-full max-w-screen-2xl sm:px-6 lg:px-12">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex flex-1 items-center justify-between">
            {/* Logo */}
            <div className="flex shrink-0 items-center p-2 lg:p-0">
              <img
                alt="Convolution Agency"
                src={mainLogo}
                className="h-8 w-auto"
              />
            </div>
            {/* Nav */}
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-current={item.current ? 'page' : undefined}
                    className="relative self-center px-3 py-2 font-afacad text-base uppercase tracking-wide text-black transition-colors after:absolute after:left-3 after:right-3 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-black after:transition-transform after:duration-300 hover:after:scale-x-100"
                  >
                    {item.name}
                  </a>
                ))}
                <Button variant="dark" href="https://app.convolution.agency">Launch App</Button>
              </div>
            </div>
          </div>
          {/* Burger menu */}
          <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block size-8 group-data-[open]:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden size-8 group-data-[open]:block" />
            </DisclosureButton>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-current={item.current ? 'page' : undefined}
              className="block px-3 py-2 font-afacad text-base uppercase tracking-wide text-black hover:underline underline-offset-4"
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}
