import Link from 'next/link'

export default function CTASection() {
  return (
    <section className="bg-[#06294a] py-20 lg:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div
          className="rounded-3xl px-8 py-16 lg:py-20"
          style={{
            background:
              'radial-gradient(ellipse at 50% 0%, rgba(77,192,228,0.18) 0%, transparent 70%), #0a3d6b',
            border: '1px solid rgba(255,255,255,0.1)',
          }}
        >
          <div className="inline-flex items-center gap-2 bg-[#4dc0e4]/15 border border-[#4dc0e4]/30 rounded-full px-4 py-1.5 mb-6">
            <span className="h-2 w-2 rounded-full bg-[#4dc0e4] animate-pulse" />
            <span className="text-[#4dc0e4] text-sm font-medium">AI Powered</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Stop hiring on intuition.
          </h2>

          <p className="text-white/60 text-lg max-w-2xl mx-auto mb-10">
            Join 1,200+ Australian businesses using RefHub to screen candidates faster, smarter, and with complete confidence.
          </p>

          <Link
            href="/demo-booking"
            className="inline-flex items-center gap-2 bg-[#4dc0e4] hover:bg-[#3aafdb] text-white px-8 py-4 rounded-xl font-semibold text-lg transition-colors"
          >
            Book a Demo
          </Link>
        </div>
      </div>
    </section>
  )
}
