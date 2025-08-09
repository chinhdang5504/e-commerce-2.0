import router from '@/routes/router'
import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Suspense>
      <Routes>
        {router.map((item, index) => (
          <Route path={item.path} element={<item.component />} key={index} />
        ))}
      </Routes>
    </Suspense>
  )
}

export default App
