'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const testimonials = [
  {
    name: 'Alan D',
    role: 'Director - CodeMatch',
    logo: '/images/testimonials/codematch%20colour%20logo.svg',
    logoText: null,
    items: [
      {
        q: 'What do you like best about Ref Hub?',
        a: 'For a start-up business, it is invaluable for automating a time consuming task; reference checking.',
      },
      {
        q: 'What problems is Ref Hub solving and how does that benefit you?',
        a: 'Online reference checking - automates the reference checking process saving time and money.',
      },
    ],
  },
  {
    name: 'Suraj A',
    role: 'Director - Interactive Resources',
    logo: '/images/testimonials/R-interactive-Logo-Final-4%201.avif',
    logoText: null,
    items: [
      {
        q: '"Our experience with Ref Hub at Interactive Resources has been a total game-changer."',
        a: "Remember those long, exhausting hours we used to spend on reference checks? Well, they're a distant memory now, thanks to RefHub. It's not just faster; it's also impressively accurate. We've practically eliminated errors and reduced the risk of oversight.",
      },
      {
        q: null,
        a: "Honestly, if you're in the market for a way to simplify and enhance your reference checks, I can't recommend RefHub enough. It's a breath of fresh air for our hiring process!",
      },
    ],
  },
  {
    name: 'Siobhan B',
    role: 'People and Culture Manager - Harrolds',
    logo: '/images/testimonials/harrolds.avif',
    logoText: null,
    items: [
      {
        q: '"The best thing to happen to recruitment since Linkedin"',
        a: 'Ref Hub streamlines and simplifies the referencing process giving you, the recruitment / hiring manager the time to focus on those bigger projects / responsibilities, without detracting from the importance of these process. You can pre-build reference questionnaires depending on the role / level of information required and, from the refhub platform, send out requests AND reminders - all with the click of a button.',
      },
    ],
  },
  {
    name: 'Jason D',
    role: 'Thornton - HR & Talent Acquisition Manager',
    logo: '/images/testimonials/Thornton-depend-logo.avif',
    logoText: null,
    items: [
      {
        q: 'Great tool, Massive Time Saver!',
        a: null,
      },
      {
        q: 'What do you like best about Ref Hub?',
        a: 'The ability to create and store multiple checks for different roles is a big deal for us.',
      },
      {
        q: 'What problems is Ref Hub solving and how does that benefit you?',
        a: 'This is a massive time saver. We are recruiting non-stop, so the ability to pretty much automate a step in the process gives us more time to source and speak to candidates.',
      },
    ],
  },
  {
    name: 'Nethmi F',
    role: 'Manager - Aktrapid',
    logo: '/images/testimonials/aktrapid%20colour%20logo.svg',
    logoText: null,
    items: [
      {
        q: '"Good Tool. easy to use to conduct Reference checks for our members"',
        a: null,
      },
      {
        q: 'What do you like best about Ref Hub?',
        a: 'Saves time and an all in one platform to get reference checks, Police checks done. Love it!',
      },
      {
        q: 'What do you dislike about Ref Hub?',
        a: 'None so far. Everything works pretty well.',
      },
    ],
  },
]

const CARDS_PER_PAGE = 3

function GoogleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7 flex-shrink-0" aria-label="Google Review">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
    </svg>
  )
}

function StarRating() {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className="h-5 w-5 text-amber-400 fill-current" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

function TestimonialCard({
  name,
  role,
  logo,
  logoText,
  items,
}: (typeof testimonials)[number]) {
  return (
    <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex flex-col h-full">
      {/* Logo row */}
      <div className="flex items-center justify-between mb-5">
        {logo ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={logo}
            alt={name}
            className="h-10 w-auto max-w-[160px] object-contain"
          />
        ) : (
          <span className="text-sm font-bold text-gray-700 leading-tight">{logoText}</span>
        )}
        <GoogleIcon />
      </div>

      {/* Name + role */}
      <p className="font-bold text-[#0f172a]">{name}</p>
      <p className="text-sm text-gray-500 mb-3">{role}</p>

      {/* Stars */}
      <div className="flex items-center gap-2 mb-5">
        <StarRating />
        <span className="text-sm text-gray-500">(5/5)</span>
      </div>

      {/* Q&A content */}
      <div className="space-y-3 flex-1">
        {items.map((item, i) => (
          <div key={i}>
            {item.q && (
              <p className="text-sm font-bold text-[#0f172a] mb-1 leading-snug">{item.q}</p>
            )}
            {item.a && (
              <p className="text-sm text-gray-600 leading-relaxed">{item.a}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Testimonials() {
  const [page, setPage] = useState(0)
  const totalPages = Math.ceil(testimonials.length / CARDS_PER_PAGE)
  const visible = testimonials.slice(page * CARDS_PER_PAGE, (page + 1) * CARDS_PER_PAGE)

  return (
    <section className="bg-[#f0f4ff] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-10 items-start mb-14">
          <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
            <span className="text-[#06294a]">Trusted by leading </span>
            <span className="text-[#085da8]">companies and professionals.</span>
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed lg:pt-3">
            Professionals share how our tools revolutionized hiring and development, delivering results and boosting confidence in evaluations.
          </p>
        </div>

        {/* Cards */}
        <div key={page} className="grid lg:grid-cols-3 gap-6 mb-10 items-start">
          {visible.map((t) => (
            <TestimonialCard key={t.name} {...t} />
          ))}
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between">
          {/* Dots */}
          <div className="flex items-center gap-2">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setPage(i)}
                aria-label={`Go to page ${i + 1}`}
                className={`rounded-full transition-all duration-200 ${
                  i === page
                    ? 'bg-[#06294a] w-5 h-2.5'
                    : 'bg-gray-300 hover:bg-gray-400 w-2.5 h-2.5'
                }`}
              />
            ))}
          </div>

          {/* Arrows */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setPage((p) => Math.max(0, p - 1))}
              disabled={page === 0}
              aria-label="Previous"
              className="h-10 w-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:bg-white hover:border-gray-400 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
              disabled={page === totalPages - 1}
              aria-label="Next"
              className="h-10 w-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:bg-white hover:border-gray-400 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  )
}
