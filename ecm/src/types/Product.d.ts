export interface Product {
  _id: string
  images: string[]
  name: string
  price: number
  size: size[]
  description: string
  material: string
}

export interface ProductsResponse {
  contents: Product[]
  page: number
  total: number
  limit: number
}

export interface size {
  name: string
  amount: string
}
