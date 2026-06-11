import Link from 'next/link'
import { Award, Accessibility, Brain, Briefcase, TrendingUp, Users, ShieldCheck, Star } from 'lucide-react'

const categories = [
  {
    Icon: Award,
    name: 'Interpersonal & Workplace Skills',
    slug: 'interpersonal-workplace-skills',
    tests: 5,
    subtests: [
      'Customer Service Skills Assessment',
      'Communication Skills',
      'Teamwork & Collaboration',
    ],
  },
  {
    Icon: Accessibility,
    name: 'Aged Care & Disability Support',
    slug: 'aged-care-disability-support',
    tests: 5,
    subtests: [
      'Core Aged Care Skills',
      'Soft Skills & Situational in Aged Care',
      'Specialized Aged Care Skills',
    ],
  },
  {
    Icon: Brain,
    name: 'Cognitive & Aptitude Tests',
    slug: 'cognitive-aptitude-tests',
    tests: 2,
    subtests: [
      'Mechanical Reasoning',
      'Problem-Solving & Logical Reasoning',
    ],
  },
  {
    Icon: Briefcase,
    name: 'Blue Collar & Warehousing',
    slug: 'blue-collar-warehousing',
    tests: 3,
    subtests: [
      'Basic Forklift Operator Skills',
      'Advanced Forklift Operator Skills',
      'Pick Packer Skills',
    ],
  },
  {
    Icon: TrendingUp,
    name: 'Finance & Data Analysis',
    slug: 'finance-data-analysis',
    tests: 1,
    subtests: [
      'Finance & Analytical Skills',
    ],
  },
  {
    Icon: Users,
    name: 'Administrative & Office Skills',
    slug: 'administrative-office-skills',
    tests: 6,
    subtests: [
      'Administrative / Office Skills',
      'MS Word Skills Assessment',
      'MS Excel Skills Assessment',
    ],
  },
  {
    Icon: ShieldCheck,
    name: 'Compliance & Safety',
    slug: 'compliance-safety',
    tests: 9,
    subtests: [
      'Basic Workplace Safety Assessment',
      'OHS Safe Work Practices',
      'Electrical Safety & Basics',
    ],
  },
]

export default function AssessmentCategories() {
  return (
    <section className="bg-gray-50 py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center bg-blue-100 rounded-full px-4 py-1.5 mb-5">
            <span className="text-[#085da8] text-xs font-semibold uppercase tracking-widest">
              Assessments for every industry
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#0f172a] mb-4">
            Hire smarter across every sector.
          </h2>
          <p className="text-gray-500 text-lg">
            Expert-built tests for every role you hire. Filter by industry, role, or skill type.
          </p>
        </div>

        {/* Category cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {categories.map(({ Icon, name, slug, tests, subtests }) => (
            <div
              key={name}
              className="bg-white hover:bg-[#085da8] group rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-md hover:border-[#085da8] flex flex-col transition-all duration-200 cursor-pointer"
            >
              {/* Icon + test count */}
              <div className="flex items-center justify-between mb-4">
                <div className="h-10 w-10 rounded-xl bg-blue-50 group-hover:bg-white/20 flex items-center justify-center flex-shrink-0 transition-colors">
                  <Icon className="h-5 w-5 text-[#085da8] group-hover:text-white transition-colors" />
                </div>
                <span className="text-xs font-semibold text-[#085da8] group-hover:text-white/80 transition-colors">{tests} tests</span>
              </div>

              {/* Name */}
              <h3 className="text-base font-bold text-[#0f172a] group-hover:text-white mb-3 leading-snug transition-colors">{name}</h3>

              {/* Subtests */}
              <ul className="space-y-1.5 flex-1 mb-5">
                {subtests.map(sub => (
                  <li key={sub} className="flex items-start gap-2 text-xs text-gray-500">
                    <span className="mt-1.5 h-1 w-1 rounded-full bg-gray-300 group-hover:bg-white/50 flex-shrink-0 transition-colors" />
                    <span className="text-gray-500 group-hover:text-white/70 transition-colors">{sub}</span>
                  </li>
                ))}
              </ul>

              {/* Link */}
              <Link
                href={`/custom-assessments-categories/${slug}`}
                className="inline-flex items-center gap-1 text-[#085da8] group-hover:text-white hover:text-[#1d4ed8] text-xs font-semibold transition-colors"
              >
                Browse category
                <svg viewBox="0 0 16 16" className="h-3 w-3 fill-current" aria-hidden="true">
                  <path d="M6.22 3.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L9.94 8 6.22 4.28a.75.75 0 0 1 0-1.06z" />
                </svg>
              </Link>
            </div>
          ))}
        </div>

        {/* Popular now strip */}
        <div className="bg-blue-50 rounded-2xl px-6 py-4 flex flex-wrap items-center gap-3 mb-10">
          <div className="flex items-center gap-2 flex-shrink-0">
            <Star className="h-4 w-4 text-red-400 fill-red-400" />
            <span className="text-sm font-semibold text-[#0f172a]">Popular now</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map(({ name, slug }) => (
              <Link
                key={slug}
                href={`/custom-assessments-categories/${slug}`}
                className="bg-white text-[#0f172a] hover:bg-blue-100 text-xs font-medium px-3 py-1.5 rounded-full border border-blue-100 transition-colors"
              >
                {name}
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-gray-700 text-base">
            <span className="font-bold text-[#0f172a]">150+ tests</span> across 12 industries — all auto-graded, ready to send.
          </p>
          <div className="flex items-center gap-3 flex-shrink-0">
            <a
              href="https://portal.refhub.com.au/auth/sign-up"
              className="border border-gray-300 text-[#0f172a] hover:bg-gray-100 px-6 py-2.5 rounded-full text-sm font-semibold transition-colors"
            >
              Build Test
            </a>
            <Link
              href="/skill-tests-library"
              className="bg-[#06294a] hover:bg-[#0a3d6b] text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-colors"
            >
              Browse Full Library
            </Link>
          </div>
        </div>

      </div>
    </section>
  )
}
