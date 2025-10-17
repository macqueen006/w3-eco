import {Link} from "react-router";
import {FOOTER_SECTIONS, SOCIAL_LINKS} from "../constants/footer.ts";


function Footer({
                    logo = "img/logos/logo.png",
                    tagline = "Guiding industries through sustainable transitions with data driven demand precision",
                    copyrightText = "© 2025 W3 ECO FRIENDLY. All Rights Reserved.",
                    poweredByText = "Website by",
                    disclaimer = "W3 Eco-Friendly Limited is registered in Lagos State, Nigeria (RC No. 1234567) and certified by the Lagos State Environmental Protection Agency (LASEPA) as an authorized E-waste Collector and Recycler (License No. LASEPA/EW-2019/045)",
                    sections = FOOTER_SECTIONS,
                    socialLinks = SOCIAL_LINKS
                }: FooterProps) {
    return (
        <footer className="bg-secondary text-white pt-24 pb-[72px] relative w-full block">
            {/* Noise Background */}
            <div
                className="absolute top-0 left-0 w-full h-full z-[1] pointer-events-none bg-[length:150px_150px] bg-center"
                style={{
                    backgroundImage: "url('https://cdn.prod.website-files.com/682d1ea72a8dbd92c55d9018/683505e4f52812f5f0b34529_Noise.png')"
                }}
            />

            {/* Container */}
            <div className="relative z-[3] max-w-7xl w-full mx-auto px-6">
                {/* Footer Wrap */}
                <div className="flex flex-col gap-24 pt-[72px]">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 auto-cols-fr">
                        <div className="max-w-[var(--_containers---4-cols)] flex flex-col gap-9 items-start">
                            <Link to="/" className="inline-block max-w-full">
                                <img src={logo} alt="logo" className="size-16"/>
                            </Link>
                            <h5 className="text-2xl leading-[31.25px] font-normal">
                                {tagline}
                            </h5>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-cols-fr">
                            {sections.map((section, index) => (
                                <div key={index} className="flex flex-col gap-6 items-start">
                                    <div className="font-badges text-[13px] leading-[18.2px] uppercase font-medium">
                                        {section.title}
                                    </div>
                                    <nav className="flex flex-col gap-3 items-start">
                                        {section.links.map((link, linkIndex) => (
                                            link.external ? (
                                                <a
                                                    key={linkIndex}
                                                    href={link.href}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-white hover:opacity-70 transition-opacity duration-200"
                                                >
                                                    {link.label}
                                                </a>
                                            ) : (
                                                <Link
                                                    key={linkIndex}
                                                    to={link.href}
                                                    className="text-white hover:opacity-70 transition-opacity duration-200"
                                                >
                                                    {link.label}
                                                </Link>
                                            )
                                        ))}
                                    </nav>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                        <div className="flex flex-col gap-[3px] items-start">
                            <div className="text-xs">
                                {copyrightText}
                            </div>
                            <div className="text-xs opacity-60">
                                {poweredByText}{" "}
                                <a href="mailto:ogbrukomogodwin@gmail.com"
                                   className="text-yellow-400 hover:text-yellow-300 underline">Macqueen006</a>
                            </div>
                        </div>

                        <div className="flex gap-[30px] items-center">
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:opacity-70 transition-opacity"
                                    aria-label={social.name}
                                >
                                    <img src={social.icon} alt={social.name} className="w-6 h-6"/>
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="text-sm max-w-[928px] opacity-50">
                        {disclaimer}
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;