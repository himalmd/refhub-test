'use client'

import { useState } from 'react'
import { Check, ChevronDown } from 'lucide-react'

/* ---- Pricing data (en-AU) ---- */
type TierData = {
  m: { price: number; strike: number | ''; per: number }
  y: { price: number; strike: number | ''; per: number }
  bonus:       { n: number; worth: number }
  yearlyBonus: { n: number; worth: number }
}

const PRICING: Record<string, TierData> = {
  '3':   { m:{price:  45, strike:'', per:15.00}, y:{price:  468, strike:  540, per:13.00}, bonus:{n: 2, worth: 30 }, yearlyBonus:{n: 5,  worth: 75 } },
  '5':   { m:{price:  71, strike:'', per:14.30}, y:{price:  741, strike:  900, per:12.40}, bonus:{n: 3, worth: 45 }, yearlyBonus:{n: 10, worth: 150} },
  '10':  { m:{price: 135, strike:'', per:13.50}, y:{price: 1404, strike: 1800, per:11.70}, bonus:{n: 5, worth: 75 }, yearlyBonus:{n: 15, worth: 225} },
  '25':  { m:{price: 319, strike:'', per:12.80}, y:{price: 3315, strike: 4500, per:11.10}, bonus:{n: 8, worth: 120}, yearlyBonus:{n: 20, worth: 300} },
  '35':  { m:{price: 420, strike:'', per:12.00}, y:{price: 4368, strike: 6300, per:10.40}, bonus:{n: 10, worth:150}, yearlyBonus:{n: 25, worth: 375} },
  '50':  { m:{price: 563, strike:'', per:11.30}, y:{price: 5850, strike: 9000, per: 9.80}, bonus:{n: 15, worth:225}, yearlyBonus:{n: 30, worth: 450} },
  '100': { m:{price:1050, strike:'', per:10.50}, y:{price:10920, strike:18000, per: 9.10}, bonus:{n: 20, worth:300}, yearlyBonus:{n: 35, worth: 525} },
  '250': { m:{price:2438, strike:'', per: 9.80}, y:{price:25350, strike:45000, per: 8.50}, bonus:{n: 25, worth:375}, yearlyBonus:{n: 40, worth: 600} },
}

/* Slider snaps to these credit values */
const TIER_STEPS = [3, 5, 10, 25, 35, 50, 100, 250] as const

function snapToTier(val: number): number {
  return TIER_STEPS.reduce((best, t) =>
    Math.abs(t - val) < Math.abs(best - val) ? t : best
  )
}

function money(v: number) {
  return new Intl.NumberFormat('en-AU', {
    style: 'currency', currency: 'AUD',
    minimumFractionDigits: 0, maximumFractionDigits: 2,
  }).format(v).replace(/\.00$/, '')
}

const SLIDER_MIN = 3
const SLIDER_MAX = 100
const SLIDER_MARKS = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

export default function Pricing() {
  const [billing, setBilling] = useState<'monthly' | 'yearly'>('yearly')
  const [credits, setCredits] = useState(5) // snapped tier value

  const isYearly = billing === 'yearly'
  const tierKey  = String(credits)
  const row      = PRICING[tierKey]

  const displayPrice    = isYearly ? row.y.price / 12 : row.m.price
  const strikePrice     = isYearly && row.y.strike ? (row.y.strike as number) / 12 : null
  const perCredit       = isYearly ? row.y.per : row.m.per
  const strikePerCredit = isYearly ? row.m.per : null
  const yearlyTotal     = row.y.price
  const bonus           = isYearly ? row.yearlyBonus : row.bonus

  const sliderPct = ((credits - SLIDER_MIN) / (SLIDER_MAX - SLIDER_MIN)) * 100

  function handleSlider(raw: number) {
    setCredits(snapToTier(raw))
  }

  return (
    <section id="pricing" className="bg-[#eef2ff] py-20 lg:py-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-[#06294a]">Clear pricing </span>
            <span className="text-[#085da8]">for every hiring need.</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Choose a subscription for ongoing hiring, or{' '}
            <span className="text-[#085da8] font-semibold">pay as you go</span>{' '}
            when you need occasional checks.
          </p>
        </div>

        {/* Slider card */}
        <div className="bg-white rounded-2xl p-7 mb-5 shadow-sm border border-gray-100">
          <p className="text-[#0f172a] font-semibold text-lg mb-8">
            How many candidates do you hire per month?
          </p>

          <div className="relative mb-2">
            {/* Tooltip bubble */}
            <div
              className="absolute -top-9 flex flex-col items-center pointer-events-none"
              style={{ left: `calc(${sliderPct}% + ${(0.5 - sliderPct / 100) * 20}px)` }}
            >
              <div className="bg-[#085da8] text-white text-sm font-bold px-2.5 py-1 rounded-lg min-w-[32px] text-center">
                {credits}
              </div>
              <div className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-[#085da8]" />
            </div>

            <input
              type="range"
              min={SLIDER_MIN}
              max={SLIDER_MAX}
              value={credits}
              onChange={(e) => handleSlider(Number(e.target.value))}
              className="w-full h-1.5 rounded-lg appearance-none cursor-pointer accent-[#085da8]"
              style={{
                background: `linear-gradient(to right, #085da8 ${sliderPct}%, #e2e8f0 ${sliderPct}%)`,
              }}
            />
          </div>

          <div className="flex justify-between mt-1">
            {SLIDER_MARKS.map((m) => (
              <span key={m} className="text-xs text-gray-400">{m}</span>
            ))}
          </div>
        </div>

        {/* Pricing card — two columns */}
        <div className="rounded-2xl overflow-hidden border border-[#085da8]/30 shadow-lg grid lg:grid-cols-2">

          {/* Left — dark blue */}
          <div className="bg-[#085da8] p-8 lg:p-10 flex flex-col">
            <p className="text-white font-bold text-xl mb-6">Recommended Plan</p>

            {/* Tabs: Monthly | Yearly | Pay as you go */}
            <div className="flex flex-wrap items-center gap-2 mb-6">
              {/* Monthly / Yearly pill tabs */}
              <div className="inline-flex rounded-full bg-white/20 p-0.5">
                <button
                  type="button"
                  onClick={() => setBilling('monthly')}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                    billing === 'monthly'
                      ? 'bg-white text-[#085da8] shadow-sm'
                      : 'text-white hover:bg-white/10'
                  }`}
                >
                  Monthly
                </button>
                <button
                  type="button"
                  onClick={() => setBilling('yearly')}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                    billing === 'yearly'
                      ? 'bg-green-500 text-white shadow-sm'
                      : 'text-white hover:bg-white/10'
                  }`}
                >
                  Yearly
                </button>
              </div>

              <a
                href="https://portal.refhub.com.au/auth/pay-as-you-go"
                className="px-4 py-1.5 rounded-full text-sm font-medium border border-white text-white hover:bg-white/10 transition-all"
              >
                Pay as you go →
              </a>
            </div>

            {/* Credits dropdown — stays in sync with slider */}
            <div className="relative mb-6 w-44">
              <select
                value={tierKey}
                onChange={(e) => setCredits(Number(e.target.value))}
                className="w-full appearance-none bg-white text-[#0f172a] text-sm font-medium px-4 py-2.5 pr-9 rounded-xl border border-gray-200 cursor-pointer focus:outline-none"
              >
                {TIER_STEPS.map((t) => (
                  <option key={t} value={t}>{t} Credits</option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500 pointer-events-none" />
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-2 mb-1 flex-wrap">
              {strikePrice && (
                <span className="text-amber-300 line-through text-xl font-semibold">
                  {money(Math.round(strikePrice))}
                </span>
              )}
              <span className="text-white text-4xl font-bold">
                {money(Math.round(displayPrice))}
              </span>
              <span className="text-white/60 text-sm">
                {isYearly
                  ? `/mo · ${money(yearlyTotal)} billed annually`
                  : '/mo'}
              </span>
            </div>

            {/* Per credit badge */}
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-xl px-3 py-1.5 mb-5 self-start">
              {strikePerCredit && (
                <span className="text-amber-300 line-through text-sm font-semibold">
                  {money(strikePerCredit)}
                </span>
              )}
              <span className="text-white font-bold text-sm">
                {money(perCredit)} Per Credit
              </span>
            </div>

            <p className="text-white/60 text-sm mb-8 leading-relaxed">
              No hidden fees, feature restrictions, lock-in contracts, or dramas.
            </p>

            <a
              href="https://portal.refhub.com.au/auth/sign-up"
              className="block w-full text-center bg-[#3b82f6] hover:bg-[#2563eb] text-white px-6 py-3.5 rounded-xl font-semibold transition-colors mt-auto"
            >
              Start Free Trial
            </a>
          </div>

          {/* Right — white */}
          <div className="bg-white p-8 lg:p-10 flex flex-col justify-center">
            <p className="text-[#0f172a] font-semibold text-lg mb-6">What&apos;s included</p>
            <ul className="space-y-4">
              {[
                'Reference Checks (Unlimited referees per check)',
                'Credits roll over once for 30 days. Unused credits after that will expire.',
                'Credits roll over once for 30 days.',
              ].map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm text-gray-700">
                  <span className="flex-shrink-0 mt-0.5 h-5 w-5 rounded-full bg-[#085da8] flex items-center justify-center">
                    <Check className="h-3 w-3 text-white" strokeWidth={3} />
                  </span>
                  {f}
                </li>
              ))}

              {/* Dynamic bonus — updates with slider + billing tab */}
              <li className="flex items-start gap-3 text-sm text-gray-700">
                <span className="flex-shrink-0 mt-0.5 h-5 w-5 rounded-full bg-[#085da8] flex items-center justify-center">
                  <Check className="h-3 w-3 text-white" strokeWidth={3} />
                </span>
                <span>
                  <strong className="text-[#0f172a]">{bonus.n}</strong> Sign-Up Bonus Credits Worth{' '}
                  <strong className="text-[#0f172a]">{money(bonus.worth)}</strong> 🎁
                </span>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  )
}
