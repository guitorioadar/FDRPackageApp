import { create } from 'apisauce'
import { useQuery } from '@tanstack/react-query'
import { IPackage } from '../Stores/types'

const api = create({
  baseURL: 'http://18.210.108.177:4003/api',
  headers: { Accept: 'application/json' },
})

const fetchPackages = async (): Promise<IPackage[]> => {
  const response = await api.get('/packagelist')
  console.log('api response',response)
  if (response.ok && response.data) {
    return response.data as IPackage[]
  } else {
    throw new Error('Error fetching packages')
  }
}

export const useFetchPackages = () => {
  return useQuery<IPackage[], Error>({
    queryKey: ['packages'],
    queryFn: fetchPackages,
  })
}

export default {
  fetchPackages,
}
