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
                            <div className="lead-text text-3xl max-w-[571px]">We help businesses scale sustainable operations through strategy,
                                technology, and deep industry expertise.
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
                    <div className="text-2xl max-w-[333px]">Reach out to our team and we’ll respond
                        ASAP.
                    </div>
                    <div className="max-w-[690px] flex-1 grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div
                            className="border border-dotted border-foreground rounded-sm flex flex-col justify-between min-h-[210px] p-4.5 gap-6">
                            <div className="flex flex-col gap-3 justify-start items-start">
                                <div className="font-badges text-xs uppercase">new business</div>
                                <a href="#" className="lead-text strong">hello@W3tech.io</a>
                            </div>
                            <div>Interested in Lifecycle for your business? Reach out to discuss pricing and
                                solutions.
                            </div>
                        </div>

                        <div
                            className="border border-dotted border-foreground rounded-sm flex flex-col justify-between min-h-[210px] p-4.5 gap-6">
                            <div className="flex flex-col gap-3 justify-start items-start">
                                <div className="font-badges text-xs uppercase">help & Support</div>
                                <a href="#" className="lead-text strong">support@W3tech.io</a>
                            </div>
                            <div>Need help? Our support team is available 24/7 to assist with any issues.</div>
                        </div>
                    </div>
                </div>
            </Section>

        </>
    );
};

export default Contact;