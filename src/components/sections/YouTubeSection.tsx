export default function YouTubeSection() {
  return (
    <section className="bg-[#041d32] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center">
          Screen smarter. Assess before you hire.
        </h2>
      </div>

      <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
        <iframe
          className="absolute inset-0 w-full h-full"
          src="https://www.youtube.com/embed/c4hHgyl-XdM"
          title="RefHub — Screen smarter. Assess before you hire."
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </section>
  )
}
