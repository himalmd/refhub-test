'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { BookOpen, Wand2, PenTool, type LucideIcon } from 'lucide-react'

const methods = [
  {
    Icon: BookOpen,
    title: 'Start from the library',
    description:
      '300+ expert-built assessments across 10 categories and hundreds of roles — validated, launch-ready, and setup-free.',
    linkLabel: 'Browse the library',
    href: '/skill-tests-library',
    video: '/videos/start_from_library_mp4.mp4',
  },
  {
    Icon: Wand2,
    title: 'Generate from a JD',
    description:
      'The Assessment Builder transforms your job description into a role-specific assessment with validated and AI-generated questions. Your JD. Our AI.',
    linkLabel: 'Try the builder',
    href: '/ai-assessment',
    video: '/videos/geneate_from_jd%202_mp4.mp4',
  },
  {
    Icon: PenTool,
    title: 'Build from scratch',
    description:
      'Create custom assessments for any role with full control over questions, skill groups, and weighting — all validated against the model.',
    linkLabel: 'See all features',
    href: '/ai-assessment',
    video: '/videos/build_from_scratch_mp4.mp4',
  },
]

function VideoCard({
  Icon,
  title,
  description,
  video,
}: {
  Icon: LucideIcon
  title: string
  description: string
  video: string
}) {
  const videoRef = useRef<HTMLVideoElement>(null)

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0
      videoRef.current.play()
    }
  }

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause()
      videoRef.current.currentTime = 0
    }
  }

  return (
    <div
      className="relative bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm group cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Hover video */}
      <video
        ref={videoRef}
        src={video}
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
      />

      {/* Static card content */}
      <div className="relative p-8 group-hover:opacity-0 transition-opacity duration-200">
        <div className="inline-flex items-center justify-center h-14 w-14 rounded-full bg-[#2563eb] mb-6">
          <Icon className="h-6 w-6 text-white" />
        </div>
        <h3 className="text-xl font-bold text-[#0f172a] mb-3">{title}</h3>
        <p className="text-gray-500 leading-relaxed text-sm">{description}</p>
      </div>
    </div>
  )
}

export default function AssessmentMethods() {
  return (
    <section className="bg-gray-50 py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center border border-gray-300 rounded-full px-5 py-1.5 mb-6">
            <span className="text-[#2563eb] text-xs font-semibold uppercase tracking-widest">
              Start in minutes. Build anything.
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#0f172a]">
            Three Ways To Build An Assessment
          </h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-6">
          {methods.map((method) => (
            <VideoCard
              key={method.title}
              Icon={method.Icon}
              title={method.title}
              description={method.description}
              video={method.video}
            />
          ))}
        </div>

        {/* Links — outside and below the cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {methods.map(({ linkLabel, href }) => (
            <Link
              key={linkLabel}
              href={href}
              className="inline-flex items-center gap-1.5 text-[#2563eb] hover:text-[#1d4ed8] text-sm font-semibold transition-colors px-2"
            >
              {linkLabel}
              <svg viewBox="0 0 16 16" className="h-3.5 w-3.5 fill-current" aria-hidden="true">
                <path d="M6.22 3.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L9.94 8 6.22 4.28a.75.75 0 0 1 0-1.06z" />
              </svg>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
