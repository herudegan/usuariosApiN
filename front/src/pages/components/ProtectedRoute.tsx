import { ReactNode } from 'react'
import { useRouter } from 'next/router'

const isBrowser = () => typeof window !== "undefined";

interface Props {
    children?: ReactNode
}

const ProtectedRoute = ({children, ...props}: Props) => {
    const navigate = useRouter()
    let unprotectedRoutes = [
        ''
    ]

    let pathIsProtected = unprotectedRoutes.indexOf(navigate.pathname) === -1;

    if(isBrowser()){
        if(pathIsProtected){
            if (sessionStorage.getItem('logado') === '0' && localStorage.getItem('logado') === '0') {
                navigate.push('/')
            }
            if(sessionStorage.getItem('logado') === '1' && navigate.pathname === '/' || localStorage.getItem('logado') === '1' && navigate.pathname === '/'){
                navigate.push('/lista')
            }
        } 
    }

    return children
}

export default ProtectedRoute