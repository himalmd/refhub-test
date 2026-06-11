import Link from 'next/link'

export default function ReferenceChecks() {
  return (
    <section className="bg-[#06294a] py-20 lg:py-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 bg-[#4dc0e4]/15 border border-[#4dc0e4]/30 rounded-full px-4 py-1.5 mb-8">
          <span className="text-[#4dc0e4] text-sm font-medium">Also included</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
          Struggling with manual reference checks?
        </h2>

        <p className="text-4xl sm:text-5xl font-bold text-[#4dc0e4] mb-6">
          No phone calls.
        </p>

        <p className="text-lg text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed">
          Send in 60 seconds. RefHub follows up automatically. Fraud detection built in.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="https://portal.refhub.com.au/auth/sign-up"
            className="bg-[#4dc0e4] hover:bg-[#3aafdb] text-white px-8 py-3.5 rounded-lg font-semibold text-base transition-colors"
          >
            Sign Up
          </a>
          <Link
            href="/reference-checks-old-2"
            className="border border-white/30 text-white hover:bg-white/10 px-8 py-3.5 rounded-lg font-semibold text-base transition-colors"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  )
}
