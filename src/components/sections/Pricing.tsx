'use client'

import { useState } from 'react'
import { Check } from 'lucide-react'

const pricingTiers = [
  { credits: 3,   monthly: 45,   yearly: 468  },
  { credits: 5,   monthly: 71,   yearly: 741  },
  { credits: 10,  monthly: 135,  yearly: 1404 },
  { credits: 25,  monthly: 319,  yearly: 3315 },
  { credits: 35,  monthly: 420,  yearly: 4368 },
  { credits: 50,  monthly: 563,  yearly: 5850 },
  { credits: 100, monthly: 1050, yearly: 10920 },
  { credits: 250, monthly: 2438, yearly: 25350 },
]

const features = [
  'Reference Checks (Unlimited referees per check)',
  'Credits roll over once for 30 days. Unused credits after that will expire.',
  '$30 bonus credits on sign-up',
  'Automated follow-up reminders',
  'Fraud detection built in',
  'Detailed analytics & reports',
  'Priority email support',
]

function getSliderIndex(value: number): number {
  const thresholds = [1, 5, 10, 25, 35, 50, 100, 250]
  let closest = 0
  let minDiff = Math.abs(value - thresholds[0])
  for (let i = 1; i < thresholds.length; i++) {
    const diff = Math.abs(value - thresholds[i])
    if (diff < minDiff) { minDiff = diff; closest = i }
  }
  return closest
}

export default function Pricing() {
  const [yearly, setYearly] = useState(false)
  const [sliderVal, setSliderVal] = useState(5)

  const tierIndex = getSliderIndex(sliderVal)
  const tier = pricingTiers[tierIndex]
  const monthlyPrice = tier.monthly
  const yearlyTotal = tier.yearly
  const yearlyMonthly = Math.round(yearlyTotal / 12)

  return (
    <section id="pricing" className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#06294a] mb-4">
            Clear pricing for every hiring need.
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Choose a subscription for ongoing hiring, or pay as you go when you need occasional checks.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Toggle */}
          <div className="flex justify-center mb-10">
            <div className="inline-flex items-center bg-gray-100 rounded-xl p-1">
              <button
                onClick={() => setYearly(false)}
                className={`px-5 py-2 rounded-lg text-sm font-medium transition-all ${!yearly ? 'bg-white text-[#06294a] shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
              >
                Monthly
              </button>
              <button
                onClick={() => setYearly(true)}
                className={`flex items-center gap-2 px-5 py-2 rounded-lg text-sm font-medium transition-all ${yearly ? 'bg-white text-[#06294a] shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
              >
                Yearly
                <span className="text-xs bg-[#4dc0e4]/15 text-[#4dc0e4] font-semibold px-2 py-0.5 rounded-full">Save ~13%</span>
              </button>
            </div>
          </div>

          <div className="bg-gray-50 rounded-3xl border border-gray-200 overflow-hidden">
            <div className="p-8 lg:p-10">
              {/* Slider */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm font-medium text-gray-600">Credits per month</p>
                  <span className="text-[#06294a] font-bold text-lg">{tier.credits}</span>
                </div>
                <input
                  type="range"
                  min={1}
                  max={250}
                  value={sliderVal}
                  onChange={(e) => setSliderVal(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#4dc0e4]"
                />
                <div className="flex justify-between text-xs text-gray-400 mt-1">
                  <span>1</span>
                  <span>250</span>
                </div>
              </div>

              <div className="grid lg:grid-cols-2 gap-10 items-start">
                <div>
                  {yearly ? (
                    <>
                      <div className="flex items-end gap-2 mb-1">
                        <span className="text-5xl font-bold text-[#06294a]">${yearlyMonthly}</span>
                        <span className="text-gray-500 pb-2">/ month</span>
                      </div>
                      <p className="text-sm text-gray-500 mb-6">
                        Billed annually at ${yearlyTotal.toLocaleString()} AUD/year
                      </p>
                    </>
                  ) : (
                    <>
                      <div className="flex items-end gap-2 mb-1">
                        <span className="text-5xl font-bold text-[#06294a]">${monthlyPrice}</span>
                        <span className="text-gray-500 pb-2">/ month</span>
                      </div>
                      <p className="text-sm text-gray-500 mb-6">
                        Billed monthly in AUD
                      </p>
                    </>
                  )}
                  <a
                    href="https://portal.refhub.com.au/auth/sign-up"
                    className="block w-full text-center bg-[#4dc0e4] hover:bg-[#3aafdb] text-white px-6 py-3.5 rounded-xl font-semibold transition-colors mb-3"
                  >
                    Start Free Trial
                  </a>
                  <p className="text-xs text-center text-gray-400">
                    No credit card required · $30 bonus credits on sign-up
                  </p>
                </div>

                <div>
                  <p className="text-sm font-semibold text-[#06294a] mb-4">Everything included:</p>
                  <ul className="space-y-3">
                    {features.map(f => (
                      <li key={f} className="flex items-start gap-3 text-sm text-gray-700">
                        <Check className="h-4 w-4 text-[#4dc0e4] flex-shrink-0 mt-0.5" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
