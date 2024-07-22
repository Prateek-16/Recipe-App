const Footer = () => {
    return (
        <footer className="text-white py-5 bg_gradient ">
            <div className="container mx-auto flex flex-col px-5 py-5 gap-3 border-t border-slate-800">
                <div className="flex m-auto">
                    <p className="font-bold text-center">
                        Flavor<span className="text-green-500 text-xl">Verse</span>
                    </p>
                </div>

                <div className="container mx-auto text-center">
                <p className="text-sm">© 2024 Flavor Verse. All rights reserved.</p>
                <div className="mt-3 space-x-3">
                    <button
                        className="hover:underline text-white bg-transparent border-none cursor-pointer"
                    >
                        Home
                    </button>
                    <button
                        className="hover:underline text-white bg-transparent border-none cursor-pointer"
                    >
                        About
                    </button>
                    <button
                        className="hover:underline text-white bg-transparent border-none cursor-pointer"
                    >
                        Contact
                    </button>
                </div>
            </div>
            </div>
        </footer>
    )
}

export default Footer