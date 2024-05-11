import './globals.css'
import type { Metadata } from 'next'
//this import is for authentication so if no token, user gets no access instantly
import ServerAuth from '@/utils/ServerAuth'
//the reason why we made this provider is because this layout.tsx is server component and query provider on runs
//if client component, so we wrap provider client component around children so children can still be serverside component
import Provider from '@/utils/Providers'

export const metadata: Metadata = {
    title: 'Anubiz',
    description: 'A nice ecommerce website',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className="relative">
                {/* <ServerAuth> */}
                <Provider>{children}</Provider>
                {/* </ServerAuth> */}
            </body>
        </html>
    )
}
