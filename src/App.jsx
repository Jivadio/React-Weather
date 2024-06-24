import loader from './assets/loader.svg';

function App() {

    return (
        <main
            className="max-w-sm min-h-96 mt-24 mx-auto rounded-xl pt-8 px-2.5 bg-white text-black shadow-xl text-center relative">
            <div
                className="bg-white absolute rounded-xl z-10 top-0 left-0 w-full h-full flex items-center justify-center transition-opacity transition-visibility duration-400 ease-in duration-500 opacity-0 invisible active:opacity-100 active:visible">
                <img src={loader} alt="loader"/>
            </div>
            <p className="text-5xl font-sans text-[#333]">Paris</p>
            <p className="text-2xl mb-11 text-[#606060]">France</p>
            <p className="text-7xl font-semibold text-[#212121]">25°C</p>

            <div className="info-container">
                <img src="/icons/01d.svg" alt="weather icon" className="object-cover w-32 h-32 mx-auto block"/>
            </div>
        </main>
    )
}

export default App
