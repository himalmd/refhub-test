'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, ChevronDown } from 'lucide-react'

const productLinks = [
  { label: 'Skill Assessments', desc: 'Test your candidates skills at scale with our skill assessments.', href: '/ai-assessment' },
  { label: 'Automated Reference Checks', desc: 'Streamline hiring with fast, secure, and automated reference checks.', href: '/reference-checks' },
]

const resourceLinks = [
  { label: 'Reference Check Templates', desc: 'Explore our High Quality Template Library', href: '/free-reference-check-templates-download-in-pdf-word' },
  { label: 'How to Hire Guides', desc: 'Practical guides on hiring for different roles', href: '/free-how-to-hire-guides-templates-download-in-pdf' },
  { label: 'Excel Templates', desc: 'Free HR Excel Templates', href: '/free-human-resources-excel-templates' },
  { label: 'Job Description Templates', desc: 'Browse our extensive library of templates', href: '#' },
  { label: 'Glossary', desc: 'Common industry terms and guides', href: '/human-resources-terms-and-definitions' },
  { label: 'Latest Blog Posts', desc: 'Read our latest blog posts and get insights into pre-employment', href: '/hr-and-pre-employment-resources-and-articles' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="bg-[#011930] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="https://cdn.prod.website-files.com/66e8d7e15d4fcdb58476f57b/6a0a5044884daf4240dab39e_refhub-logo-white.png"
              alt="Ref Hub"
              width={130}
              height={38}
              className="h-8 w-auto"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center space-x-0.5">
            <Link href="/" className="text-[#E07050] hover:text-[#E07050]/80 px-3 py-2 text-sm font-medium transition-colors">
              Home
            </Link>
            <Link href="/enterprise" className="text-white/75 hover:text-white px-3 py-2 text-sm font-medium transition-colors">
              Enterprise
            </Link>

            <div className="relative group">
              <button className="flex items-center gap-1 text-white/75 hover:text-white px-3 py-2 text-sm font-medium transition-colors">
                Product <ChevronDown className="h-3.5 w-3.5" />
              </button>
              <div className="absolute top-full left-0 mt-1 w-64 bg-[#0a3d6b] rounded-xl shadow-xl border border-white/10 py-1.5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 z-50">
                {productLinks.map(link => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block px-4 py-3 hover:bg-white/5 transition-colors"
                  >
                    <p className="text-sm font-semibold text-white">{link.label}</p>
                    <p className="text-xs text-white/55 mt-0.5">{link.desc}</p>
                  </Link>
                ))}
              </div>
            </div>

            <Link href="/why-ref-hub" className="text-white/75 hover:text-white px-3 py-2 text-sm font-medium transition-colors">
              Why Ref Hub
            </Link>

            <div className="relative group">
              <button className="flex items-center gap-1 text-white/75 hover:text-white px-3 py-2 text-sm font-medium transition-colors">
                Resources <ChevronDown className="h-3.5 w-3.5" />
              </button>
              <div className="absolute top-full left-0 mt-1 w-72 bg-[#0a3d6b] rounded-xl shadow-xl border border-white/10 py-1.5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 z-50">
                {resourceLinks.map(link => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="block px-4 py-2.5 hover:bg-white/5 transition-colors"
                  >
                    <p className="text-sm font-semibold text-white">{link.label}</p>
                    <p className="text-xs text-white/55 mt-0.5">{link.desc}</p>
                  </Link>
                ))}
              </div>
            </div>

            <Link href="/pricing-and-plans" className="text-white/75 hover:text-white px-3 py-2 text-sm font-medium transition-colors">
              Pricing
            </Link>
            <Link href="/contact-us" className="text-white/75 hover:text-white px-3 py-2 text-sm font-medium transition-colors">
              Contact Us
            </Link>
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="https://portal.refhub.com.au/auth/login"
              className="border border-[#3B7EF5]/60 text-[#3B7EF5] hover:bg-[#3B7EF5]/10 px-5 py-2 rounded-lg text-sm font-medium transition-colors"
            >
              Log In
            </a>
            <a
              href="https://portal.refhub.com.au/auth/sign-up"
              className="bg-[#3B7EF5] hover:bg-[#2563EB] text-white px-5 py-2 rounded-full text-sm font-semibold transition-colors"
            >
              Free Trial
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden text-white p-1"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#0a3d6b] border-t border-white/10">
          <div className="px-4 pt-3 pb-5 space-y-0.5">
            <Link href="/" className="block text-[#E07050] px-3 py-2.5 text-sm font-medium rounded-lg">Home</Link>
            <Link href="/enterprise" className="block text-white/75 hover:text-white px-3 py-2.5 text-sm rounded-lg hover:bg-white/5">Enterprise</Link>
            <div className="px-3 pt-2 pb-1">
              <p className="text-white/35 text-xs font-semibold uppercase tracking-wider mb-1">Product</p>
              {productLinks.map(link => (
                <Link key={link.href} href={link.href} className="block text-white/75 hover:text-white py-2 text-sm pl-2">{link.label}</Link>
              ))}
            </div>
            <Link href="/why-ref-hub" className="block text-white/75 hover:text-white px-3 py-2.5 text-sm rounded-lg hover:bg-white/5">Why Ref Hub</Link>
            <div className="px-3 pt-2 pb-1">
              <p className="text-white/35 text-xs font-semibold uppercase tracking-wider mb-1">Resources</p>
              {resourceLinks.map(link => (
                <Link key={link.label} href={link.href} className="block text-white/75 hover:text-white py-2 text-sm pl-2">{link.label}</Link>
              ))}
            </div>
            <Link href="/pricing-and-plans" className="block text-white/75 hover:text-white px-3 py-2.5 text-sm rounded-lg hover:bg-white/5">Pricing</Link>
            <Link href="/contact-us" className="block text-white/75 hover:text-white px-3 py-2.5 text-sm rounded-lg hover:bg-white/5">Contact Us</Link>
            <div className="pt-3 space-y-2">
              <a href="https://portal.refhub.com.au/auth/login" className="block border border-[#3B7EF5]/60 text-[#3B7EF5] text-center px-4 py-2.5 rounded-lg text-sm">Log In</a>
              <a href="https://portal.refhub.com.au/auth/sign-up" className="block bg-[#3B7EF5] hover:bg-[#2563EB] text-white text-center px-4 py-2.5 rounded-full text-sm font-semibold">Free Trial</a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
