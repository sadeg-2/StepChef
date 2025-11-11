import React from 'react'

const quotes = [
  'Cooking is love made visible.',
  'Good food is the foundation of genuine happiness.',
  'The secret ingredient is always passion.',
  'In the kitchen, creativity becomes delicious.',
  'Every great meal starts with a single step.',
  'Happiness is homemade.',
  'Spice a dish with love and it pleases every palate.',
  'A recipe has no soul; you as the cook must bring soul to it.',
]

export default function QuotesSection() {
  const rotations = ['rotate-2', '-rotate-2', 'rotate-1', '-rotate-1', 'rotate-3', '-rotate-3']

  return (
    <section className="w-full py-20 bg-gradient-to-b from-orange-50 via-white to-green-50 text-center overflow-hidden">
      <h2 className="text-4xl font-bold text-gray-900 mb-12">
        Words to <span className="text-orange-500">Inspire</span> Your Cooking
      </h2>

      <div className="relative max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 px-6 place-items-center">
        {quotes.map((quote, i) => (
          <div
            key={i}
            className={
              `bg-white rounded-xl shadow-md hover:shadow-lg border border-gray-100 ` +
              `p-4 w-[170px] h-[110px] flex items-center justify-center ` +
              `text-xs sm:text-sm text-gray-700 italic transition-transform ` +
              `hover:scale-105 hover:border-orange-400/40 ` +
              rotations[i % rotations.length]
            }
          >
            “{quote}”
          </div>
        ))}
      </div>
    </section>
  )
}
