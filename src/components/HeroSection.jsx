import CTAButton from "./ui/CTAButton";
// Photo de <a href="https://unsplash.com/fr/@lum3n?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">LUM3N</a> sur <a href="https://unsplash.com/fr/photos/apple-magic-mouse-blanc-a-cote-du-magic-keyboard-et-des-ecouteurs--RBuQ2PK_L8?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>

export default function HeroSection() {
    const navigationButton = [
        { name: "call", href: "/contact" },
        { name: "services", href: "#services" },
    ]

    const handleClick = (href) => {
        if (href === "/contact") {
            window.location.href = href
        } else {
            const section = document.querySelector(href);
            if (!section) return;
            section.scrollIntoView({ behavior: "smooth" });
        }
    }

    return (
        <section id="heroSection" className="mt-[100px] px-3 pt-7 font-roboto pb-9 bg-gradient-to-l from-slate-200 md:flex md:flex-row-reverse md:gap-5 md:px-20 md:pb-7">
            <div className="md:w-1/2">
                <img src="./Desktop_Blue_2.jpg" alt="" className="rounded-3xl shadow-lg shadow-lightBlue animate-slide-down md:animate-slide-right" />
            </div>
            <div className="mt-4 animate-slide-down md:w-1/2 md:animate-slide-right">
                <h2 className="text-4xl text-marianBlue font-bold mb-4 font-merriweather">Votre vision, mon expertise pour des solutions digitales sur-mesure</h2>
                <h3 className="text-2xl">Je repense et optimise votre site pour attirer davantage de clients. J'améliore son SEO, ses fonctionnalités et le transforme selon votre vision en un produit digital performant.
                </h3>
                <div className="flex justify-center gap-4 mt-14 flex-wrap">
                    <CTAButton onClick={() => handleClick(navigationButton[0].href)}>
                        Prendre rendez-vous
                    </CTAButton>

                    <CTAButton
                        variant="secondary"
                        onClick={() => handleClick(navigationButton[1].href)}
                        className="min-w-[200px]"
                    >
                        Mes services
                    </CTAButton>
                </div>
            </div>
        </section>
    )
}
