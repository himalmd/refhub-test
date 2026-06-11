import Image from 'next/image'

export default function TrustSection() {
  return (
    <section className="bg-[#085da8] py-20 lg:py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-5 leading-tight">
          <span className="text-white">Secure </span>
          <span className="text-white/50">and </span>
          <span className="text-white">Compliant </span>
          <span className="text-white/50">for </span>
          <span className="text-white">Businesses of All Sizes</span>
        </h2>
        <p className="text-white/60 text-lg max-w-2xl mx-auto mb-12 leading-relaxed">
          RefHub integrates with your tools, ensures data security, and streamlines recruiting with AI-driven insights.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-8">
          <Image
            src="https://cdn.prod.website-files.com/66e8d7e15d4fcdb58476f57b/66ff74fd8700b9245efbb8a9_australian%20certified%20logo.svg"
            alt="Australian Certified"
            width={80}
            height={80}
            className="h-20 w-auto object-contain"
          />

          {/* G2 Review Badge */}
          <a
            href="https://www.g2.com/products/refhub/reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white rounded-xl px-5 py-3 shadow-md hover:shadow-lg transition-shadow"
          >
            <div>
              <div className="flex gap-0.5 mb-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} className="h-5 w-5 text-amber-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-xs text-gray-500 font-medium">Read our reviews on</p>
            </div>
            <Image
              src="https://cdn.prod.website-files.com/66e8d7e15d4fcdb58476f57b/66ff74fd470cf246c4d45f1c_G2%20color%20Logo.svg"
              alt="G2"
              width={40}
              height={40}
              className="h-9 w-auto object-contain"
            />
          </a>
        </div>
      </div>
    </section>
  )
}
