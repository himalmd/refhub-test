const testimonials = [
  {
    name: 'Alan D',
    title: 'Director',
    company: 'CodeMatch',
    question: 'How has RefHub improved your hiring workflow?',
    quote:
      'RefHub has been invaluable for automating a time consuming task. The automated follow-ups alone save us hours every single week.',
  },
  {
    name: 'Suraj A',
    title: 'Director',
    company: 'Interactive Resources',
    question: 'What impact has RefHub had on your candidate screening?',
    quote:
      "This platform is a total game-changer. We're screening candidates 10x faster and consistently getting better quality hires.",
  },
  {
    name: 'Siobhan B',
    title: 'People and Culture Manager',
    company: 'Harrolds',
    question: 'What do you love most about using RefHub?',
    quote:
      "Honestly the best thing to happen to recruitment since LinkedIn. The AI-generated assessments are incredibly accurate.",
  },
  {
    name: 'Jason D',
    title: 'HR & Talent Acquisition Manager',
    company: 'Thornton',
    question: 'How has RefHub changed your reference checking process?',
    quote:
      "Massive time saver! What used to take days now takes minutes. The detailed reporting has completely changed how we make hiring decisions.",
  },
  {
    name: 'Nethmi F',
    title: 'Manager',
    company: 'Aktrapid',
    question: 'Would you recommend RefHub to other HR teams?',
    quote:
      'Good tool, very easy to use. Setup was quick and our reference checks come back fast. Would recommend to any HR team.',
  },
]

function StarRating() {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className="h-4 w-4 text-amber-400 fill-current" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="bg-gray-50 py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-[#4dc0e4] font-semibold text-sm uppercase tracking-widest mb-3">
            Customer Reviews
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#06294a]">
            Loved by recruiters across Australia
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex flex-col"
            >
              <StarRating />
              <p className="text-xs font-semibold text-[#06294a] mt-4 mb-2">{t.question}</p>
              <p className="text-gray-600 leading-relaxed text-sm flex-1">&ldquo;{t.quote}&rdquo;</p>
              <div className="flex items-center gap-3 mt-5 pt-5 border-t border-gray-100">
                <div className="h-9 w-9 rounded-full bg-[#06294a] flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#06294a]">{t.name}</p>
                  <p className="text-xs text-gray-400">{t.title}, {t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
