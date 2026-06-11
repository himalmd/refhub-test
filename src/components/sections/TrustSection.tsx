import Image from 'next/image'

export default function TrustSection() {
  return (
    <section className="bg-gray-50 py-20 lg:py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#06294a] mb-5">
          Secure and Compliant for Businesses of All Sizes
        </h2>
        <p className="text-gray-500 text-lg max-w-2xl mx-auto mb-12 leading-relaxed">
          RefHub is built to meet the highest standards of data security and privacy. All data is stored securely in Australia, fully compliant with local privacy legislation and enterprise requirements.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-12">
          <Image
            src="https://cdn.prod.website-files.com/66e8d7e15d4fcdb58476f57b/66ff74fd8700b9245efbb8a9_australian%20certified%20logo.svg"
            alt="Australian Certified"
            width={160}
            height={64}
            className="h-14 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
          />
          <Image
            src="https://cdn.prod.website-files.com/66e8d7e15d4fcdb58476f57b/66ff74fd470cf246c4d45f1c_G2%20color%20Logo.svg"
            alt="G2"
            width={100}
            height={48}
            className="h-11 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
          />
        </div>
      </div>
    </section>
  )
}
