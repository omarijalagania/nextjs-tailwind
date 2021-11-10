import 'tailwindcss/tailwind.css'
import TimeSelect from '../components/TimeSelect/TimeSelect'

function MyApp({ Component, pageProps }) {
  return <TimeSelect><Component {...pageProps} /></TimeSelect>
}

export default MyApp
