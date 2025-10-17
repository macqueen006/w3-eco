import {useState} from "react";
import {Link} from "react-router";
import {TABS_DATA} from "../../constants/tabs.ts";
import {Button} from "../../components/ui/button.tsx";


export function ServicesTabsSection() {
    const [activeTab, setActiveTab] = useState(3);

    return (
        <section className="py-28 bg-secondary text-white relative">
            {/* Noise Background */}
            <div
                className="absolute top-0 left-0 w-full h-full z-[1] pointer-events-none bg-[length:150px_150px] bg-center"
                style={{
                    backgroundImage: "url('https://cdn.prod.website-files.com/682d1ea72a8dbd92c55d9018/683505e4f52812f5f0b34529_Noise.png')"
                }}
            />

            <div className="w-full px-6 relative z-10">
                <div className="flex flex-col gap-24">
                    {/* Title Section */}
                    <div className="flex flex-col gap-[18px]">
                        <div className="font-badges text-xs uppercase">[Our Services]</div>
                        <h2 className="text-5xl font-medium">We Lead With Better Systems.</h2>
                    </div>

                    {/* Grid with Tabs and Video */}
                    <div className="grid lg:grid-cols-2 gap-[72px] place-items-start lg:items-start auto-cols-fr">
                        {/* Tabs Section */}
                        <div className="w-full">
                            {/* Tabs Menu */}
                            <div className="flex flex-col border-t border-dotted border-border/30 mb-24">
                                {TABS_DATA.map((tab, index) => (
                                    <button
                                        key={tab.id}
                                        onClick={() => setActiveTab(index)}
                                        className={`text-left py-[18px] border-b border-dotted transition-colors cursor-pointer inline-block relative ${
                                            activeTab === index
                                                ? "text-surface border-border"
                                                : "text-surface/30 border-border/30"
                                        } text-3xl lg:text-4xl leading-tight `}
                                    >
                                        {tab.title}
                                    </button>
                                ))}
                            </div>

                            {/* Tabs Content */}
                            <div className="relative">
                                {TABS_DATA.map((tab, index) => (
                                    <div
                                        key={tab.id}
                                        className={`transition-opacity duration-300 ${
                                            activeTab === index
                                                ? "opacity-100 block"
                                                : "opacity-0 hidden"
                                        }`}
                                    >
                                        <div className="flex flex-col gap-6">
                                            <p className="text-lg leading-relaxed text-surface">{tab.content}</p>
                                            <Button asChild variant="default" className="w-fit h-[60px] px-12">
                                                <Link to={tab.link} className="font-badges text-sm uppercase">More information</Link>
                                            </Button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Video Section */}
                        <div className="w-full aspect-square rounded-sm flex justify-center items-center relative overflow-hidden">
                            {/* Background Video */}
                            <div className="absolute w-[110%] h-[120%] top-[-10%] left-[-5%] will-change-transform [transform-style:preserve-3d]">
                                <video
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="w-full h-full object-cover"
                                    poster="img/processor-poster.jpg"
                                >
                                    <source
                                        src="videos/processor.webm"
                                        type="video/mp4"
                                    />
                                    <source
                                        src="videos/processor.mp4"
                                        type="video/webm"
                                    />
                                </video>
                            </div>

                            {/* Play Button Overlay */}
                          {/*  <a
                                href="https://www.youtube.com/watch?v=u7zm19YgQBA&t=141s"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="absolute bottom-6 flex items-center justify-center gap-3 bg-surface/10 backdrop-blur-[20px] text-foreground rounded-full px-6 py-3 transition-transform hover:scale-105"
                            >
                                <img
                                    src="https://cdn.prod.website-files.com/682d1ea72a8dbd92c55d9018/682fc158e5fa46ffcccc497d_icon-interface-play-video.svg"
                                    loading="lazy"
                                    alt="play"
                                    className="w-6 h-6"
                                />
                                <span className="font-badges text-xs uppercase text-white">play Video 3:14</span>
                            </a>*/}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
