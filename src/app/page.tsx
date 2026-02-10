"use client";

import { useState, useMemo } from "react";

// UK average rates (pence) - April 2024 price cap
const DEFAULT_RATES = {
  electricityUnit: 24.50,
  electricityStanding: 60.10,
  gasUnit: 6.24,
  gasStanding: 31.41,
  waterMetered: 1.80, // per m3
  waterStanding: 45.00, // per year
  sewerageRate: 0.95, // per m3
};

// Average consumption by property type (annual kWh for electricity, gas)
const PROPERTY_USAGE = {
  flat1: { electricity: 1800, gas: 6000, water: 75 },
  flat2: { electricity: 2400, gas: 8000, water: 90 },
  house2: { electricity: 2700, gas: 11500, water: 110 },
  house3: { electricity: 3100, gas: 13500, water: 130 },
  house4: { electricity: 4100, gas: 18000, water: 160 },
  house5: { electricity: 4600, gas: 22000, water: 200 },
};

const OCCUPANCY_MULTIPLIER: Record<number, number> = {
  1: 0.7,
  2: 0.9,
  3: 1.0,
  4: 1.15,
  5: 1.3,
  6: 1.45,
};

type PropertyType = keyof typeof PROPERTY_USAGE;

export default function Home() {
  const [propertyType, setPropertyType] = useState<PropertyType>("house3");
  const [occupants, setOccupants] = useState(2);
  const [heatingType, setHeatingType] = useState<"gas" | "electric" | "other">("gas");
  const [hasWaterMeter, setHasWaterMeter] = useState(true);
  const [workFromHome, setWorkFromHome] = useState(false);

  // Custom rates (optional)
  const [useCustomRates, setUseCustomRates] = useState(false);
  const [customElecRate, setCustomElecRate] = useState(DEFAULT_RATES.electricityUnit);
  const [customGasRate, setCustomGasRate] = useState(DEFAULT_RATES.gasUnit);

  const results = useMemo(() => {
    const base = PROPERTY_USAGE[propertyType];
    const occupancyMultiplier = OCCUPANCY_MULTIPLIER[Math.min(occupants, 6)] || 1;
    const wfhMultiplier = workFromHome ? 1.15 : 1;

    // Calculate annual consumption
    let annualElec = base.electricity * occupancyMultiplier * wfhMultiplier;
    let annualGas = heatingType === "gas" ? base.gas * occupancyMultiplier : 0;

    // If electric heating, increase electricity usage
    if (heatingType === "electric") {
      annualElec += base.gas * 0.35 * occupancyMultiplier; // Electric heating less efficient
    }

    const annualWater = base.water * (occupants / 2.4); // Normalize to 2.4 average household

    // Get rates
    const elecRate = useCustomRates ? customElecRate : DEFAULT_RATES.electricityUnit;
    const gasRate = useCustomRates ? customGasRate : DEFAULT_RATES.gasUnit;

    // Calculate annual costs (in pounds)
    const elecCostAnnual = (annualElec * elecRate / 100) + (DEFAULT_RATES.electricityStanding * 365 / 100);
    const gasCostAnnual = heatingType === "gas"
      ? (annualGas * gasRate / 100) + (DEFAULT_RATES.gasStanding * 365 / 100)
      : 0;

    const waterCostAnnual = hasWaterMeter
      ? (annualWater * DEFAULT_RATES.waterMetered) + DEFAULT_RATES.waterStanding + (annualWater * DEFAULT_RATES.sewerageRate)
      : 420; // Average unmetered water bill

    const totalAnnual = elecCostAnnual + gasCostAnnual + waterCostAnnual;

    return {
      electricity: {
        annual: elecCostAnnual,
        monthly: elecCostAnnual / 12,
        usage: annualElec,
      },
      gas: {
        annual: gasCostAnnual,
        monthly: gasCostAnnual / 12,
        usage: annualGas,
      },
      water: {
        annual: waterCostAnnual,
        monthly: waterCostAnnual / 12,
        usage: annualWater,
      },
      total: {
        annual: totalAnnual,
        monthly: totalAnnual / 12,
      },
    };
  }, [propertyType, occupants, heatingType, hasWaterMeter, workFromHome, useCustomRates, customElecRate, customGasRate]);

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative px-4 py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-amber-500/5" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6"
               style={{ background: "rgba(249, 115, 22, 0.15)", color: "#fb923c" }}>
            <span className="pulse-dot w-2 h-2 rounded-full bg-green-500" />
            Free UK Utility Bill Calculator
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            <span className="gradient-text">Utility Bill Calculator</span>
            <span className="block text-2xl md:text-3xl mt-2 text-slate-300 font-normal">
              Estimate Your Monthly Household Costs
            </span>
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Calculate your expected gas, electricity, and water bills based on your property type,
            household size, and current UK energy prices.
          </p>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Input Panel */}
            <div className="rounded-xl p-6" style={{ background: "var(--background-secondary)" }}>
              <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                Your Property Details
              </h2>

              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Property Type
                  </label>
                  <select
                    value={propertyType}
                    onChange={(e) => setPropertyType(e.target.value as PropertyType)}
                    className="w-full"
                  >
                    <option value="flat1">1 Bedroom Flat</option>
                    <option value="flat2">2 Bedroom Flat</option>
                    <option value="house2">2 Bedroom House</option>
                    <option value="house3">3 Bedroom House</option>
                    <option value="house4">4 Bedroom House</option>
                    <option value="house5">5+ Bedroom House</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Number of Occupants
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="10"
                    value={occupants}
                    onChange={(e) => setOccupants(parseInt(e.target.value) || 1)}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Heating Type
                  </label>
                  <select
                    value={heatingType}
                    onChange={(e) => setHeatingType(e.target.value as "gas" | "electric" | "other")}
                  >
                    <option value="gas">Gas Central Heating</option>
                    <option value="electric">Electric Heating</option>
                    <option value="other">Other (Oil, LPG, etc.)</option>
                  </select>
                </div>

                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    id="waterMeter"
                    checked={hasWaterMeter}
                    onChange={(e) => setHasWaterMeter(e.target.checked)}
                    className="w-5 h-5 rounded"
                  />
                  <label htmlFor="waterMeter" className="text-sm text-slate-300">
                    I have a water meter
                  </label>
                </div>

                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    id="wfh"
                    checked={workFromHome}
                    onChange={(e) => setWorkFromHome(e.target.checked)}
                    className="w-5 h-5 rounded"
                  />
                  <label htmlFor="wfh" className="text-sm text-slate-300">
                    Working from home regularly
                  </label>
                </div>

                <div className="pt-4 border-t border-slate-700">
                  <div className="flex items-center gap-3 mb-4">
                    <input
                      type="checkbox"
                      id="customRates"
                      checked={useCustomRates}
                      onChange={(e) => setUseCustomRates(e.target.checked)}
                      className="w-5 h-5 rounded"
                    />
                    <label htmlFor="customRates" className="text-sm text-slate-300">
                      Use my tariff rates
                    </label>
                  </div>

                  {useCustomRates && (
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs text-slate-400 mb-1">
                          Electricity (p/kWh)
                        </label>
                        <input
                          type="number"
                          step="0.01"
                          value={customElecRate}
                          onChange={(e) => setCustomElecRate(parseFloat(e.target.value) || 0)}
                        />
                      </div>
                      <div>
                        <label className="block text-xs text-slate-400 mb-1">
                          Gas (p/kWh)
                        </label>
                        <input
                          type="number"
                          step="0.01"
                          value={customGasRate}
                          onChange={(e) => setCustomGasRate(parseFloat(e.target.value) || 0)}
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Results Panel */}
            <div className="space-y-4">
              {/* Total */}
              <div className="result-box text-center">
                <p className="text-sm text-slate-400 mb-1">Estimated Monthly Total</p>
                <p className="result-value">£{results.total.monthly.toFixed(2)}</p>
                <p className="text-sm text-slate-500 mt-2">
                  £{results.total.annual.toFixed(0)} per year
                </p>
              </div>

              {/* Breakdown */}
              <div className="grid gap-3">
                <div className="rounded-lg p-4 flex justify-between items-center" style={{ background: "var(--background-secondary)" }}>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-yellow-500/20 flex items-center justify-center">
                      <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium">Electricity</p>
                      <p className="text-xs text-slate-500">{results.electricity.usage.toFixed(0)} kWh/year</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-yellow-500">£{results.electricity.monthly.toFixed(2)}/mo</p>
                    <p className="text-xs text-slate-500">£{results.electricity.annual.toFixed(0)}/year</p>
                  </div>
                </div>

                {heatingType === "gas" && (
                  <div className="rounded-lg p-4 flex justify-between items-center" style={{ background: "var(--background-secondary)" }}>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-orange-500/20 flex items-center justify-center">
                        <svg className="w-5 h-5 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium">Gas</p>
                        <p className="text-xs text-slate-500">{results.gas.usage.toFixed(0)} kWh/year</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-orange-500">£{results.gas.monthly.toFixed(2)}/mo</p>
                      <p className="text-xs text-slate-500">£{results.gas.annual.toFixed(0)}/year</p>
                    </div>
                  </div>
                )}

                <div className="rounded-lg p-4 flex justify-between items-center" style={{ background: "var(--background-secondary)" }}>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
                      <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        <path fillRule="evenodd" d="M4 10a6 6 0 1012 0 6 6 0 00-12 0zm6-8a8 8 0 100 16 8 8 0 000-16z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium">Water & Sewerage</p>
                      <p className="text-xs text-slate-500">{hasWaterMeter ? `${results.water.usage.toFixed(0)} m³/year` : "Unmetered"}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-blue-500">£{results.water.monthly.toFixed(2)}/mo</p>
                    <p className="text-xs text-slate-500">£{results.water.annual.toFixed(0)}/year</p>
                  </div>
                </div>
              </div>

              <p className="text-xs text-slate-500 text-center mt-4">
                Based on Ofgem price cap rates (January 2025). Actual bills may vary based on your specific tariff and usage patterns.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meter Illustration */}
      <section className="px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Electric Meter SVG */}
            <div className="rounded-xl p-6 text-center" style={{ background: "var(--background-secondary)" }}>
              <h3 className="text-lg font-semibold mb-4 text-slate-300">Electric Meter Reading</h3>
              <svg viewBox="0 0 300 150" className="w-full max-w-xs mx-auto meter-glow">
                <rect x="20" y="20" width="260" height="110" rx="8" fill="#1e293b" stroke="#475569" strokeWidth="2"/>
                <rect x="40" y="45" width="220" height="50" rx="4" fill="#0f172a"/>
                <text x="60" y="82" fontFamily="monospace" fontSize="32" fill="#22c55e">12345.6</text>
                <text x="232" y="82" fontFamily="monospace" fontSize="16" fill="#94a3b8">kWh</text>
                <circle cx="260" cy="35" r="5" fill="#f97316">
                  <animate attributeName="opacity" values="1;0.3;1" dur="1s" repeatCount="indefinite"/>
                </circle>
                <text x="150" y="120" textAnchor="middle" fontSize="10" fill="#64748b">ELECTRICITY SUPPLY</text>
              </svg>
              <p className="text-sm text-slate-400 mt-4">
                Your electricity meter shows consumption in kilowatt-hours (kWh)
              </p>
            </div>

            {/* Gas Meter SVG */}
            <div className="rounded-xl p-6 text-center" style={{ background: "var(--background-secondary)" }}>
              <h3 className="text-lg font-semibold mb-4 text-slate-300">Gas Meter Reading</h3>
              <svg viewBox="0 0 300 150" className="w-full max-w-xs mx-auto meter-glow">
                <rect x="20" y="20" width="260" height="110" rx="8" fill="#1e293b" stroke="#475569" strokeWidth="2"/>
                <rect x="40" y="45" width="220" height="50" rx="4" fill="#0f172a"/>
                <text x="60" y="82" fontFamily="monospace" fontSize="32" fill="#f97316">04521.8</text>
                <text x="242" y="82" fontFamily="monospace" fontSize="16" fill="#94a3b8">m³</text>
                <circle cx="260" cy="35" r="5" fill="#22c55e">
                  <animate attributeName="opacity" values="1;0.3;1" dur="1.5s" repeatCount="indefinite"/>
                </circle>
                <text x="150" y="120" textAnchor="middle" fontSize="10" fill="#64748b">GAS SUPPLY - METRIC</text>
              </svg>
              <p className="text-sm text-slate-400 mt-4">
                Gas meters show usage in cubic metres (m³), converted to kWh on your bill
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="px-4 py-12" style={{ background: "var(--background-secondary)" }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            How We Calculate Your Bills
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-orange-500/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-orange-500">1</span>
              </div>
              <h3 className="font-semibold mb-2">Property Analysis</h3>
              <p className="text-sm text-slate-400">
                We use your property type and size to estimate baseline energy consumption based on UK averages.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-orange-500/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-orange-500">2</span>
              </div>
              <h3 className="font-semibold mb-2">Usage Adjustment</h3>
              <p className="text-sm text-slate-400">
                Your household size and habits are factored in to create a more accurate consumption estimate.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-orange-500/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-orange-500">3</span>
              </div>
              <h3 className="font-semibold mb-2">Cost Calculation</h3>
              <p className="text-sm text-slate-400">
                We apply current UK energy price cap rates to give you monthly and annual cost estimates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            Frequently Asked Questions
          </h2>

          <details>
            <summary>
              What is the average utility bill in the UK?
              <svg className="chevron w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="content">
              For a typical 3-bedroom house with 2-3 occupants, average monthly utility costs are approximately £150-200 for energy (gas and electricity combined) and £30-40 for water. However, this varies significantly based on property size, insulation quality, heating type, and usage habits. The energy price cap set by Ofgem directly affects these costs.
            </div>
          </details>

          <details>
            <summary>
              How accurate is this utility bill calculator?
              <svg className="chevron w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="content">
              Our calculator provides estimates based on average UK household consumption data and current price cap rates. Actual bills may differ by 15-25% depending on factors like home insulation, appliance efficiency, heating schedules, and your specific energy tariff. For the most accurate estimate, enter your actual tariff rates using the custom rates option.
            </div>
          </details>

          <details>
            <summary>
              What is the energy price cap?
              <svg className="chevron w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="content">
              The energy price cap is set by Ofgem and limits the maximum amount suppliers can charge for each unit of gas and electricity, as well as the daily standing charge. It's reviewed quarterly and aims to protect consumers from excessive price increases. Our calculator uses the current price cap rates as default values.
            </div>
          </details>

          <details>
            <summary>
              Should I get a water meter installed?
              <svg className="chevron w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="content">
              A water meter is usually beneficial if you have fewer occupants than bedrooms, use water efficiently, or live alone. Larger families in smaller properties may pay less on unmetered rates. Most water companies offer a free meter installation and a trial period where you can switch back if costs increase.
            </div>
          </details>

          <details>
            <summary>
              How can I reduce my utility bills?
              <svg className="chevron w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="content">
              Key strategies include: improving home insulation, using a smart thermostat, switching to LED bulbs, running appliances during off-peak hours (if on a time-of-use tariff), fixing dripping taps, taking shorter showers, and comparing energy suppliers regularly. Even small changes like lowering your thermostat by 1°C can save around £100 annually.
            </div>
          </details>

          <details>
            <summary>
              What's the difference between standing charge and unit rate?
              <svg className="chevron w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="content">
              The standing charge is a fixed daily fee that covers the cost of connecting your home to the energy network - you pay this regardless of how much energy you use. The unit rate is what you pay per kilowatt-hour (kWh) of gas or electricity consumed. Your total bill combines both: (standing charge × days) + (unit rate × kWh used).
            </div>
          </details>
        </div>
      </section>

      {/* Related Calculators */}
      <section className="px-4 py-12" style={{ background: "var(--background-secondary)" }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-2 text-center">Related Calculators</h2>
          <p className="text-slate-400 text-center mb-8">
            Explore our other free tools for managing your household finances
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <a href="https://gasratecalculator.quest" className="card-hover block p-4 rounded-xl" style={{ background: "var(--background)" }}>
              <div className="w-10 h-10 rounded-lg bg-orange-500/20 flex items-center justify-center mb-3">
                <svg className="w-5 h-5 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="font-semibold text-white">Gas Rate Calculator</h3>
              <p className="text-sm text-slate-400 mt-1">Calculate gas appliance kW ratings</p>
            </a>

            <a href="https://energybillcalculator.quest" className="card-hover block p-4 rounded-xl" style={{ background: "var(--background)" }}>
              <div className="w-10 h-10 rounded-lg bg-yellow-500/20 flex items-center justify-center mb-3">
                <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" />
                </svg>
              </div>
              <h3 className="font-semibold text-white">Energy Bill Calculator</h3>
              <p className="text-sm text-slate-400 mt-1">Calculate monthly energy costs</p>
            </a>

            <a href="https://watermetercalculator.quest" className="card-hover block p-4 rounded-xl" style={{ background: "var(--background)" }}>
              <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center mb-3">
                <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.5 17a4.5 4.5 0 01-1.44-8.765 4.5 4.5 0 018.302-3.046 3.5 3.5 0 014.504 4.272A4 4 0 0115 17H5.5zm3.75-2.75a.75.75 0 001.5 0V9.66l1.95 2.1a.75.75 0 101.1-1.02l-3.25-3.5a.75.75 0 00-1.1 0l-3.25 3.5a.75.75 0 101.1 1.02l1.95-2.1v4.59z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="font-semibold text-white">Water Meter Calculator</h3>
              <p className="text-sm text-slate-400 mt-1">Track water meter readings</p>
            </a>

            <a href="https://mortgagecalculator.quest" className="card-hover block p-4 rounded-xl" style={{ background: "var(--background)" }}>
              <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center mb-3">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                </svg>
              </div>
              <h3 className="font-semibold text-white">Mortgage Calculator</h3>
              <p className="text-sm text-slate-400 mt-1">Calculate monthly payments</p>
            </a>

            <a href="https://stampdutycalculator.quest" className="card-hover block p-4 rounded-xl" style={{ background: "var(--background)" }}>
              <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center mb-3">
                <svg className="w-5 h-5 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="font-semibold text-white">Stamp Duty Calculator</h3>
              <p className="text-sm text-slate-400 mt-1">Calculate UK property taxes</p>
            </a>

            <a href="https://rentvsbuycalculator.quest" className="card-hover block p-4 rounded-xl" style={{ background: "var(--background)" }}>
              <div className="w-10 h-10 rounded-lg bg-pink-500/20 flex items-center justify-center mb-3">
                <svg className="w-5 h-5 text-pink-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1.323l3.954 1.582 1.599-.8a1 1 0 01.894 1.79l-1.233.616 1.738 5.42a1 1 0 01-.285 1.05A3.989 3.989 0 0115 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.715-5.349L11 6.477V16h2a1 1 0 110 2H7a1 1 0 110-2h2V6.477L6.237 7.582l1.715 5.349a1 1 0 01-.285 1.05A3.989 3.989 0 015 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.738-5.42-1.233-.617a1 1 0 01.894-1.788l1.599.799L9 4.323V3a1 1 0 011-1z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="font-semibold text-white">Rent vs Buy</h3>
              <p className="text-sm text-slate-400 mt-1">Compare renting vs buying</p>
            </a>

            <a href="https://watersavingcalculator.quest" className="card-hover block p-4 rounded-xl" style={{ background: "var(--background)" }}>
              <div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center mb-3">
                <svg className="w-5 h-5 text-cyan-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="font-semibold text-white">Water Saving Calculator</h3>
              <p className="text-sm text-slate-400 mt-1">Estimate water savings</p>
            </a>

            <a href="https://homeinsurance.quest" className="card-hover block p-4 rounded-xl" style={{ background: "var(--background)" }}>
              <div className="w-10 h-10 rounded-lg bg-indigo-500/20 flex items-center justify-center mb-3">
                <svg className="w-5 h-5 text-indigo-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="font-semibold text-white">Home Insurance</h3>
              <p className="text-sm text-slate-400 mt-1">Compare insurance quotes</p>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 py-12 border-t border-slate-800">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-semibold text-white mb-4">Calculators</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="https://gasratecalculator.quest" className="hover:text-orange-500 transition-colors">Gas Rate Calculator</a></li>
                <li><a href="https://energybillcalculator.quest" className="hover:text-orange-500 transition-colors">Energy Bill Calculator</a></li>
                <li><a href="https://watermetercalculator.quest" className="hover:text-orange-500 transition-colors">Water Meter Calculator</a></li>
                <li><a href="https://watersavingcalculator.quest" className="hover:text-orange-500 transition-colors">Water Saving Calculator</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Property Tools</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="https://mortgagecalculator.quest" className="hover:text-orange-500 transition-colors">Mortgage Calculator</a></li>
                <li><a href="https://stampdutycalculator.quest" className="hover:text-orange-500 transition-colors">Stamp Duty Calculator</a></li>
                <li><a href="https://rentvsbuycalculator.quest" className="hover:text-orange-500 transition-colors">Rent vs Buy</a></li>
                <li><a href="https://homeinsurance.quest" className="hover:text-orange-500 transition-colors">Home Insurance</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="https://www.ofgem.gov.uk/" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition-colors">Ofgem</a></li>
                <li><a href="https://www.citizensadvice.org.uk/" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition-colors">Citizens Advice</a></li>
                <li><a href="https://www.moneysavingexpert.com/" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition-colors">Money Saving Expert</a></li>
                <li><a href="https://www.gov.uk/check-energy-performance-certificate" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition-colors">Check Your EPC</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="/privacy" className="hover:text-orange-500 transition-colors">Privacy Policy</a></li>
                <li><a href="/terms" className="hover:text-orange-500 transition-colors">Terms of Use</a></li>
                <li><a href="/cookies" className="hover:text-orange-500 transition-colors">Cookie Policy</a></li>
                <li><a href="/disclaimer" className="hover:text-orange-500 transition-colors">Disclaimer</a></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="h-1 w-8 rounded bg-orange-500" />
              <span className="font-semibold">Utility Bill Calculator</span>
            </div>
            <p className="text-sm text-slate-500">
              &copy; {new Date().getFullYear()} Utility Bill Calculator. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
