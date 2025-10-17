import {Section} from "../components/Section.tsx";
import Marquee from "react-fast-marquee";
import {InfoCardGrid} from "../components/InfoCard.tsx";
import {getAssetUrl} from "../lib/utils.ts";
import {HardDrive} from "lucide-react";

const Services = () => {
    return (
        <>
            <Section>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-[72px] auto-cols-fr place-items-center">
                    {/* Main content section */}
                    <div
                        className="sm:col-start-2 sm:col-end-3 sm:row-start-1 row-end-2 justify-self-stretch opacity-100">
                        <div className="flex flex-col gap-16 justify-between h-full pt-1.5 pb-1.5">
                            <div className="title">
                                <div className="badge-text">[W3 eco friendly solutions]</div>
                                <h1 className="text-4xl lg:5xl">Secure Data Destruction. <br/> Complete Asset Recovery.
                                </h1>
                            </div>

                            <div className="flex flex-col gap-9 justify-start items-start">
                                <h2 className="text-2xl lg: 3xl">
                                    Replace reactive e-waste disposal with data-led asset disposition to maximize
                                    recovery value where it's needed—fast.
                                </h2>

                                <div
                                    className="flex flex-col sm:flex-row gap-12 border-t border-dotted border-background justify-start items-start sm:items-center self-stretch max-w-full pt-6 overflow-hidden">
                                    <div className="badge-text logo-addendum-title shrink-0">Trusted by<br/>100+ global
                                        companies
                                    </div>

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
                            </div>
                        </div>
                    </div>

                    {/* Video Section */}
                    <div className="w-full aspect-square rounded-sm flex justify-center items-center relative overflow-hidden">
                        <div
                            className="absolute w-[110%] h-[120%] top-[-10%] left-[-5%]">
                            <div className="max-h-[623px] min-h-full overflow-hidden relative rounded-sm"><img
                                className="rounded-sm h-full w-full object-cover" alt="data destruction"
                                src={getAssetUrl('img/electronic-board.jpg')}
                            />
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            <Section>
                <div className="flex flex-col gap-[72px]">
                    <div className="flex flex-col md:flex-row gap-6 justify-between items-start md:items-end">
                        <div className="title">
                            <div className="badge-text">[our process]</div>
                            <div className="text-4xl sm:text-5xl">Complete ITAD Solutions.</div>
                        </div>
                        <div className="text-xl">
                            Whether it's decommissioning data centers, modernizing IT infrastructure, or managing electronics recycling, we bring the strategy and expertise needed to handle operations across all sectors.
                        </div>
                    </div>
                    <div
                        className="rounded-large bg-surface flex justify-center items-center p-[18px_48px] md:p-[72px_48px]">
                        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                            <div className="flex flex-none md:flex-col gap-12">
                                <div
                                    className="flex gap-3 relative bg-primary rounded-sm overflow-hidden text-center flex-col max-w-[108px] sm:max-w-[156px] px-[6px] pt-[6px] pb-3">
                                    <div className="relative rounded-sm overflow-hidden flex flex-col gap-3">
                                        <img
                                            src="https://cdn.prod.website-files.com/682d1ea72a8dbd92c55d9018/682fc4783249441e9db3f46a_landscape-02.webp"
                                            alt="" sizes="(max-width: 1440px) 100vw, 1440px"
                                            className="rounded-sm h-24 w-24 md:w-36 md:h-36"
                                        />
                                        <div className="badge-text">DATA CENTER <br/> SERVICES</div>
                                    </div>
                                </div>
                                <div
                                    className="flex gap-3 relative bg-primary rounded-sm overflow-hidden text-center flex-col max-w-[108px] sm:max-w-[156px] px-[6px] pt-[6px] pb-3">
                                    <div className="relative rounded-sm overflow-hidden flex flex-col gap-3">
                                        <img
                                            src="https://cdn.prod.website-files.com/682d1ea72a8dbd92c55d9018/682fc479f6d7cf36b03f9d13_landscape-01.webp"
                                            alt="" sizes="(max-width: 1440px) 100vw, 1440px"
                                            className="rounded-sm h-24 w-24 md:w-36 md:h-36"
                                        />
                                        <div className="badge-text">ON-SITE DATA <br/> DESTRUCTION</div>
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
                                    <img alt=""
                                         className=""
                                         src="https://cdn.prod.website-files.com/682d1ea72a8dbd92c55d9018/682fc03ed96832163a6db842_icon-radar.svg"/>
                                </div>
                                <div className="font-badges text-xs uppercase">ELECTRONICS RECYCLING</div>
                            </div>

                            <div
                                className="flex flex-col-reverse md:flex-row-reverse px-[48px] md:px-0 justify-start w-full items-center self-stretch">
                                <div
                                    className="border-l border-r md:border-r-[0px]  md:border-b md:my-[48px] w-full md:w-6 h-6 md:h-auto  border-t border-dotted border-foreground rounded-sm self-stretch"></div>
                                <div
                                    className="border-l md:border-l-[0px] md:border-t border-dotted border-foreground w-px h-6 md:h-px md:w-6"></div>
                            </div>

                            <div className="flex flex-none md:flex-col gap-12">
                                <div
                                    className="flex gap-3 relative bg-primary rounded-sm overflow-hidden text-center flex-col max-w-[108px] sm:max-w-[156px] px-[6px] pt-[6px] pb-3">
                                    <div className="relative rounded-sm overflow-hidden flex flex-col gap-3">
                                        <img
                                            src="https://cdn.prod.website-files.com/682d1ea72a8dbd92c55d9018/682fc478584218f305141cad_landscape-08.webp"
                                            alt="" sizes="(max-width: 1440px) 100vw, 1440px"
                                            className="rounded-sm h-24 w-24 md:w-36 md:h-36"
                                        />
                                        <div className="badge-text">PV/SOLAR MANAGEMENT</div>
                                    </div>
                                </div>

                                <div
                                    className="flex gap-3 relative bg-primary rounded-sm overflow-hidden text-center flex-col max-w-[108px] sm:max-w-[156px] px-[6px] pt-[6px] pb-3">
                                    <div className="relative rounded-sm overflow-hidden flex flex-col gap-3">
                                        <img
                                            src="https://cdn.prod.website-files.com/682d1ea72a8dbd92c55d9018/682fc4787083792398c6daf4_landscape-03.webp"
                                            alt="" sizes="(max-width: 1440px) 100vw, 1440px"
                                            className="rounded-sm h-24 w-24 md:w-36 md:h-36"
                                        />
                                        <div className="badge-text">ITAD SERVICES</div>
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
                                className="flex flex-none gap-3 relative bg-primary rounded-sm overflow-hidden text-center flex-col max-w-[108px] sm:max-w-[156px] px-[6px] pt-[6px] pb-3">
                                <div
                                    className="flex gap-3 relative bg-primary rounded-sm overflow-hidden text-center flex-col max-w-[108px] sm:max-w-[156px] px-[6px] pt-[6px] pb-3">
                                    <div className="relative rounded-sm overflow-hidden flex flex-col gap-3">
                                        <img
                                            src="https://cdn.prod.website-files.com/682d1ea72a8dbd92c55d9018/682fc478438e97278eb7b5f2_landscape-07.webp"
                                            alt="" sizes="(max-width: 1440px) 100vw, 1440px"
                                            className="rounded-sm h-24 w-24 md:w-36 md:h-36"
                                        />
                                        <div className="badge-text">SECURE LOGISTICS</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            <Section>
                <div className="flex flex-col gap-24">
                    <div className="max-w-[928px] mx-auto text-center gap-6 justify-start">
                        <h3>
                            Partner with W3 Eco-Friendly to solve your most complex operational challenges
                        </h3>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 auto-cols-fr">
                        {/* Card 1 */}
                        <div
                            className="flex flex-col gap-6 bg-ui-light-2 text-center justify-start items-center pt-9 pb-12 px-5 bg-surface rounded-sm opacity-100 transform-none">
                            <div
                                className="boxed-icon rounded bg-foreground flex-none flex justify-center items-center w-15 h-15">
                                <HardDrive className="size-9 stroke-1 text-white" />
                            </div>
                            <div className="icon-card-content flex flex-col gap-3">
                                <div className="text-base leading-[22.4px]">Guaranteed destruction of sensitive data on virtually any data-bearing device with full chain of custody and real-time tracking.
                                </div>
                            </div>
                        </div>
                        {/* Card 2 */}
                        <div
                            className="flex flex-col gap-6 bg-ui-light-2 text-center justify-start items-center pt-9 pb-12 px-5 bg-surface rounded-sm opacity-100 transform-none">
                            <div
                                className="boxed-icon rounded bg-foreground flex-none flex justify-center items-center w-15 h-15">
                                <img
                                    src="https://cdn.prod.website-files.com/682d1ea72a8dbd92c55d9018/682fc03ed896731dd0bad49c_icon-wind-turbine-light.svg"
                                    alt=""
                                    className="small-boxed-icon max-h-9"
                                />
                            </div>
                            <div className="icon-card-content flex flex-col gap-3">
                                <div className="text-base leading-[22.4px]">
                                    Secure and responsible reuse or recycling of electronic assets to maximize value recovery and ensure 100% compliance.
                                </div>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div
                            className="flex flex-col gap-6 bg-ui-light-2 text-center justify-start items-center pt-9 pb-12 px-5 bg-surface rounded-sm opacity-100 transform-none">
                            <div
                                className="boxed-icon rounded bg-foreground flex-none flex justify-center items-center w-15 h-15">
                                <img
                                    src="https://cdn.prod.website-files.com/682d1ea72a8dbd92c55d9018/682fc03e24b880d1c5c9df1c_icon-module-light.svg"
                                    alt=""
                                    className="small-boxed-icon max-h-9"
                                />
                            </div>
                            <div className="icon-card-content flex flex-col gap-3">
                                <div className="text-base leading-[22.4px]">
                                    Comprehensive e-waste recycling to optimize material recovery and protect the environment across multiple sectors
                                </div>
                            </div>
                        </div>

                        {/* Card 4 */}
                        <div
                            className="flex flex-col gap-6 bg-ui-light-2 text-center justify-start items-center pt-9 pb-12 px-5 bg-surface rounded-sm opacity-100 transform-none">
                            <div
                                className="boxed-icon rounded bg-foreground flex-none flex justify-center items-center w-15 h-15">
                                <img
                                    src="https://cdn.prod.website-files.com/682d1ea72a8dbd92c55d9018/682fc03ef9ba6fa7dc974609_icon-gps-antenna-light.svg"
                                    alt=""
                                    className="small-boxed-icon max-h-9"
                                />
                            </div>
                            <div className="icon-card-content flex flex-col gap-3">
                                <div className="text-base leading-[22.4px]">
                                    Real-Time Tracking
                                    "Monitor your assets through our W3Tech™ portal with complete transparency, secure diagnostics, and compliance analytics.
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </Section>

            <Section>
                <div className="flex flex-col gap-24">
                    <div className="mt-9">
                        <div className="badge-text">[our purpose]</div>
                        <div className="text-5xl md:text-6xl">Secure Operations. Maximize Recovery.</div>
                    </div>

                    <InfoCardGrid
                        cards={[
                            {
                                id: "custom-1",
                                image: "img/network.jpg",
                                title: "Data Destruction Services",
                                description: "Complete data sanitization and destruction solutions.",
                                features: [
                                    "On-site mobile data destruction with witnessed shredding",
                                    "Off-site destruction at certified facilities with GPS tracking",
                                    "Certificate of destruction and detailed audit reports",
                                    "Supports all data-bearing devices (HDDs, SSDs, phones, tablets)",
                                    "NIST-compliant data sanitization methods"
                                ]
                            },
                            {
                                id: "custom-2",
                                image: "img/processor.jpg",
                                title: "IT Asset Disposition (ITAD)",
                                description: "End-to-end electronic asset management and recovery.",
                                features: [
                                    "99% data destruction guarantee on all devices",
                                    "Maximum asset value recovery through remarketing",
                                    "Full regulatory compliance and environmental protection",
                                    "Serialized tracking via W3Tech™ portal",
                                    "Flexible pickup and logistics nationwide",
                                ]
                            }
                        ]}
                    />
                </div>
            </Section>
        </>
    );
};

export default Services;