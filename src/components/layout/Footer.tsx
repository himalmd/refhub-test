import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-[#06294a] text-white/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* Left: brand + description + links */}
          <div className="lg:max-w-sm">
            <Link href="/">
              <Image
                src="https://cdn.prod.website-files.com/66e8d7e15d4fcdb58476f57b/66e8d7e15d4fcdb58476f5cd_Ref-hub-logo.svg"
                alt="Ref Hub"
                width={110}
                height={32}
                className="h-8 w-auto mb-5 brightness-0 invert"
              />
            </Link>
            <p className="text-sm leading-relaxed mb-6">
              RefHub assessments give you real skill data before the offer goes out. Hire on proof, not promises.
            </p>
            <div className="flex items-center gap-4 text-sm">
              <Link href="/demo-booking" className="text-white hover:text-[#4dc0e4] transition-colors font-medium">Book a Demo</Link>
              <Link href="/contact-us" className="text-white hover:text-[#4dc0e4] transition-colors font-medium">Contact Us</Link>
            </div>
          </div>

          {/* Right: contact + social */}
          <div className="flex flex-col sm:flex-row gap-10 lg:ml-auto">
            <div className="space-y-4 text-sm">
              <a href="tel:+61396569786" className="flex items-center gap-3 hover:text-white transition-colors">
                <svg viewBox="0 0 14 14" className="h-3.5 w-3.5 flex-shrink-0 text-[#4dc0e4] fill-current" aria-hidden="true">
                  <path d="M13.5 10.5v2a1 1 0 0 1-1.09 1 9.91 9.91 0 0 1-4.33-1.54 9.75 9.75 0 0 1-3-3 9.91 9.91 0 0 1-1.54-4.35A1 1 0 0 1 4.53 3.5h2a1 1 0 0 1 1 .86 6.44 6.44 0 0 0 .35 1.4 1 1 0 0 1-.23 1.06l-.84.84a8 8 0 0 0 3 3l.84-.84a1 1 0 0 1 1.06-.23 6.44 6.44 0 0 0 1.4.35 1 1 0 0 1 .89 1.02z" />
                </svg>
                (03) 9656 9786
              </a>
              <a href="mailto:info@refhub.com.au" className="flex items-center gap-3 hover:text-white transition-colors">
                <svg viewBox="0 0 14 14" className="h-3.5 w-3.5 flex-shrink-0 text-[#4dc0e4] fill-current" aria-hidden="true">
                  <path d="M12.33 1H1.67C.75 1 0 1.75 0 2.67v8.66C0 12.25.75 13 1.67 13h10.66C13.25 13 14 12.25 14 11.33V2.67C14 1.75 13.25 1 12.33 1zM7 8.17L1.17 3h11.66L7 8.17zM5.08 7l-3.75 3.75V3.25L5.08 7zm.59.59L7 8.83l1.33-1.24L12.17 11H1.83L5.67 7.59zm3.25-.59 3.75-3.75v7.5L8.92 7z" />
                </svg>
                Info@refhub.com.au
              </a>
              <div className="flex items-start gap-3">
                <svg viewBox="0 0 14 14" className="h-3.5 w-3.5 flex-shrink-0 mt-0.5 text-[#4dc0e4] fill-current" aria-hidden="true">
                  <path d="M7 0C4.24 0 2 2.24 2 5c0 3.75 5 9 5 9s5-5.25 5-9c0-2.76-2.24-5-5-5zm0 6.5A1.5 1.5 0 1 1 7 3.5 1.5 1.5 0 0 1 7 6.5z" />
                </svg>
                <span>Level 9/10 Queen Street,<br />Melbourne VIC 3000</span>
              </div>
            </div>

            <div>
              <p className="text-white font-semibold text-sm mb-4">Follow Us</p>
              <div className="flex items-center gap-3">
                <a
                  href="https://www.linkedin.com/company/ref-hub"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="h-9 w-9 rounded-full bg-white/10 hover:bg-[#4dc0e4]/20 flex items-center justify-center text-white/70 hover:text-white transition-colors"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/ref_hub_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="h-9 w-9 rounded-full bg-white/10 hover:bg-[#4dc0e4]/20 flex items-center justify-center text-white/70 hover:text-white transition-colors"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61581036046177"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="h-9 w-9 rounded-full bg-white/10 hover:bg-[#4dc0e4]/20 flex items-center justify-center text-white/70 hover:text-white transition-colors"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
          <Link href="#" className="text-white/50 hover:text-white transition-colors">
            Copyright ©2026 Ref Hub PTY LTD
          </Link>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="text-white/50 hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/privacy-policy" className="text-white/50 hover:text-white transition-colors">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
