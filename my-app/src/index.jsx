import { createRoot } from 'react-dom/client'
import { HelloWorld } from './HelloWorld'
import { App } from './App'


const root = createRoot(document.getElementById('root')).render(<App/>)