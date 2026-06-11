export default function AUTrustBadge() {
  return (
    <section
      className="py-10"
      style={{ backgroundImage: 'linear-gradient(127deg, #0090ff, #085da8)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-3">
          <span className="text-2xl" role="img" aria-label="Australian flag">🇦🇺</span>
          <p className="text-white font-semibold text-lg">
            Trusted by{' '}
            <span className="text-white/80">1,200+</span>{' '}
            AU businesses this quarter
          </p>
        </div>
      </div>
    </section>
  )
}
