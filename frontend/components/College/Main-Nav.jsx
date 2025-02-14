"use client"
import Link from "next/link"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { useState } from "react"
import { Menu} from "lucide-react"
import {MobileNav} from "./MobileNav"
import { navigationData } from "@/constants"


export function MainNav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  return (
    <>
      {/* Mobile Hamburger Menu */}
      <div className="md:hidden">
        <button
          onClick={() => setMobileMenuOpen(true)}
          className="text-gray-600 hover:text-gray-900"
        >
          <Menu className="h-6 w-6" />
        </button>
        {mobileMenuOpen && <MobileNav setMobileMenuOpen={setMobileMenuOpen} />}
      </div>
      
      {/* Desktop Navigation */}
      <div className="hidden md:block">
        
        <NavigationMenu className="relative">
          <NavigationMenuList className="flex space-x-4">
            {Object.entries(navigationData).map(([key, sections, index]) => (
              <NavigationMenuItem key={key}>
                <NavigationMenuTrigger className="text-gray-800 hover:text-gray-600 font-medium">
                  {key.replace(/([A-Z])/g, " $1").trim().toUpperCase()}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[800px] grid-cols-3 gap-4 p-6 bg-white shadow-lg rounded-lg">
                    {sections.map((section) => (
                      <div key={section.title}>
                        <h3 className="font-medium text-base text-gray-900 mb-3">
                          {section.title}
                        </h3>
                        <ul className="space-y-2">
                          {section.items.map((item) => (
                            <li key={item}>
                              <NavigationMenuLink asChild>
                                <Link
                                  href="#"
                                  className="block text-sm text-gray-800 hover:text-gray-600 transition-colors"
                                >
                                  {item}
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </>
  )
}

export default MainNav