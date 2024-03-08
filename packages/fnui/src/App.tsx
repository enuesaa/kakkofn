import { Theme } from '@radix-ui/themes'
import '@radix-ui/themes/styles.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import TopPage from './pages/index'
import WorkflowPage from './pages/workflow'
import FnPage from './pages/fns/view'

export const App = () => {
  return (
    <Theme appearance='dark' accentColor='purple'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<TopPage />} />
          <Route path='/workflow' element={<WorkflowPage />} />
          <Route path='/fns/:name' element={<FnPage />} />
        </Routes>
      </BrowserRouter>
    </Theme>
  )
}
