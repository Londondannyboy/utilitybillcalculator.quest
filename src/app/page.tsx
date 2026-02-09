export default function Home() {
  return (
    <main className="min-h-screen px-4 py-12 md:py-20">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-6" style={{ background: "color-mix(in srgb, var(--accent) 10%, transparent)", color: "var(--accent)" }}>
            Coming Soon
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight text-gray-900 dark:text-white">
            Utility Bill Calculator: Calculate Your Monthly Utility Costs
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Accurately estimating your household utility costs is essential for effective financial planning. A utility bill calculator provides a detailed breakdown of your expected monthly expenses for gas, electricity, water, and other essential services, helping you create a realistic budget and identify opportunities to reduce your outgoings.
          </p>
        </div>

        <div className="my-12 flex justify-center">
          <img
            src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20600%20300%22%20fill%3D%22none%22%3E%3Crect%20width%3D%22600%22%20height%3D%22300%22%20rx%3D%2212%22%20fill%3D%22%23047857%22%20opacity%3D%220.08%22%2F%3E%3Crect%20x%3D%2240%22%20y%3D%2240%22%20width%3D%22520%22%20height%3D%22220%22%20rx%3D%228%22%20fill%3D%22%23047857%22%20opacity%3D%220.12%22%2F%3E%3Ctext%20x%3D%22300%22%20y%3D%22140%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2Csans-serif%22%20font-size%3D%2228%22%20font-weight%3D%22bold%22%20fill%3D%22%23047857%22%3EUtility%20Bill%20Calculator%3C%2Ftext%3E%3Ctext%20x%3D%22300%22%20y%3D%22180%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2Csans-serif%22%20font-size%3D%2216%22%20fill%3D%22%23047857%22%20opacity%3D%220.8%22%3ECalculate%20Your%20Monthly%20Utility%20Costs%3C%2Ftext%3E%3Crect%20x%3D%22220%22%20y%3D%22210%22%20width%3D%22160%22%20height%3D%2236%22%20rx%3D%2218%22%20fill%3D%22%23047857%22%20opacity%3D%220.2%22%2F%3E%3Ctext%20x%3D%22300%22%20y%3D%22234%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2Csans-serif%22%20font-size%3D%2214%22%20fill%3D%22%23047857%22%3EComing%20Soon%3C%2Ftext%3E%3C%2Fsvg%3E"
            alt="utility bill calculator illustration"
            width={600}
            height={300}
            className="rounded-lg w-full max-w-lg"
          />
        </div>

        <article className="space-y-8">

        <section>
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">
            How a Utility Bill Calculator Works
          </h2>
          <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
            A utility bill calculator takes information about your property, household size, and usage habits to estimate your monthly utility costs. By inputting details such as the number of bedrooms, your heating type, the number of occupants, and your typical daily routines, the calculator applies average consumption rates and current tariff prices to produce monthly and annual cost estimates. This provides a realistic baseline for budgeting, whether you are moving to a new property, reviewing your current expenditure, or trying to understand how your bills compare to similar households. A <strong>utility bill calculator</strong> is particularly valuable for first-time renters or buyers who have no previous bills to reference.
          </p>
        </section>

        <section>
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">
            Breaking Down Your Electricity Bill Costs
          </h2>
          <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
            Your electricity bill is calculated from two components: a daily standing charge and a per-unit charge for the electricity you consume. The standing charge covers the cost of maintaining your connection to the grid and remains constant regardless of usage. The per-unit charge is multiplied by the number of kilowatt hours you consume. Average UK electricity costs vary by region and tariff, but understanding these components helps you interpret your bills and identify whether high costs are due to excessive consumption or an expensive tariff. Your utility bill calculator separates these elements, showing you exactly how your electricity costs break down and where savings opportunities exist.
          </p>
        </section>

        <section>
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">
            Breaking Down Your Gas Bill Costs
          </h2>
          <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
            Like electricity, gas bills consist of a standing charge plus consumption-based charges measured in kilowatt hours. Gas is primarily used for central heating and hot water, meaning consumption varies dramatically between seasons. Winter gas bills can be three to four times higher than summer bills in well-insulated homes, and even more in poorly insulated properties. Your utility bill calculator accounts for these seasonal variations, providing both monthly estimates and an annual average. Understanding the seasonal pattern of your gas consumption helps you plan for higher winter costs rather than being surprised by large bills during cold months.
          </p>
        </section>

        <section>
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">
            Estimating Your Water and Sewerage Costs
          </h2>
          <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
            Water costs depend on whether you have a water meter or pay unmetered charges based on your property's rateable value. For metered customers, charges are based on actual consumption plus a standing charge, while unmetered customers pay a fixed annual amount regardless of usage. Your utility bill calculator can estimate both scenarios, helping you determine which charging method would be more cost-effective for your household. Sewerage charges are typically included in your water bill and cover the cost of removing and treating wastewater from your property. In most areas, sewerage charges are calculated as a percentage of your water consumption or as a fixed annual charge for unmetered properties.
          </p>
        </section>

        <section>
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">
            Using Your Calculator Results to Reduce Bills
          </h2>
          <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
            Once your utility bill calculator has estimated your costs, use the results to identify where the biggest savings opportunities lie. If your electricity costs seem high, consider which appliances consume the most power and whether you could use them more efficiently. If gas costs dominate your bills, improving your home's insulation or adjusting your heating schedule could deliver significant savings. Compare your estimated costs against available tariffs from other suppliers to see if switching could reduce your bills. Setting a household budget based on your calculator results and tracking actual spending against it helps you maintain awareness of your utility costs and catch any unexpected increases early.
          </p>
        </section>
        </article>

        <section className="mt-12 p-6 rounded-lg" style={{ background: "color-mix(in srgb, var(--accent) 5%, transparent)" }}>
          <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-gray-100">
            Related UK Calculators
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            Explore our other free calculators to help manage your household finances:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <a href="https://gasratecalculator.quest" className="block p-3 rounded-lg bg-white dark:bg-gray-800 hover:shadow-md transition-shadow">
              <span className="font-medium text-gray-900 dark:text-white">Gas Rate Calculator</span>
              <span className="block text-sm text-gray-500 dark:text-gray-400">Calculate gas appliance heat input (kW)</span>
            </a>
            <a href="https://mortgagecalculator.quest" className="block p-3 rounded-lg bg-white dark:bg-gray-800 hover:shadow-md transition-shadow">
              <span className="font-medium text-gray-900 dark:text-white">Mortgage Calculator</span>
              <span className="block text-sm text-gray-500 dark:text-gray-400">Calculate monthly mortgage payments</span>
            </a>
            <a href="https://stampdutycalculator.quest" className="block p-3 rounded-lg bg-white dark:bg-gray-800 hover:shadow-md transition-shadow">
              <span className="font-medium text-gray-900 dark:text-white">Stamp Duty Calculator</span>
              <span className="block text-sm text-gray-500 dark:text-gray-400">Calculate UK SDLT, LBTT, and LTT</span>
            </a>
            <a href="https://rentvsbuycalculator.quest" className="block p-3 rounded-lg bg-white dark:bg-gray-800 hover:shadow-md transition-shadow">
              <span className="font-medium text-gray-900 dark:text-white">Rent vs Buy Calculator</span>
              <span className="block text-sm text-gray-500 dark:text-gray-400">Compare renting vs buying costs</span>
            </a>
            <a href="https://energybillcalculator.quest" className="block p-3 rounded-lg bg-white dark:bg-gray-800 hover:shadow-md transition-shadow">
              <span className="font-medium text-gray-900 dark:text-white">Energy Bill Calculator</span>
              <span className="block text-sm text-gray-500 dark:text-gray-400">Calculate monthly energy costs</span>
            </a>
            <a href="https://watersavingcalculator.quest" className="block p-3 rounded-lg bg-white dark:bg-gray-800 hover:shadow-md transition-shadow">
              <span className="font-medium text-gray-900 dark:text-white">Water Saving Calculator</span>
              <span className="block text-sm text-gray-500 dark:text-gray-400">Estimate water usage and savings</span>
            </a>
            <a href="https://watermetercalculator.quest" className="block p-3 rounded-lg bg-white dark:bg-gray-800 hover:shadow-md transition-shadow">
              <span className="font-medium text-gray-900 dark:text-white">Water Meter Calculator</span>
              <span className="block text-sm text-gray-500 dark:text-gray-400">Track water meter readings</span>
            </a>
            <a href="https://homeinsurance.quest" className="block p-3 rounded-lg bg-white dark:bg-gray-800 hover:shadow-md transition-shadow">
              <span className="font-medium text-gray-900 dark:text-white">Home Insurance</span>
              <span className="block text-sm text-gray-500 dark:text-gray-400">Compare home insurance quotes</span>
            </a>
          </div>
        </section>

        <footer className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700 text-center">
          <div className="h-1 w-24 mx-auto rounded mb-6" style={{ background: "var(--accent)" }} />
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Utility Bill Calculator. All rights reserved.
          </p>
        </footer>
      </div>
    </main>
  );
}
