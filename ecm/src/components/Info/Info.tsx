import MainLayout from '@/components/Layout/Layout'
import { Data } from '@/components/Info/constants'
import style from './styles.module.scss'

const Info = () => {
  const { container, containerCard, containerContent, desc, title } = style
  return (
    <MainLayout>
      <div className={container}>
        {Data.map((item, index) => (
          <div key={index} className={containerCard}>
            <img width={40} height={40} src={item.icon} alt={item.title} />
            <div className={containerContent}>
              <div className={title}>{item.title}</div>
              <div className={desc}>{item.desription}</div>
            </div>
          </div>
        ))}
      </div>
    </MainLayout>
  )
}

export default Info
