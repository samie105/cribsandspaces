"use client";

export default function BedPacksSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="max-w-3xl mx-auto">
            <div className="mb-6">
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-light text-[var(--text-dark)] mb-4" style={{ fontFamily: 'var(--font-montecarlo), cursive' }}>
                Premium <span className="text-[var(--primary-color)]">Bed Packs</span>
              </h2>
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="w-16 h-px bg-gradient-to-r from-transparent via-[var(--primary-color)] to-transparent"></div>
                <div className="w-2 h-2 rounded-full bg-[var(--primary-color)]"></div>
                <div className="w-16 h-px bg-gradient-to-r from-transparent via-[var(--primary-color)] to-transparent"></div>
              </div>
              <p className="text-lg text-[var(--text-light)] font-light leading-relaxed max-w-2xl mx-auto">
                Complete linen packages with premium quality bedding and towels
              </p>
            </div>
          </div>
        </div>

        {/* What is in a Bed Pack? Section */}
        <div className="mb-12 max-w-2xl mx-auto text-center">
          <h3 className="text-2xl md:text-3xl font-light text-[var(--primary-color)] mb-4">What is in a Bed Pack?</h3>
          <p className="text-base md:text-lg text-gray-700 mb-2">We Provide Four Bed Pack Sizes. All bed linen is a minimum 200 thread count. All towels are a minimum of 600GSM.</p>
          <p className="text-base md:text-lg text-gray-700 mb-2">Bed Linen Packs are clean, crisp. Delivered straight to your door. Once used, pickup will be arranged along with a fresh replacement.</p>
          {/* <button className="mt-4 px-8 py-3 bg-gradient-to-r from-[var(--primary-color)] to-[var(--primary-hover)] text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">Enquire</button> */}
        </div>

        <div className="bg-white rounded-2xl border border-gray-200/60 overflow-hidden backdrop-blur-sm">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px] overflow-hidden">
              <thead className="bg-gradient-to-r from-gray-50 to-gray-100/80">
                <tr>
                  <th className="px-8 py-6 text-left text-sm font-bold text-[var(--text-dark)] border-b-2 border-gray-200/80 uppercase tracking-wider">
                    Item
                  </th>
                  <th className="px-8 py-6 text-center text-sm font-bold text-[var(--text-dark)] border-b-2 border-gray-200/80 uppercase tracking-wider">
                    Single
                  </th>
                  <th className="px-8 py-6 text-center text-sm font-bold text-[var(--text-dark)] border-b-2 border-gray-200/80 uppercase tracking-wider">
                    Double
                  </th>
                  <th className="px-8 py-6 text-center text-sm font-bold text-[var(--text-dark)] border-b-2 border-gray-200/80 uppercase tracking-wider">
                    King
                  </th>
                  <th className="px-8 py-6 text-center text-sm font-bold text-[var(--text-dark)] border-b-2 border-gray-200/80 uppercase tracking-wider">
                    Super King
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="px-8 py-6 text-sm font-medium text-[var(--text-dark)]">
                    Duvet Cover
                  </td>
                  <td className="px-8 py-6 text-sm text-center font-bold text-[var(--primary-color)]">
                    1x
                  </td>
                  <td className="px-8 py-6 text-sm text-center font-bold text-[var(--primary-color)]">
                    1x
                  </td>
                  <td className="px-8 py-6 text-sm text-center font-bold text-[var(--primary-color)]">
                    1x
                  </td>
                  <td className="px-8 py-6 text-sm text-center font-bold text-[var(--primary-color)]">
                    1x
                  </td>
                </tr>
                <tr>
                  <td className="px-8 py-6 text-sm font-medium text-[var(--text-dark)]">
                    Bed Sheet
                  </td>
                  <td className="px-8 py-6 text-sm text-center font-bold text-[var(--primary-color)]">
                    1x
                  </td>
                  <td className="px-8 py-6 text-sm text-center font-bold text-[var(--primary-color)]">
                    1x
                  </td>
                  <td className="px-8 py-6 text-sm text-center font-bold text-[var(--primary-color)]">
                    1x
                  </td>
                  <td className="px-8 py-6 text-sm text-center font-bold text-[var(--primary-color)]">
                    1x
                  </td>
                </tr>
                                <tr>
                  <td className="px-8 py-6 text-sm font-medium text-[var(--text-dark)]">
                    Pillow Cases
                  </td>
                  <td className="px-8 py-6 text-sm text-center font-bold text-[var(--primary-color)]">
                    2x
                  </td>
                  <td className="px-8 py-6 text-sm text-center font-bold text-[var(--primary-color)]">
                    4x
                  </td>
                  <td className="px-8 py-6 text-sm text-center font-bold text-[var(--primary-color)]">
                    4x
                  </td>
                  <td className="px-8 py-6 text-sm text-center font-bold text-[var(--primary-color)]">
                    4x
                  </td>
                </tr>
                                <tr>
                  <td className="px-8 py-6 text-sm font-medium text-[var(--text-dark)]">
                    Bath Towels
                  </td>
                  <td className="px-8 py-6 text-sm text-center font-bold text-[var(--primary-color)]">
                    1x
                  </td>
                  <td className="px-8 py-6 text-sm text-center font-bold text-[var(--primary-color)]">
                    2x
                  </td>
                  <td className="px-8 py-6 text-sm text-center font-bold text-[var(--primary-color)]">
                    2x
                  </td>
                  <td className="px-8 py-6 text-sm text-center font-bold text-[var(--primary-color)]">
                    2x
                  </td>
                </tr>
                                <tr>
                  <td className="px-8 py-6 text-sm font-medium text-[var(--text-dark)]">
                    Hand Towels <span className="opacity-50">(Optional)</span>
                  </td>
                  <td className="px-8 py-6 text-sm text-center font-bold text-[var(--primary-color)]">
                    1x
                  </td>
                  <td className="px-8 py-6 text-sm text-center font-bold text-[var(--primary-color)]">
                    2x
                  </td>
                  <td className="px-8 py-6 text-sm text-center font-bold text-[var(--primary-color)]">
                    2x
                  </td>
                  <td className="px-8 py-6 text-sm text-center font-bold text-[var(--primary-color)]">
                    2x
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}