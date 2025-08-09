import type { Product } from '@/types/Product'
import style from './style.module.scss'
import { items } from '@/components/ProductItem/constant'

interface ProductItemProps {
  product: Product | undefined
}

const ProductItem = ({ product }: ProductItemProps) => {
  const { _id, name, images, price } = product ?? {}
  const { boxImg, showImg, showFnWhenHover, boxIcon, title, priceStyle } = style

  return (
    <div>
      <div className={boxImg}>
        <img src={images?.[0]} alt={''} />
        <img src={images?.[1]} alt={`${''} hover`} className={showImg} />
        <div className={showFnWhenHover}>
          {items.map((items, index) => (
            <div key={index} className={boxIcon}>
              <img src={items.icon} />
            </div>
          ))}
        </div>
      </div>
      <div className={title}>{name}</div>
      <div className={priceStyle}>{price}</div>
    </div>
  )
}

export default ProductItem
