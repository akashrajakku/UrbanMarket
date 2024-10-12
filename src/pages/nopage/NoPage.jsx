const NoPage = () => {
    return (
        <>
          <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
                    <h1 className="text-6xl font-extrabold text-gray-800 tracking-tight sm:text-8xl animate-pulse">
                        404
                    </h1>
                    <h2 className="mt-4 text-2xl font-semibold text-gray-600 sm:text-3xl">
                        Page Not Found
                    </h2>
                    <p className="mt-2 text-lg text-gray-500 sm:text-xl">
                        Unfortunately the page you are looking for has been moved or deleted
                    </p>
                    <a href="/" className="mt-8 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out">
                        Go Home
                    </a>
            </div>
        </>
      );
}

export default NoPage;
