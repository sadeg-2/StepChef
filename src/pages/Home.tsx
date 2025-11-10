import { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'

interface Meal {
  idMeal: string
  strMeal: string
  strCategory: string
  strArea: string
  strInstructions: string
  strMealThumb: string
}

export default function Home() {
  const [meal, setMeal] = useState<Meal | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [searchParams] = useSearchParams()

  const fetchRandomMeal = async () => {
    try {
      setLoading(true)
      const response = await fetch('https://www.themealdb.com/api/json/v1/1/random.php')
      const data = await response.json()
      setMeal(data.meals[0])
    } catch (error) {
      console.error('Error fetching random meal:', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    // If we got here via "?random=true", still fetch normally
    if (searchParams.get('random')) {
      fetchRandomMeal()
    } else {
      fetchRandomMeal()
    }
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <div className="flex-1 flex items-center justify-center bg-white">
          <p className="text-gray-500 text-lg animate-pulse">
            Loading a delicious meal...
          </p>
        </div>
      </div>
    )
  }

  if (!meal) {
    return (
      <div className="min-h-screen flex flex-col">
        <div className="flex-1 flex items-center justify-center">
          <p className="text-gray-500 text-lg">No meal found. Try again!</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-orange-50 flex flex-col">

      {/* Random Meal Section */}
      <div className="flex flex-col lg:flex-row items-center justify-center px-6 py-12 max-w-6xl mx-auto flex-1">
        {/* Left Side (Text) */}
        <div className="flex-1 text-center lg:text-left space-y-4">
          <h2 className="text-4xl font-extrabold text-gray-800">{meal.strMeal}</h2>
          <p className="text-orange-500 font-medium">
            {meal.strCategory} • {meal.strArea}
          </p>
          <p className="text-gray-700 text-lg max-w-md mx-auto lg:mx-0">
            {meal.strInstructions.split('. ').slice(0, 2).join('. ')}...
          </p>

          <div className="flex gap-4 justify-center lg:justify-start mt-4">
            <Link
              to={`/recipe/${meal.idMeal}`}
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl shadow-lg transition"
            >
              View Recipe
            </Link>
            <button
              onClick={fetchRandomMeal}
              className="border border-orange-500 text-orange-600 hover:bg-orange-50 px-6 py-3 rounded-xl shadow"
            >
              Next Random 🔄
            </button>
          </div>
        </div>

        {/* Right Side (Image) */}
        <div className="flex-1 mt-8 lg:mt-0">
          <img
            src={meal.strMealThumb}
            alt={meal.strMeal}
            className="rounded-3xl shadow-2xl w-full object-cover"
          />
        </div>
      </div>
    </div>
  )
}
