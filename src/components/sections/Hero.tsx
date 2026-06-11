import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative bg-[#011930] overflow-hidden">
      {/* Dot grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />
      {/* Subtle radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 70% 60% at 30% 50%, rgba(77,192,228,0.06) 0%, transparent 70%)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-0 lg:pt-20">
        {/* Hero image — absolutely positioned, right-aligned, free to grow */}
        <Image
          src="https://cdn.prod.website-files.com/66e8d7e15d4fcdb58476f57b/6a0cfbcfa34b99d3aebc99f5_Group%201000004694.webp"
          alt="RefHub pre-employment screening platform"
          width={1060}
          height={880}
          className="hidden lg:block absolute right-0 bottom-0 w-[56%] h-auto object-contain object-right-bottom pointer-events-none"
          priority
        />

        {/* Left: copy */}
        <div className="relative z-10 pb-20 lg:pb-28 lg:max-w-[520px]">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/15 rounded-full px-4 py-1.5 mb-8">
            <span className="h-2 w-2 rounded-full bg-[#E07050]" />
            <span className="text-white/80 text-xs font-semibold uppercase tracking-widest">AI Powered</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold leading-tight mb-6">
            <span className="text-white">Pre-employment screening</span>
            <br />
            <span className="text-[#E07050]">For confident hiring.</span>
          </h1>

          <p className="text-base text-white/55 leading-relaxed mb-10 max-w-md">
            Instant talent spotting. Precision skills assessment. Reliable reference checks. Hours saved.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="https://portal.refhub.com.au/auth/sign-up"
              className="inline-flex items-center gap-2 bg-[#E07050] hover:bg-[#C85C3E] text-white px-7 py-3.5 rounded-lg font-semibold text-base transition-colors"
            >
              Let&apos;s Start
              <svg viewBox="0 0 16 16" className="h-4 w-4 fill-current" aria-hidden="true">
                <path d="M6.22 3.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L9.94 8 6.22 4.28a.75.75 0 0 1 0-1.06z" />
              </svg>
            </a>
            <Link
              href="#pricing"
              className="inline-flex items-center gap-2 border border-white/20 text-white hover:bg-white/10 px-7 py-3.5 rounded-lg font-semibold text-base transition-colors"
            >
              View Pricing
            </Link>
          </div>

          {/* Mobile: show image inline below buttons */}
          <div className="mt-10 lg:hidden">
            <Image
              src="https://cdn.prod.website-files.com/66e8d7e15d4fcdb58476f57b/6a0cfbcfa34b99d3aebc99f5_Group%201000004694.webp"
              alt="RefHub pre-employment screening platform"
              width={1060}
              height={880}
              className="w-full h-auto object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
