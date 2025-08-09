import MainLayout from '@/components/Layout/Layout'
import style from './styles.module.scss'
import CountDownBanner from '@/components/CountDownBanner/CountDownBanner'
import ProductItem from '@/components/ProductItem/ProductItem'
import type { Product } from '@/types/Product'

interface HeadlingListProductProps {
  data?: Product[]
}

const HeadlingListProduct = ({ data }: HeadlingListProductProps) => {
  const { container, container_item } = style

  return (
    <MainLayout>
      <div className={container}>
        <CountDownBanner />
        <div className={container_item}>
          {data?.length ? data.map((item) => <ProductItem key={item._id} product={item} />) : <p>Không có sản phẩm</p>}
        </div>
      </div>
    </MainLayout>
  )
}

export default HeadlingListProduct
