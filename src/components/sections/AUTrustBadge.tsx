export default function AUTrustBadge() {
  return (
    <section className="bg-white py-10 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-3">
          <span className="text-2xl" role="img" aria-label="Australian flag">🇦🇺</span>
          <p className="text-[#06294a] font-semibold text-lg">
            Trusted by{' '}
            <span className="text-[#4dc0e4]">1,200+</span>{' '}
            AU businesses this quarter
          </p>
        </div>
      </div>
    </section>
  )
}
