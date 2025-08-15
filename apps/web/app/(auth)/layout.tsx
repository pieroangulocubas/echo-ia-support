export default function AuthLayout({children}: {children: React.ReactNode}) {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-3xl font-bold mb-4">Authentication</h1>
            <p className="mb-8">Please sign in or sign up to continue.</p>
            {children}
        </div>
    )
}