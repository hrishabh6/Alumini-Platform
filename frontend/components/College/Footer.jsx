import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-dark-100 text-white">
      <div className="container py-8 md:py-12 px-4">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="text-center md:text-left">
            <Image
              src="/placeholder.svg"
              alt="Brandeis University"
              width={200}
              height={50}
              className="invert mx-auto md:mx-0"
            />
          </div>
          <div className="text-center md:text-left">
            <h3 className="mb-4 text-sm font-semibold uppercase">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm hover:text-primary inline-block">
                  About Brandeis Advancement
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:text-primary inline-block">
                  Brandeis.edu
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:text-primary inline-block">
                  Brandeis National Committee
                </Link>
              </li>
            </ul>
          </div>
          <div className="text-center md:text-left">
            <h3 className="mb-4 text-sm font-semibold uppercase">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm hover:text-primary inline-block">
                  Accessibility Statement
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:text-primary inline-block">
                  Advancement Job Opportunities
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:text-primary inline-block">
                  Privacy Statement
                </Link>
              </li>
            </ul>
          </div>
          <div className="text-center md:text-left">
            <h3 className="mb-4 text-sm font-semibold uppercase">Connect</h3>
            <div className="flex justify-center md:justify-start space-x-4">
              <Link href="#" className="text-white/80 hover:text-primary">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-white/80 hover:text-primary">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-white/80 hover:text-primary">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-white/80 hover:text-primary">
                <Youtube className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-white/80 hover:text-primary">
                <Twitter className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-white/10 pt-8 text-center text-sm">© 2025 Brandeis University</div>
      </div>
    </footer>
  )
}

