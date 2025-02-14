import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MainNav } from "@/components/college/main-nav"
import { Footer } from "@/components/college/footer"

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-white">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/placeholder.svg" alt="Logo" width={150} height={40} />
          </Link>
          <MainNav />
        </div>
      </header>

      <section className="relative h-[400px] md:h-[600px]">
        <Image
          src="/image/college-stock-image.jpg"
          alt="Campus View"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="container relative z-10 flex h-full flex-col justify-center px-4 md:px-6">
          <span className="text-sm font-semibold uppercase tracking-wider text-white">Welcome</span>
          <h1 className="mt-2 text-3xl md:text-5xl font-bold text-white">Alumni, Friends, and Families</h1>
          <p className="mt-4 max-w-2xl text-base md:text-lg text-white">
            You're an integral part of our community. Discover ways to enhance your relationship with us by staying
            informed, attending events and getting involved.
          </p>
        </div>
      </section>

      <section className="py-8 md:py-16">
        <div className="container px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8">Latest Stories</h2>
          <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="w-full md:col-span-full lg:col-span-2">
              <div className="group rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200">
                <div className="relative h-[200px] md:h-[300px]">
                  <Image
                    src="/image/college-stock-image.jpg"
                    alt="Alumni Travel Story"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-200"
                  />
                </div>
                <div className="p-4 md:p-6 bg-white">
                  <h3 className="text-xl md:text-2xl font-semibold mb-2">Alumni Share Why They Travel with Us</h3>
                  <p className="text-gray-600">
                    Intellectual curiosity brings travelers together on unforgettable journeys
                  </p>
                </div>
              </div>
            </div>
            {[1, 2, 3].map((i) => (
              <div key={i} className="w-full">
                <div className="group rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200">
                  <div className="relative h-[200px]">
                    <Image
                      src="/image/college-stock-image.jpg"
                      alt="Story thumbnail"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-200"
                    />
                  </div>
                  <div className="p-4 md:p-6 bg-white">
                    <h3 className="text-lg md:text-xl font-medium mb-2">Featured Story Title</h3>
                    <p className="text-gray-600">Brief description of the story goes here</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 md:mt-8 text-center">
            <Button variant="outline" className="px-6 py-2 rounded-full hover:bg-gray-100 transition-colors">
              View More Stories
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-8 md:py-16">
        <div className="container px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8">Upcoming Events</h2>
          <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {[
              {
                date: "February 16, 2025",
                title: "Basketball In Atlanta",
                location: "ATLANTA, ATHLETICS",
              },
              {
                date: "February 22 - February 28, 2025",
                title: "Cuba: Art, Culture & History",
                location: "TRAVEL PROGRAM",
              },
              {
                date: "February 22, 2025",
                title: "Alumni Night at the Bruins",
                location: "BOSTON, REGIONAL ALUMNI CLUB",
              },
            ].map((event, i) => (
              <div 
                key={i} 
                className="bg-white p-4 md:p-6 border-l-4 border-blue-600 md:rounded-lg md:border-l-0 md:shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <p className="text-blue-600 font-medium mb-2">{event.date}</p>
                <h3 className="text-lg md:text-xl font-medium mb-2">{event.title}</h3>
                <p className="text-sm text-gray-600">{event.location}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 md:mt-8 text-center">
            <Button variant="outline" className="px-6 py-2 rounded-full hover:bg-gray-100 transition-colors">
              More Events
            </Button>
          </div>
        </div>
      </section>

      <section className="py-8 md:py-16">
        <div className="container px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8">Featured Alumni Programs</h2>
          <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Brandeis Travelers",
                description:
                  "Explore distant lands, experience other cultures, and gain unique perspectives by traveling with faculty experts and fellow alumni and friends.",
                image: "/image/college-stock-image.jpg",
              },
              {
                title: "B Connect",
                description:
                  "Join the online community for mentoring, networking and connecting with old and new friends.",
                image: "/image/college-stock-image.jpg",
              },
              {
                title: "Rise Together",
                description:
                  "Connect with fellow graduates and current students for meaningful interactions, career connections, and professional development.",
                image: "/image/college-stock-image.jpg",
              },
            ].map((program, i) => (
              <div key={i} className="w-full bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200">
                {program.image && (
                  <div className="relative h-[200px]">
                    <Image
                      src={program.image}
                      alt={program.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <div className="p-4 md:p-6">
                  <h3 className="text-lg md:text-xl font-medium mb-2">{program.title}</h3>
                  <p className="text-gray-600">{program.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}