import Link from 'next/link'

export default function CTASection() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        {/* AI Powered badge */}
        <div className="inline-flex items-center gap-2 mb-6">
          <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-br from-pink-400 to-purple-500" />
          <span className="text-gray-500 text-sm font-medium">AI Powered</span>
        </div>

        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#085da8] mb-10 leading-tight">
          Stop hiring on intuition.
        </h2>

        <Link
          href="/demo-booking"
          className="inline-flex items-center gap-2 bg-[#3b7ef5] hover:bg-[#2563eb] text-white px-10 py-4 rounded-full font-semibold text-base transition-colors shadow-lg shadow-blue-200"
        >
          Book a Demo
        </Link>
      </div>
    </section>
  )
}
