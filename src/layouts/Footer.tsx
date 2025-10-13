import {Link} from "react-router";
import {FOOTER_SECTIONS, SOCIAL_LINKS} from "../constants/footer.ts";


function Footer({
                    logo = "https://cdn.prod.website-files.com/682d1ea72a8dbd92c55d9018/68465530cad72707fd6d1674_logo-lifecycle-light.svg",
                    tagline = "Guiding industries through sustainable transitions with bold thinking and technical precision.",
                    copyrightText = "© Copyright",
                    poweredByText = "Powered by",
                    disclaimer = "Begin with a statement acknowledging the company's registration status. This should include a placeholder for a generic location and a fictitious registration number, for example, \"Registered in [Location], NGN (No. XX-123456)\". The text should mention the company's authorization under a specific state department, citing a relevant act. Include a placeholder for a license number, like \"Authorized by the [State Department of Business Oversight] under the [State Money Transmission Act] (License No. YZ-987654).\"",
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
                                <img src={logo} alt="logo" className="h-9"/>
                            </Link>
                            <h5 className="text-[25px] leading-[31.25px] font-normal">
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
                            <div className="text-sm">
                                {copyrightText}{" "}
                                <a
                                    href="https://mediumrare.shop"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="underline hover:opacity-70 transition-opacity text-surface"
                                >
                                    W3-Technology
                                </a>
                            </div>
                            <div className="text-sm opacity-60">
                                {poweredByText}{" "}
                                <a
                                    href="#"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="underline hover:opacity-70 transition-opacity text-surface"
                                >
                                    Magnet
                                </a>
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