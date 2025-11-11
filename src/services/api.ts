const BASE_URL = 'https://www.themealdb.com/api/json/v1/1'

export async function fetchRandomMeal() {
  const res = await fetch(`${BASE_URL}/random.php`)
  if (!res.ok) throw new Error('Failed to fetch random meal')
  const data = await res.json()
  return data.meals[0]
}

export async function fetchMealById(id: string) {
  const res = await fetch(`${BASE_URL}/lookup.php?i=${id}`)
  if (!res.ok) throw new Error('Failed to fetch meal')
  const data = await res.json()
  return data.meals[0]
}
