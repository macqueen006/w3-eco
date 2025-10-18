import {Section} from "../components/Section.tsx";
import Marquee from "react-fast-marquee";
import {getAssetUrl} from "../lib/utils.ts";

function Compliance() {
    return (
        <>
            <Section className="pt-60 pb-36">
                <div className="flex flex-col gap-6">
                    {/* Horizontal Title */}
                    <div className="flex flex-col md:flex-row justify-between items-start lg:items-end gap-6">
                        {/* Title */}
                        <div className="flex flex-col gap-[18px]">
                            <div className="font-badges text-[13px] leading-[18.2px] uppercase font-medium">
                                [CORPORATE SOLUTIONS]
                            </div>
                            <h1 className="text-3xl md:text-6xl lg:text-[60px] leading-tight font-normal">
                                Ensure Compliance. Protect Your Business.
                            </h1>
                        </div>

                        {/* Content */}
                        <div className="max-w-[452px] w-full">
                            <div className="text-xl leading-7">
                                Identify the friction points holding you back and implement scalable solutions that
                                drive compliance, data security, and environmental responsibility throughout your
                                business operations.
                            </div>

                        </div>
                    </div>

                    {/* Hero Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1fr] gap-3 auto-cols-fr">
                        {/* Square Image */}
                        <img
                            className="aspect-square rounded-md object-cover min-h-full"
                            src={getAssetUrl('img/iron.jpg')}
                            alt="iron trash"
                            sizes="(max-width: 1440px) 100vw, 1440px"
                        />

                        {/* Hero Metric Box */}
                        <div
                            className="flex flex-col gap-6 rounded-md bg-foreground text-white justify-center items-start p-6 relative overflow-hidden self-stretch"
                        >
                            {/* Noise Background */}
                            <div
                                className="absolute top-0 left-0 w-full h-full z-[1] pointer-events-none bg-[length:150px_150px] bg-center"
                                style={{
                                    backgroundImage: "url('https://cdn.prod.website-files.com/682d1ea72a8dbd92c55d9018/683505e4f52812f5f0b34529_Noise.png')"
                                }}
                            />

                            {/* Lines - Bottom */}
                            <div className="absolute bottom-0 left-0 right-0">
                                <div className="h-px bg-white/20"></div>
                                <div className="h-px bg-white/10 mt-1"></div>
                            </div>

                            {/* Lines - Top */}
                            <div className="absolute top-0 left-0 right-0">
                                <div className="h-px bg-white/20"></div>
                                <div className="h-px bg-white/10 mt-1"></div>
                            </div>

                            <div
                                className="font-badges text-[13px] leading-[18.2px] uppercase font-medium relative z-10">
                                TRUSTED BY ORGANIZATIONS
                            </div>
                            <div className="text-6xl md:text-7xl font-bold relative z-10">99%</div>
                            <div className="text-xl leading-7 relative z-10">
                                Compliance rate in data destruction for all clients.
                            </div>
                            <img
                                src={getAssetUrl('img/logos/logo.png')}
                                alt="logo"
                                className="relative z-10 size-20"
                            />
                        </div>

                        {/* Portrait Image */}
                        <img
                            className="aspect-[3/4] rounded-md object-cover min-h-full"
                            src={getAssetUrl('img/w-staff.jpg')}
                            alt=""
                            sizes="(max-width: 1350px) 100vw, 1350px"
                        />
                    </div>
                </div>
            </Section>

            <Section>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-[72px] place-items-center auto-cols-fr">
                    <div className="flex flex-col justify-start items-start gap-6">
                        <div className="badge-text">[Applied efficiency]</div>
                        <div className="text-5xl">Transforming Compliance.</div>
                        <div className="lead-text-wrapper">
                            <div className="text-lg">
                                From regulatory compliance, data security requirements, to environmental protection, we
                                bring the expertise and transparency needed to ensure complete regulatory adherence.
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                        <div className="flex flex-none md:flex-col gap-12">
                            <div
                                className="flex gap-3 relative bg-primary rounded-sm overflow-hidden text-center flex-col max-w-[108px] sm:max-w-[156px] px-[6px] pt-[6px] pb-3">
                                <div className="relative rounded-sm overflow-hidden flex flex-col gap-3">
                                    <img
                                        src={getAssetUrl('img/hacking.jpg')}
                                        alt="data security" sizes="(max-width: 1440px) 100vw, 1440px"
                                        className="rounded-sm h-24 w-24 md:w-36 md:h-36"
                                    />
                                    <div className="badge-text">Data<br/>security</div>
                                </div>
                            </div>
                            <div
                                className="flex gap-3 relative bg-primary rounded-sm overflow-hidden text-center flex-col max-w-[108px] sm:max-w-[156px] px-[6px] pt-[6px] pb-3">
                                <div className="relative rounded-sm overflow-hidden flex flex-col gap-3">
                                    <img
                                        src={getAssetUrl('img/environment.jpg')}
                                        alt="environment" sizes="(max-width: 1440px) 100vw, 1440px"
                                        className="rounded-sm h-24 w-24 md:w-36 md:h-36"
                                    />
                                    <div className="badge-text">Environmental<br/>Compliance</div>
                                </div>
                            </div>
                        </div>

                        <div
                            className="flex flex-col md:flex-row px-[48px] md:px-0 justify-start w-full items-center self-stretch">
                            <div
                                className="border-l md:border-l-[0px] md:border-t md:my-[48px] w-full md:w-6 h-6 md:h-auto border-r border-b border-dotted border-foreground rounded-sm self-stretch"></div>
                            <div
                                className="border-l md:border-l-[0px] md:border-t border-dotted border-foreground w-px h-6 md:h-px md:w-6"></div>
                        </div>

                        <div
                            className="flex flex-none flex-col gap-3 rounded-sm bg-primary text-center max-w-[108px] sm:max-w-[156px] p-[6px_6px_12px]">
                            <div
                                className="inline-flex justify-center items-center h-24 w-24 sm:w-36 md:h-36 rounded-sm bg-[#3b3b3333]">
                                <img
                                    src={getAssetUrl('img/certificate.jpg')}
                                    alt="certificate" sizes="(max-width: 1440px) 100vw, 1440px"
                                    className="rounded-sm h-24 w-24 md:w-36 md:h-36"
                                />
                            </div>
                            <div className="font-badges text-xs uppercase">certified <br/> Recycler</div>
                        </div>

                    </div>
                </div>
            </Section>

            <Section>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-[72px] place-items-center auto-cols-fr">

                    <div className="flex flex-col justify-between h-full py-1.5 gap-[72px] justify-self-stretch">

                        <div className="flex flex-col justify-start items-start gap-6">
                            <div className="badge-text">[our purpose]</div>
                            <div className="text-5xl">Architecting Solutions that Ensure Full Compliance.</div>
                            <div className="max-w-[571px]">
                                <div className="text-2xl">We design comprehensive compliance frameworks and systems that
                                    ensure adherence to all federal and state e-waste regulations without disrupting
                                    operations. From secure data destruction to environmental protection, we help
                                    organizations meet all regulatory requirements intelligently and at scale.
                                </div>
                            </div>
                        </div>

                    </div>

                    <div
                        className="relative rounded-sm flex justify-center items-center w-full h-full overflow-hidden col-start-1 row-start-1">
                        <img
                            src={getAssetUrl('img/dashboard.png')}
                            alt="Dashboard"
                            className="absolute inset-0 w-full h-full object-cover rounded-sm"
                            sizes="(max-width: 1350px) 100vw, 1350px"
                        />
                    </div>

                </div>
            </Section>

            <Section>
                <div className="flex flex-col relative">

                    <div className="aspect-[2.39] rounded-md w-full h-auto relative overflow-hidden">
                        <img
                            src={getAssetUrl('img/w3-members.jpg')}
                            alt="" sizes="(max-width: 1440px) 100vw, 1440px"
                            className="w-full max-w-none h-[130%] absolute top-[-15%]"/>
                    </div>

                    <div className="z-10 flex justify-center items-center gap-1.5 -mt-12 mx-12 relative">
                        <div
                            className="hidden sm:flex gap-3 relative bg-primary rounded-sm overflow-hidden text-center flex-col max-w-[108px] sm:max-w-[156px] px-[6px] pt-[6px] pb-3">
                            <div className="relative rounded-sm overflow-hidden flex flex-col gap-3">
                                <img alt=""
                                     sizes="(max-width: 1440px) 100vw, 1440px"
                                     className="rounded-sm h-24 w-24 md:w-36 md:h-36"
                                     src={getAssetUrl('img/lightbulb.jpg')}
                                />
                                <div className="badge-text">optimized<br/>energy</div>
                            </div>
                        </div>

                        <div
                            className="hidden sm:flex flex-col text-center flex-1 py-1.5 border-b border-dotted border-[var(--_colors---ui--dark)]">
                            <div className="badge-text">REGULATORY COMPLIANCE GUARANTEED</div>
                        </div>

                        <div
                            className="hidden sm:flex flex-none flex-col gap-3 rounded-sm bg-primary text-center max-w-[108px] sm:max-w-[156px] p-[6px_6px_12px]">
                            <div
                                className="inline-flex justify-center items-center h-24 w-24 sm:w-36 md:h-36 rounded-sm bg-[#3b3b3333]">
                                <img alt="" className=""
                                     src="https://cdn.prod.website-files.com/682d1ea72a8dbd92c55d9018/682fc03eace8ea74c45a75f7_icon-my-location.svg"/>
                            </div>
                            <div className="font-badges text-xs uppercase">accelerated fulfillment</div>
                        </div>

                    </div>

                </div>
            </Section>

            <Section>
                <div
                    className="text-center flex flex-col items-center justify-start pb-16 gap-16 w-full overflow-hidden">
                    <div className="font-badges">Certified E-Waste Recycler Serving Organizations Across Nigeria</div>
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
        </>
    );
}

export default Compliance;