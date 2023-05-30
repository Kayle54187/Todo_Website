import { Metadata } from 'next'


export const metadata: Metadata = {
    title: 'Login',
    description: 'Log into your account'
}

export default function LoginPage(){
    return(
        <div className='m-5'>
            <h1>Login page</h1>
        </div>
    )
}