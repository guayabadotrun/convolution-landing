
export default function Footer() {
    return (
        <section className="p-4 bg-black -mt-2">
            <div className="container mx-auto flex md:flex-row gap-3 flex-col md:items-center justify-between">
                <p className="text-white text-afacad text-sm">2026 © convolution.agency</p>
                <div className="flex md:flex-row flex-col gap-3">
                    <p className="text-white text-afacad text-sm">
                        <a href="https://docs.convolution.agency" target="_blank">About</a>
                    </p>

                    <p className="text-white text-afacad text-sm hidden md:block">/</p>
                    <p className="text-white text-afacad text-sm">
                        <a href="https://docs.convolution.agency/tokenomics" target="_blank">Whitepaper</a>
                    </p>
                    <p className="text-white text-afacad text-sm hidden md:block">/</p>
                    <p className="text-white text-afacad text-sm">
                        <a href="https://x.com/convolutionRH" target="_blank">X</a>
                    </p>

                </div>
            </div>
        </section>
    )
}