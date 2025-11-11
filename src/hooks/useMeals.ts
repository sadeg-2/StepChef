import { useQuery } from '@tanstack/react-query'
import { fetchRandomMeal, fetchMealById } from '../services/api'

export function useRandomMeal() {
  return useQuery({
    queryKey: ['randomMeal'],
    queryFn: fetchRandomMeal,
  })
}

export function useMealById(id: string) {
  return useQuery({
    queryKey: ['meal', id],
    queryFn: () => fetchMealById(id),
    enabled: !!id,
  })
}
