

const ErrorPage = () => {
  return (
    <body className="bg-gray-200 text-white  flex h-screen items-center justify-center font-sans">
        <div className="bg-white p-8 rounded shadow-md md:w-96">
            <h1 className="text-6xl font-bold text-red-500 mb-4 text-center">404</h1>
            <p className="text-gray-700 text-lg font-lobster">Oops! Something went wrong.</p>
            <p className="text-gray-500 mb-4 font-lobster">The page you are looking for might be in another office.</p>
            <a href="/" className="text-blue-500 block">Go back home</a>
        </div>
        <div className="absolute bottom-0 right-0 p-4">
            <svg className="h-12 w-12 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
            </svg>
        </div>
    </body>
  )
}

export default ErrorPage