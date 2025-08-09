import MainLayout from '@/components/Layout/Layout'
import style from './styles.module.scss'

const AdvanceHeadling = () => {
  const { container, title, description, wrapper, wrapper_content } = style

  return (
    <MainLayout>
      <div className={container}>
        <div className={wrapper}>
          <div className={title}>don't miss super offers</div>
          <div className={wrapper_content}>
            <div className={description}>Our best products</div>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}

export default AdvanceHeadling
