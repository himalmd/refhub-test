import Link from 'next/link'

const categories = [
  {
    name: 'Aged Care & Disability Support',
    slug: 'aged-care-disability-support',
    subtests: ['Personal Care Skills', 'Disability Support Worker', 'Community Care Assessment'],
  },
  {
    name: 'Administrative & Office Skills',
    slug: 'administrative-office-skills',
    subtests: ['Data Entry & Accuracy', 'Reception & Admin Skills', 'MS Office Proficiency'],
  },
  {
    name: 'Blue Collar & Warehousing',
    slug: 'blue-collar-warehousing',
    subtests: ['Warehouse Safety', 'Manual Handling', 'Forklift Operations'],
  },
  {
    name: 'Cognitive & Aptitude',
    slug: 'cognitive-aptitude',
    subtests: ['Numerical Reasoning', 'Verbal Reasoning', 'Logical Thinking'],
  },
  {
    name: 'Compliance & Safety',
    slug: 'compliance-safety',
    subtests: ['WHS Awareness', 'Food Safety', 'Emergency Procedures'],
  },
  {
    name: 'Customer Service',
    slug: 'customer-service',
    subtests: ['Customer Service Fundamentals', 'Retail Service Skills'],
  },
  {
    name: 'Finance & Data Analysis',
    slug: 'finance-data-analysis',
    subtests: ['Bookkeeping Basics', 'Data Analysis', 'Excel Proficiency'],
  },
  {
    name: 'Healthcare',
    slug: 'healthcare',
    subtests: ['Clinical Documentation', 'Medication Administration', 'Patient Care'],
  },
  {
    name: 'Hospitality',
    slug: 'hospitality',
    subtests: ['Food & Beverage Service', 'Hotel Operations'],
  },
  {
    name: 'HR & Leadership',
    slug: 'hr-leadership',
    subtests: ['Leadership Skills', 'HR Fundamentals', 'Team Management'],
  },
  {
    name: 'Interpersonal & Workplace Skills',
    slug: 'interpersonal-workplace-skills',
    subtests: ['Communication Skills', 'Teamwork & Collaboration', 'Conflict Resolution'],
  },
  {
    name: 'Recruitment',
    slug: 'recruitment',
    subtests: ['Talent Sourcing', 'Interview Techniques'],
  },
]

export default function AssessmentCategories() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#06294a]">
            Hire smarter across every sector.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-10">
          {categories.map(({ name, slug, subtests }) => (
            <Link
              key={name}
              href={`/custom-assessments-categories/${slug}`}
              className="block bg-gray-50 hover:bg-[#06294a] group rounded-xl p-5 border border-gray-100 transition-all hover:border-[#06294a] hover:shadow-lg"
            >
              <p className="text-sm font-semibold text-[#06294a] group-hover:text-white leading-tight mb-3 transition-colors">
                {name}
              </p>
              <ul className="space-y-1">
                {subtests.map(sub => (
                  <li key={sub} className="flex items-center gap-2 text-xs text-gray-500 group-hover:text-white/70 transition-colors">
                    <span className="h-1 w-1 rounded-full bg-[#4dc0e4] flex-shrink-0" />
                    {sub}
                  </li>
                ))}
              </ul>
            </Link>
          ))}
        </div>

        <div className="bg-[#06294a] rounded-2xl px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-white/80 text-base sm:text-lg font-medium text-center sm:text-left">
            150+ tests across 12 industries — all auto-graded, ready to send.
          </p>
          <div className="flex flex-wrap gap-3 flex-shrink-0">
            <a
              href="https://portal.refhub.com.au/auth/sign-up"
              className="border border-white/40 text-white hover:bg-white/10 px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors"
            >
              Build Test
            </a>
            <Link
              href="/skill-tests-library"
              className="bg-[#4dc0e4] hover:bg-[#3aafdb] text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors"
            >
              Browse Full Library
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
