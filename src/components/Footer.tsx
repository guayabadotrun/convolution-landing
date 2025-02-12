
export default function Footer() {
    return (
        <section className="p-4 bg-black">
            <div className="container mx-auto flex flex-row items-center justify-between">
                <p className="text-white text-afacad text-sm">©convolution.agency</p>
                <div className="flex flex-row gap-3">
                    <p className="text-white text-afacad text-sm">About</p>
                    <p className="text-white text-afacad text-sm">/</p>
                    <p className="text-white text-afacad text-sm">Whitepaper</p>
                    <p className="text-white text-afacad text-sm">/</p>
                    <p className="text-white text-afacad text-sm">GitHub</p>
                </div>
            </div>
        </section>
    )
}