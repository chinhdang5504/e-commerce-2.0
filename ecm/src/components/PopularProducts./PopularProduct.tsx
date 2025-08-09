import MainLayout from '@/components/Layout/Layout'
import style from './styles.module.scss'
import ProductItem from '@/components/ProductItem/ProductItem'
import type { Product } from '@/types/Product'

interface PopularProductProps {
  data?: Product[]
}

const PopularProduct = ({ data }: PopularProductProps) => {
  const { container } = style

  return (
    <MainLayout>
      <div className={container}>
        {data?.length ? data.map((item) => <ProductItem key={item._id} product={item} />) : <p>Không có sản phẩm</p>}
      </div>
    </MainLayout>
  )
}

export default PopularProduct
