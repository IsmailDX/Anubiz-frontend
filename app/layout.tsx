import ServerAuth from '@/components/Auth/ServerAuth'
import './globals.css'
import type { Metadata } from 'next'

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
                <ServerAuth>{children}</ServerAuth>
            </body>
        </html>
    )
}
