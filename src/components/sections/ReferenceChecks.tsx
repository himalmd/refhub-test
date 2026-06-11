import Link from 'next/link'
import Image from 'next/image'

export default function ReferenceChecks() {
  return (
    <section className="bg-[#eef2ff] py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl overflow-hidden shadow-sm grid lg:grid-cols-2">

          {/* Left — content */}
          <div className="p-10 lg:p-14 flex flex-col justify-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[#eef2ff] rounded-full px-4 py-1.5 mb-8 self-start">
              <svg viewBox="0 0 16 16" className="h-3.5 w-3.5 text-[#085da8] fill-current flex-shrink-0" aria-hidden="true">
                <path d="M9.5 1L3 9h5.5L6.5 15 13 7H7.5L9.5 1z" />
              </svg>
              <span className="text-[#085da8] text-xs font-semibold uppercase tracking-widest">Also Included</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-[#0f172a] mb-4 leading-tight">
              Struggling with manual reference checks?
            </h2>

            <p className="text-3xl sm:text-4xl font-bold text-[#E07050] mb-6">
              No phone calls.
            </p>

            <p className="text-gray-500 text-base leading-relaxed mb-10">
              Send in 60 seconds. RefHub follows up automatically.<br />
              Fraud detection built in.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="https://portal.refhub.com.au/auth/sign-up"
                className="bg-[#3b7ef5] hover:bg-[#2563eb] text-white px-7 py-3 rounded-full font-semibold text-sm transition-colors shadow-md shadow-blue-100"
              >
                Sign Up
              </a>
              <Link
                href="/reference-checks"
                className="border border-gray-300 text-[#0f172a] hover:bg-gray-50 px-7 py-3 rounded-full font-semibold text-sm transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Right — image */}
          <div className="relative bg-[#f8faff] flex items-center justify-center p-8 lg:p-10 min-h-[380px]">
            <Image
              src="/images/reference-check-BackgroundBorder.webp"
              alt="Reference Check UI"
              width={560}
              height={460}
              className="w-full h-auto object-contain drop-shadow-xl"
            />
          </div>

        </div>
      </div>
    </section>
  )
}
