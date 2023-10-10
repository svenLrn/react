import { createRoot } from 'react-dom/client'
import { HelloWorld } from './HelloWorld'


const rootElement = document.getElementById('root')

const root = createRoot(rootElement)
root.render(<HelloWorld/>)