import {Section} from "../components/Section.tsx";

const Contact = () => {
    return (
        <>
            <section className="section bg-secondary text-white title-section relative">
                <div
                    className="absolute top-0 left-0 w-full h-full z-[1] pointer-events-none bg-[length:150px_150px] bg-center"
                    style={{
                        backgroundImage: "url('https://cdn.prod.website-files.com/682d1ea72a8dbd92c55d9018/683505e4f52812f5f0b34529_Noise.png')"
                    }}
                />
                <div className="container">
                    <div className="centered-title">
                        <div className="badge-text">[contact us]</div>
                        <h1>Start the Conversation</h1>
                        <div className="lead-text-wrapper">
                            <div className="lead-text text-3xl max-w-[571px]">
                                We help organizations manage e-waste responsibly through certified processes,
                                transparent tracking, and comprehensive compliance solutions.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="line-wrapper top-lines">
                    <div className="lines short"></div>
                    <div className="lines narrow"></div>
                </div>
                <div className="line-wrapper bottom-lines">
                    <div className="lines short"></div>
                    <div className="lines narrow"></div>
                </div>
            </section>
            <Section className="bg-primary">
                <div className="flex flex-col md:flex-row justify-center items-center gap-16">
                    <div className="text-2xl max-w-[333px]">
                        Contact our team for consultation and compliance assessment.
                    </div>
                    <div className="max-w-[690px] flex-1 grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div
                            className="border border-dotted border-foreground rounded-sm flex flex-col justify-between min-h-[210px] p-4.5 gap-6">
                            <div className="flex flex-col gap-3 justify-start items-start">
                                <div className="font-badges text-xs uppercase">business</div>
                                <a href="main:to" className="lead-text strong">hello@w3eco.io</a>
                            </div>
                            <div>
                                Interested in our e-waste management services? Reach out to discuss your specific needs,
                                get pricing, and schedule a free compliance assessment.
                            </div>
                        </div>

                        <div
                            className="border border-dotted border-foreground rounded-sm flex flex-col justify-between min-h-[210px] p-4.5 gap-6">
                            <div className="flex flex-col gap-3 justify-start items-start">
                                <div className="font-badges text-xs uppercase">help & Support</div>
                                <a href="#" className="lead-text strong">support@W3-eco-frienly.com</a>
                            </div>
                            <div>
                                Need help with an existing service or have questions? Our support team is available to
                                assist with tracking, reporting, and service inquiries.
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            <Section>
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6">
                    <div className="flex flex-col gap-[18px]">
                        <div className="font-badges text-[13px] leading-[18.2px] uppercase font-medium">[Corporate Office]
                        </div>
                        <h2 className="text-lg">
                            Suit 73 & 74, <br/> Block D
                            IPAKODO Shopping Complex
                            Ikorodu, <br/> Lagos State
                            Nigeria</h2>
                        <p>Phone: <br/>+234 807-787-5562</p>
                    </div>
                    <div className="text-xl leading-7 lg:max-w-lg flex flex-col gap-4">
                        <p>Monday - Friday: 8:00 AM - 6:00 PM <br/>
                            Saturday: 9:00 AM - 2:00 PM <br/>
                            Sunday: Closed <br/></p>
                        <span>Emergency Services: <br/>
                        24/7 support available for existing clients</span>
                    </div>
                </div>
            </Section>

        </>
    );
};

export default Contact;