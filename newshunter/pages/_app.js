import '../styles/globals.css'
import 'react-quill/dist/quill.snow.css';
import LoadingBar from 'react-top-loading-bar'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';
import Loader from '../components/Loader';



function MyApp({ Component, pageProps }) {
  const [progress, setProgress] = useState(0)
  const [loading, setloading] = useState(false)
  const router = useRouter()
  useEffect(() => {
    router.events.on('routeChangeStart', ()=>{
      setProgress(40)
      setloading(true)
    })
    router.events.on('routeChangeComplete', ()=>{
      setProgress(100)
      setloading(false)
    })
  }, [])
  return <>
  <LoadingBar color='#f11946'
  progress={progress}
  waitingTime = {400}
  onLoaderFinished={() => setProgress(0)}/>
  {loading && <Loader/>}
  <Component {...pageProps} />
  </>
  
}

export default MyApp
