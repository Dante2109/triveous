// import '@/styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import AuthContextProvider from '../../components/PrivateAuth/page'
import { useRouter } from 'next/router'
import PrivateRoute from '../../components/PrivateAuth/PrivateRoute'
const noAuthRequired=["/"]
export default function App({ Component, pageProps }) {
  const router=useRouter()
  return(
  <>
  <ChakraProvider>
    <AuthContextProvider>
    {(noAuthRequired.includes(router.pathname)?<><Component {...pageProps} />
    </>:
    <PrivateRoute>
   <Component {...pageProps} />
    </PrivateRoute>
    )}
    </AuthContextProvider>
  </ChakraProvider>
  </>
  )
}
