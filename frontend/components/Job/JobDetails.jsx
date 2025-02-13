"use client"

import Link from "next/link"
import { BookmarkIcon, MapPin, Share2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"



export default function JobDetails({ job }) {
  const jobData = job || {
    title: "UI/UX Designer",
    company: "Pixelz Studio",
    location: "Yogyakarta, Indonesia",
    type: "Fulltime",
    workMode: "Remote",
    experience: "2-4 Years",
    postedTime: "2 days ago",
    applicants: 521,
    description:
      "As an UI/UX Designer on Pixelz Studio, you'll focus on design user-friendly on several platform (web, mobile, dashboard, etc) to our users needs. Your innovative solution will enhance the user experience on several platforms. Join us and let's making impact on user engagement at Pixelz Studio.",
    qualifications: [
      "At least 2-4 years of relevant experience in product design or related roles.",
      "Knowledge of design validation, either through quantitative or qualitative research.",
      "Have good knowledge using Figma and Figiam",
      "Experience with analytics tools to gather data from users.",
    ],
    responsibilities: [
      "Create design and user journey on every features and product/business units across multiples devices (Web+App)",
      "Identifying design problems through user journey and devising elegant solutions",
      "Develop low and hi fidelity designs, user experience flow, & prototype, translate it into highly-polished visual composites following style and brand guidelines.",
      "Brainstorm and works together with Design Lead, UX Engineers, and PMs to execute a design sprint on specific story or task",
    ],
    attachments: [
      { name: "Jobs_Requirements.pdf", url: "#" },
      { name: "Company_Benefits.pdf", url: "#" },
    ],
  }

  const similarJobs = [
    {
      id: 1,
      title: "Lead UI Designer",
      company: "GDeck",
      location: "Jakarta, Indonesia",
      type: "Fulltime",
      workMode: "Onsite",
      experience: "3-5 Years",
      postedTime: "2 days ago",
      applicants: 521,
      logo: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 2,
      title: "Sr. UX Designer",
      company: "GoPay",
      location: "Jakarta, Indonesia",
      type: "Fulltime",
      workMode: "Onsite",
      experience: "3-5 Years",
      postedTime: "2 days ago",
      applicants: 210,
      logo: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 3,
      title: "Jr. UI Designer",
      company: "OVO",
      location: "Jakarta, Indonesia",
      type: "Fulltime",
      workMode: "Onsite",
      experience: "1-3 Years",
      postedTime: "an hour ago",
      applicants: 120,
      logo: "/placeholder.svg?height=40&width=40",
    },
  ]

  return (
    <div className="min-h-screen bg-slate-50 pb-12 dark:bg-slate-900">
      <div className="container mx-auto max-w-7xl px-4 py-8 md:px-6">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="space-y-6 md:col-span-2">
            <div className="flex flex-col gap-6 rounded-xl bg-white p-6 shadow-sm dark:bg-slate-800">
              <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 overflow-hidden rounded-xl bg-slate-100 dark:bg-slate-700">
                    <img
                      src="/placeholder.svg?height=48&width=48"
                      alt={jobData.company}
                      className="h-full w-full object-cover p-2"
                    />
                  </div>
                  <div className="space-y-1">
                    <h1 className="text-2xl font-bold tracking-tight">{jobData.title}</h1>
                    <div className="space-y-2">
                      <p className="text-lg font-medium text-blue-600 dark:text-blue-400">{jobData.company}</p>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        <span>{jobData.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-2 sm:flex-col">
                  <Button className="w-full sm:w-auto">Apply Now</Button>
                  <div className="flex gap-2">
                    <Button variant="outline" size="icon">
                      <BookmarkIcon className="h-4 w-4" />
                      <span className="sr-only">Save job</span>
                    </Button>
                    <Button variant="outline" size="icon">
                      <Share2 className="h-4 w-4" />
                      <span className="sr-only">Share job</span>
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700 ring-1 ring-inset ring-blue-600/20 dark:bg-blue-900/30 dark:text-blue-400 dark:ring-blue-400/30">
                  {jobData.type}
                </span>
                <span className="inline-flex items-center rounded-full bg-green-50 px-3 py-1 text-sm font-medium text-green-700 ring-1 ring-inset ring-green-600/20 dark:bg-green-900/30 dark:text-green-400 dark:ring-green-400/30">
                  {jobData.workMode}
                </span>
                <span className="inline-flex items-center rounded-full bg-purple-50 px-3 py-1 text-sm font-medium text-purple-700 ring-1 ring-inset ring-purple-600/20 dark:bg-purple-900/30 dark:text-purple-400 dark:ring-purple-400/30">
                  {jobData.experience}
                </span>
              </div>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span>{jobData.postedTime}</span>
                <span>•</span>
                <span>{jobData.applicants} Applicants</span>
              </div>
            </div>

            <div className="space-y-6 rounded-xl bg-white p-6 shadow-sm dark:bg-slate-800">
              <div className="space-y-4">
                <h2 className="text-xl font-semibold">About this role</h2>
                <p className="text-sm leading-relaxed text-muted-foreground">{jobData.description}</p>
              </div>
              <div className="space-y-4">
                <h2 className="text-xl font-semibold">Qualification</h2>
                <ul className="list-inside list-disc space-y-2 text-sm leading-relaxed text-muted-foreground">
                  {jobData.qualifications.map((qualification, index) => (
                    <li key={index}>{qualification}</li>
                  ))}
                </ul>
              </div>
              <div className="space-y-4">
                <h2 className="text-xl font-semibold">Responsibility</h2>
                <ul className="list-inside list-disc space-y-2 text-sm leading-relaxed text-muted-foreground">
                  {jobData.responsibilities.map((responsibility, index) => (
                    <li key={index}>{responsibility}</li>
                  ))}
                </ul>
              </div>
              <div className="space-y-4">
                <h2 className="text-xl font-semibold">Attachment</h2>
                <div className="flex flex-wrap gap-2">
                  {jobData.attachments.map((attachment, index) => (
                    <Link
                      key={index}
                      href={attachment.url}
                      className="inline-flex items-center gap-2 rounded-lg border bg-slate-50 px-3 py-1.5 text-sm font-medium hover:bg-slate-100 dark:bg-slate-900 dark:hover:bg-slate-800"
                    >
                      {attachment.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <Card className="h-fit">
            <CardHeader>
              <h2 className="text-xl font-semibold">Similar Jobs</h2>
            </CardHeader>
            <CardContent className="space-y-4">
              {similarJobs.map((job) => (
                <div key={job.id} className="space-y-3">
                  <div className="flex items-start justify-between">
                    <div className="flex gap-3">
                      <img
                        src={job.logo || "/placeholder.svg"}
                        alt={job.company}
                        className="h-10 w-10 rounded-lg border bg-slate-100 object-cover p-2 dark:bg-slate-800"
                      />
                      <div>
                        <h3 className="font-medium">{job.title}</h3>
                        <p className="text-sm text-muted-foreground">
                          {job.company} • {job.location}
                        </p>
                      </div>
                    </div>
                    <Button variant="ghost" size="icon">
                      <BookmarkIcon className="h-4 w-4" />
                      <span className="sr-only">Save job</span>
                    </Button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-flex items-center rounded-full bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-600/20 dark:bg-blue-900/30 dark:text-blue-400 dark:ring-blue-400/30">
                      {job.type}
                    </span>
                    <span className="inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20 dark:bg-green-900/30 dark:text-green-400 dark:ring-green-400/30">
                      {job.workMode}
                    </span>
                    <span className="inline-flex items-center rounded-full bg-purple-50 px-2 py-1 text-xs font-medium text-purple-700 ring-1 ring-inset ring-purple-600/20 dark:bg-purple-900/30 dark:text-purple-400 dark:ring-purple-400/30">
                      {job.experience}
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span>{job.postedTime}</span>
                    <span>•</span>
                    <span>{job.applicants} Applicants</span>
                  </div>
                  <Separator />
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

