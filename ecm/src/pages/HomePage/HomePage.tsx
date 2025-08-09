import AdvanceHeadling from '@/components/AdvandceHeadling/AdvanceHeadling'
import Banner from '@/components/Banner/Banner'
import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import HeadlingListProduct from '@/components/HeadlingListProduct/HeadlingListProduct'
import Info from '@/components/Info/Info'
import PopularProduct from '@/components/PopularProducts./PopularProduct'
import SaleHomePage from '@/components/SaleHomePage/SaleHomePage'
import { useGetProducts } from '@/hooks/useGetProducts'

const HomePage = () => {
  const { data, isLoading, error } = useGetProducts(1, 10)

  return (
    <div>
      <div>
        <Header />
        <Banner />
        <Info />
        <AdvanceHeadling />
        <HeadlingListProduct data={data?.contents.slice(0, 2)} />
        <PopularProduct data={data?.contents.slice(2, data.contents.length)} />
        <SaleHomePage />
        <Footer />
      </div>
    </div>
  )
}

export default HomePage
