import './app.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import { themeChange } from 'theme-change'
import App from './App.svelte'

themeChange()

const app = new App({
  target: document.getElementById('app'),
})

export default app
