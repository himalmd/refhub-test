export default function SupademoSection() {
  return (
    <section
      className="bg-[#041d32] py-20 lg:py-24"
      style={{
        backgroundImage: 'url(/images/demo-bg.svg)',
        backgroundSize: '100% auto',
        backgroundPosition: 'bottom',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            How To Create A Custom Skill Assessment
          </h2>
          <p className="text-white/50 text-lg">
            Expert-built tests for every role you hire. Filter by industry, role, or skill type.
          </p>
        </div>

        {/* Supademo embed */}
        <div
          className="relative w-full rounded-2xl overflow-hidden shadow-2xl"
          style={{ paddingTop: '62%' }}
        >
          <iframe
            className="absolute inset-0 w-full h-full"
            src="https://app.supademo.com/embed/cmno78eay5w80aburpxql2kwx"
            title="How To Create A Custom Skill Assessment"
            allow="clipboard-write"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  )
}
