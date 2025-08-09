import PrivateAxios from '@/libs/PrivateAxios'
import type { ProductsResponse } from '@/types/Product'

export const getProducts = async (page: number, limit: number) => {
  const res = await PrivateAxios.get<ProductsResponse>(`/product?page=${page}&limit=${limit}`)
  return res.data
}
