const logos = [
  { src: '/images/logos/aurenne%20group.png', alt: 'Aurenne Group Mining' },
  { src: '/images/logos/lsgd%201.png', alt: 'LG Services Group' },
  { src: '/images/logos/mage%20150.png', alt: 'Zeal Services' },
  { src: '/images/logos/statim.png', alt: 'Statim' },
  { src: '/images/logos/meshki.png', alt: 'meshki' },
  { src: '/images/logos/all%20about%20caring.png', alt: 'All About Caring' },
  { src: '/images/logos/holistic%20recovery.png', alt: 'Holistic Recovery' },
  { src: '/images/logos/taurus.png', alt: 'Taurus Recruitment' },
  { src: '/images/logos/thornton.png', alt: 'Thornton Engineering' },
  { src: '/images/logos/symmetry.png', alt: 'Symmetry Human Resources' },
  { src: '/images/logos/Training%20and%20Professional%20Development.png', alt: 'MSA Training' },
  { src: '/images/logos/blackman.png', alt: 'Blackman Recruitment' },
  { src: '/images/logos/chnadler%20holdings%20(1).png', alt: 'Chandler Holdings' },
  { src: '/images/logos/9byte%20logo.png', alt: '9byte' },
  { src: '/images/logos/governa.png', alt: 'Governa.ai' },
  { src: '/images/logos/outapay.png', alt: 'outapay' },
  { src: '/images/logos/aktrapid.png', alt: 'Aktrapid Nursing Agency' },
  { src: '/images/logos/codematch_logo_blue_transparent%201.png', alt: 'CodeMatch' },
  { src: '/images/logos/burnie%20brae.png', alt: 'Burnie Brae' },
  { src: '/images/logos/harrolds.png', alt: 'Harrolds' },
  { src: '/images/logos/bs%20logo.png', alt: 'JBS' },
  { src: '/images/logos/helpalong%20logo.png', alt: 'Helpalong' },
  { src: '/images/logos/summit%20media.png', alt: 'Summit Media' },
]

export default function ClientLogos() {
  const doubled = [...logos, ...logos]

  return (
    <section className="bg-white border-b border-gray-100 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-7">
        <p className="text-center text-xs font-semibold text-gray-400 uppercase tracking-widest">
          Trusted by 1,200+ Australian businesses
        </p>
      </div>

      <div className="relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="flex w-max animate-marquee items-center">
          {doubled.map((logo, i) => (
            <div key={i} className="inline-flex items-center justify-center mx-10 flex-shrink-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-9 w-auto max-w-[140px] object-contain select-none"
                loading="lazy"
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
