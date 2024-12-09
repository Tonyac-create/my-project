import { useState } from 'react'
import MenuNavigation from '../ui/MenuNavigation';
import xmark from "../../assets/xmark.svg"
import bars from "../../assets/bars.svg"

export default function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="bg-white fixed w-full font-roboto top-0 z-50 py-5">
            <div className="px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <img
                        src="./src/assets/Logo_FD_Enligne_Bluegradient.webp"
                        alt="Logo FreeDev"
                        className='w-44 h-14 md:w-52 md:h-20 shadow-lg shadow-blue-400'
                    />
                    <nav className='hidden md:flex space-x-8'>
                        <ul className='flex my-auto gap-11 text-2xl ml-auto'>
                            <MenuNavigation setIsMenuOpen={setIsMenuOpen} />
                        </ul>
                    </nav>
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="md:hidden w-10 h-10"
                            aria-expanded={isMenuOpen}
                            aria-label="Toggle menu"
                        >
                            {isMenuOpen ? (
                                <img src={xmark} alt="" className='transition-transform duration-400 rotate-90 hover:rotate-180' />
                            ) : (
                                <img src={bars} alt="" className='transition-transform duration-400 hover:scale-110' />
                            )}
                        </button>
                    </div>
                </div>
            </div>
            <div
                className={`md:hidden pt-3 overflow-hidden transition-all duration-500 ease-in-out ${isMenuOpen ? 'max-h-72 opacity-100' : 'max-h-0 opacity-0'
                    }`}
            >
                <nav className="ml-4 bg-white shadow-lg transform transition-transform duration-700 ease-in-out">
                    <ul className={`flex flex-col my-auto gap-5 text-2xl transition-all duration-700 transform 
                            ${isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
                        <MenuNavigation setIsMenuOpen={setIsMenuOpen} />
                    </ul>
                </nav>
            </div>
        </header>
    )
}
