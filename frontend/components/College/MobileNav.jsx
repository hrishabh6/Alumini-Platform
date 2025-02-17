import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"
import {  X } from "lucide-react"
import Link from "next/link"
import { navigationData } from "@/constants"
import { useState } from "react"
import PropTypes from 'prop-types';

console.log("this is recompiling")


export function MobileNav({ setMobileMenuOpen }) {
  return (
    <div className="relative">
      <div className="fixed inset-0 bg-white z-50">
        <div className="flex items-center justify-between p-4 bg-blue-900">
          <Link href="/" className="text-white text-xl font-semibold">
            Brandeis
          </Link>
          <button onClick={() => setMobileMenuOpen(false)} className="text-white">
            <X className="h-6 w-6" />
          </button>
        </div>
        
        <div className="p-4 overflow-y-auto h-[calc(100vh-4rem)]">
          <Accordion type="single" collapsible className="w-full">
            {Object.entries(navigationData).map(([key, sections]) => (
              <AccordionItem value={key} key={key}>
                <AccordionTrigger className="text-blue-900 font-semibold">
                  {key.replace(/([A-Z])/g, " $1").trim()}
                </AccordionTrigger>
                <AccordionContent>
                  {sections.map((section) => (
                    <div key={section.title} className="py-2">
                      <h3 className="font-medium text-blue-900">{section.title}</h3>
                      <ul className="pl-4 space-y-2">
                        {section.items.map((item) => (
                          <li key={item}>
                            <Link href="#" className="text-gray-600 hover:text-blue-900">
                              {item}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <button className="w-full bg-teal-600 text-white py-3 rounded-md mt-6 mb-2">
            GIVE NOW
          </button>
          
          <button className="w-full border border-blue-900 text-blue-900 py-3 rounded-md mb-2">
            CONTACT
          </button>
          
          <button className="w-full border border-blue-900 text-blue-900 py-3 rounded-md mb-2">
            B CONNECT
          </button>
        </div>
      </div>
    </div>

  )
}

MobileNav.propTypes = {
  setMobileMenuOpen: PropTypes.func.isRequired,
};
