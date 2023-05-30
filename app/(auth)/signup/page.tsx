import { Metadata } from 'next'


export const metadata: Metadata = {
    title: 'Sign Up',
    description: 'Create a new account'
}

export default function LoginPage(){
    return(
        <div className='m-5'>
            <h1>Sign Up Page</h1>
        </div>
    )
}