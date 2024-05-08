import { cookies, headers } from 'next/headers'
import { redirect } from 'next/navigation'

type Props = {
    children: React.ReactNode
}

export default async function ServerAuth({ children }: Props) {
    const headersList = headers()

    const pathname = headersList.get('x-pathname')

    const token = cookies().get('token')

    if (token === undefined) {
        if (pathname !== '/') {
            redirect('/')
        }
    } else if (token !== undefined) {
        if (pathname === '/') {
            redirect('/home')
        }
    }

    return <>{children}</>
}
