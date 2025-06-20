function Home() {
    return (
        <>
            <div className="flex flex-col items-center justify-center bg-blue-400 p-4 text-white">
                <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
                <p className="text-lg font-bold">Explore my projects and skills.</p>
            </div>
            <div className="flex flex-row items-center justify-center gap-2.5 min-h-75 bg-gray-200">
                <div className="flex flex-col items-center justify-center p-4 bg-gray-100">
                    <h1 className="text-2xl font-bold mt-8">Who I am</h1>
                    <p className="text-lg text-gray-700">I am a passionate developer with experience in building web applications.</p>
                </div>
                <div className="flex flex-col items-center justify-center p-4 bg-gray-100">
                    <h1 className="text-2xl font-bold mt-8">What I do</h1>
                    <p className="text-lg text-gray-700">I specialize in front-end development, creating responsive and user-friendly interfaces.</p>
                </div>
            </div>
        </>
    );
}

export default Home;