import ReactDOM from 'react-dom/client'
import { App } from './App'
import './index.css'
import { AppProvider } from './store/context'

ReactDOM.createRoot( document.getElementById( 'root' ) as HTMLElement ).render(
  <AppProvider>
    <App />
  </AppProvider>
)
