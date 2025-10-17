// import {ArrowRight} from "lucide-react";
import {Section} from "../../components/Section.tsx";
import Marquee from "react-fast-marquee";
import {getAssetUrl} from "../../lib/utils.ts";
import {InfoCardGrid} from "../../components/InfoCard.tsx";

const About = () => {
    return (
        <>
            <section
                className="py-[72px] p-[6px] aspect-[2] h-screen w-screen rounded-sm bg-secondary text-white flex items-end justify-center relative overflow-clip">
                <div className="relative z-50 mx-auto max-w-[1366px] px-6 w-full min-h-full">
                    <div className="text-center flex flex-col items-center justify-start gap-6 mx-auto max-w-[928px]">
                        <div className="font-badges text-xs uppercase text-white">[about us]</div>
                        <h2 className="text-[32px] md:text-[48px]">We Build Cleaner Solutions for Resilient Economic
                            Environments.</h2>
                    </div>
                </div>
                <div
                    className="background opacity-70 z-10 absolute inset-0 min-h-screen min-w-screen overflow-hidden pointer-events-none">
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        poster="https://cdn.prod.website-files.com/682d1ea72a8dbd92c55d9018%2F683e44afaaa0f6c63ab0d1df_856142-hd_1920_1080_30fps-poster-00001.jpg"
                        className="absolute inset-0 w-full min-h-full m-auto object-cover bg-center bg-cover z-10"
                        style={{
                            backgroundImage: `url("https://cdn.prod.website-files.com/682d1ea72a8dbd92c55d9018%2F683e44afaaa0f6c63ab0d1df_856142-hd_1920_1080_30fps-poster-00001.jpg")`
                        }}
                    >
                        <source
                            src="https://cdn.prod.website-files.com/682d1ea72a8dbd92c55d9018%2F683e44afaaa0f6c63ab0d1df_856142-hd_1920_1080_30fps-transcode.mp4"
                            type="video/mp4"/>
                        <source
                            src="https://cdn.prod.website-files.com/682d1ea72a8dbd92c55d9018%2F683e44afaaa0f6c63ab0d1df_856142-hd_1920_1080_30fps-transcode.webm"
                            type="video/webm"/>
                    </video>
                </div>
                <div
                    className="absolute bottom-0 w-full h-[60%] z-20 backdrop-blur-[12px] [-webkit-mask-image:linear-gradient(to_top,#000_50%,transparent_100%)] [mask-image:linear-gradient(to_top,#000_50%,transparent_100%)]"/>
            </section>
            <section id="about-us" className="py-[72px] will-change-transform [transform-style:preserve-3d]">
                <div className="relative z-[3] max-w-[1366px] w-full mx-auto px-6">
                    <div
                        className="grid grid-cols-1 lg:grid-cols-2 gap-[72px] border-t border-dotted border-border/50 pt-9">
                        {/* Title */}
                        <div className="flex flex-col gap-[18px]">
                            <div className="font-badges text-[13px] leading-[18.2px] uppercase font-medium">
                                [our purpose]
                            </div>
                            <h2 className="text-4xl md:text-5xl lg:text-[51px] leading-tight lg:leading-[58.65px] -tracking-[0.51px] font-normal">
                                How W3 Eco-Friendly Helps.
                            </h2>
                        </div>

                        {/* Lead Text */}
                        <div className="text-xl leading-7">
                            We design comprehensive e-waste management solutions that protect organizations, people, and
                            the environment without disrupting operations. From secure data destruction to complete IT
                            asset disposition and material recovery, our services help organizations manage electronic
                            waste responsibly, compliantly, and at scale.
                            Whether you're decommissioning data centers or disposing of consumer electronics, we bring
                            the technical expertise and regulatory knowledge to turn complex e-waste challenges into
                            compliant, profitable solutions.
                        </div>
                    </div>
                </div>
            </section>

            <Section>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-[72px] place-items-center">
                    <div
                        className="w-full aspect-square rounded-sm flex justify-center items-center relative overflow-hidden">
                        {/* Background Video */}
                        <div
                            className="absolute w-[110%] h-[120%] top-[-10%] left-[-5%] will-change-transform [transform-style:preserve-3d]">
                            <video
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="w-full h-full object-cover"
                                poster={getAssetUrl('img/electronic-waste-facility.jpg')}
                            >
                                <source
                                    src={getAssetUrl('videos/electronic-facility.mp4')}
                                    type="video/mp4"
                                />
                                <source
                                    src={getAssetUrl('videos/electronic-facility.webm')}
                                    type="video/webm"
                                />
                            </video>
                        </div>

                    </div>

                    <div className="flex flex-col gap-[24px] md:gap-[36px] items-start w-full">
                        <div className="title">
                            <div className="font-badges text-xs uppercase">[our purpose]</div>
                            <h2>Delivering Secure Data Destruction & Compliance.</h2>
                            <p className="text-xl leading-7">We ensure 99% data destruction on virtually any
                                data-bearing device through certified
                                processes and full chain-of-custody documentation. Our services guarantee compliance
                                with federal and state regulations while maximizing asset recovery value.
                                From hard drives and servers to mobile devices and specialty equipment, we provide
                                on-site and off-site destruction methods with complete transparency through our W3Tech™
                                portal, giving you real-time visibility into every step of the process.</p>
                        </div>
                    </div>
                </div>
            </Section>
            <Section>
                <div
                    className="text-center flex flex-col items-center justify-start pb-16 gap-16 w-full overflow-hidden">
                    <div className="font-badges">Helping 100+ leading companies get better results</div>
                    <div className="marquee">
                        <Marquee
                            speed={50}
                            gradient={true}
                            gradientColor="white"
                            gradientWidth={100}
                        >
                            <div className="flex gap-16 items-center h-[48px] last:pr-16">
                                <img
                                    src="https://cdn.prod.website-files.com/682d1ea72a8dbd92c55d9018/68353460e39a8797e6f64f4e_marquee-logo-01.svg"
                                    alt="" className="marquee-logo"/>
                                <img
                                    src="https://cdn.prod.website-files.com/682d1ea72a8dbd92c55d9018/683534603fd5947ee8bc5fb1_marquee-logo-02.svg"
                                    alt="" className="marquee-logo"/>
                                <img
                                    src="https://cdn.prod.website-files.com/682d1ea72a8dbd92c55d9018/68353460930016f8c1865842_marquee-logo-03.svg"
                                    alt="" className="marquee-logo"/>
                                <img
                                    src="https://cdn.prod.website-files.com/682d1ea72a8dbd92c55d9018/68353460ec4b1d80f6269124_marquee-logo-04.svg"
                                    alt="" className="marquee-logo"/>
                                <img
                                    src="https://cdn.prod.website-files.com/682d1ea72a8dbd92c55d9018/68353460ec4b1d80f6269120_marquee-logo-05.svg"
                                    alt="" className="marquee-logo"/>
                                <img
                                    src="https://cdn.prod.website-files.com/682d1ea72a8dbd92c55d9018/683534603fb873b0cc291864_marquee-logo-06.svg"
                                    alt="" className="marquee-logo"/>
                            </div>
                        </Marquee>
                    </div>
                </div>
            </Section>
            <Section className="pt-0">
                <div className="flex flex-col gap-24">
                    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6">
                        <div className="flex flex-col gap-[18px]">
                            <div className="font-badges text-[13px] leading-[18.2px] uppercase font-medium">[Our
                                mission]
                            </div>
                            <h2 className="text-3xl leading-[58.65px] -tracking-[0.51px] font-normal">Revolutionizing
                                E-Waste Management in Nigeria</h2>
                            <p className="leading-7 text-lg">
                                At W3 Eco-Friendly Ltd, our mission is to revolutionize e-waste management in Nigeria by
                                promoting sustainable practices, fostering a circular economy, and protecting the
                                environment through innovative recycling and material recovery solutions.
                            </p>
                        </div>
                        <div className="flex flex-col gap-[18px] lg:max-w-lg">
                            <div className="font-badges text-[13px] leading-[18.2px] uppercase font-medium">[Our
                                Vision]
                            </div>
                            <h2 className="text-3xl leading-[58.65px] -tracking-[0.51px] font-normal">
                                Creating a Cleaner, Greener Nigeria
                            </h2>
                            <p className="text-xl leading-7">
                                To be the leading force in creating a cleaner, greener Nigeria where electronic waste is
                                managed responsibly, valuable resources are recovered, and communities thrive in a
                                sustainable environment.
                            </p>
                        </div>
                    </div>
                </div>
            </Section>

            <section id="about-us" className="py-[72px] bg-surface">
                <div className="relative z-[3] max-w-[1366px] w-full mx-auto px-6">
                    <div
                        className="grid grid-cols-1 lg:grid-cols-2 gap-[72px] border-t border-dotted border-border/50 pt-9">
                        {/* Title */}
                        <div className="flex flex-col gap-[18px] relative">
                            <div className="font-badges text-[13px] leading-[18.2px] uppercase font-medium">
                                [Our Technology Platforms]
                            </div>
                            <h2 className="text-lg md:text-2xl leading-tight lg:leading-7 -tracking-[0.51px] font-normal">
                                Green Surveillance and Intelligence platform providing real-time transparency into
                                downstream recycling chain and online electronics & IT asset disposition. Track your
                                materials through every stage with complete visibility and traceability
                            </h2>
                            <img src={getAssetUrl('img/logos/logo.png')} className="absolute size-16 -top-8 right-0"
                                 alt="logo"/>
                        </div>

                        {/* Lead Text */}
                        <div className="relative flex-1 min-h-[200px]">
                            <div className="relative w-full h-full overflow-hidden rounded-sm">
                                <img
                                    alt="Custom Solution 2"
                                    src={getAssetUrl('img/portal.png')}
                                    className="absolute inset-0 w-full h-full object-cover object-top-left"
                                    sizes="(max-width: 1440px) 100vw, 1440px"
                                />
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <Section>
                <div className="flex flex-col gap-8">
                    <div className="mt-9">
                        <div className="badge-text">[our clients]</div>
                        <div className="text-5xl md:text-6xl">Who We Work With</div>
                    </div>

                    <InfoCardGrid
                        cards={[
                            {
                                id: "industries-1",
                                description: "W3 Eco-Friendly services help agencies, state and local government, OEMs, and SMEs ensure compliance with data security, privacy, circular economy, and environmental regulations.",
                                features: [
                                    "Aerospace",
                                    "Automotive",
                                    "Aviation",
                                    "Banking",
                                    "Computers",
                                    "Defense",
                                    "Education",
                                    "Electronics",
                                    "Energy",
                                    "Entertainment",
                                    "Environmental Services",
                                    "Financial Services",
                                ]
                            },
                            {
                                id: "industries-2",
                                description: "W3 Eco-Friendly serves various industries across the entire Federal Republic of Nigeria, with excellence and compliance in mind.",
                                features: [
                                    "Government",
                                    "Healthcare",
                                    "Hospitality",
                                    "Insurance",
                                    "Manufacturing",
                                    "Media",
                                    "Pharmaceutical",
                                    "Retail",
                                    "Sports",
                                    "Technology",
                                    "Telecommunications",
                                    "Transportation",
                                ]
                            }
                        ]}
                    />
                </div>
            </Section>
        </>
    );
};

export default About;