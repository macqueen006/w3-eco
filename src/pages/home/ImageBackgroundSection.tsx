import {ArrowLink} from "../../components/ArrowLink.tsx";

interface ImageBackgroundSectionProps {
    badge?: string;
    title: string;
    linkText?: string;
    linkHref?: string;
    backgroundImage?: string;
    backgroundVideo?: {
        mp4: string;
        webm?: string;
        poster?: string;
    };
}

function ImageBackgroundSection({badge = "[our purpose]", title = "We Build Cleaner Solutions for Resilient Economic Environments.", linkText = "More about us", linkHref = "/about", backgroundImage = "https://cdn.prod.website-files.com/682d1ea72a8dbd92c55d9018/682fc478b3f8c853c905c0c0_landscape-15.webp", backgroundVideo
}: ImageBackgroundSectionProps) {
    return (
        <section
            className="py-[72px] aspect-[2/1] rounded-md bg-secondary text-white flex justify-center items-end relative overflow-clip">
            {/* Container */}
            <div className="z-[3] max-w-7xl w-full mx-auto px-6 relative">
                <div className="flex flex-col gap-6 will-change-transform [transform-style:preserve-3d]">
                    <div className="font-badges text-xs uppercase">{badge}</div>
                    <h2 className="text-3xl md:text-4xl font-bold max-w-4xl leading-tight">
                        {title}
                    </h2>
                    <ArrowLink to={linkHref} size="md" variant="default" className="text-white">
                        {linkText}
                    </ArrowLink>
                </div>
            </div>

            {/* Background - Image or Video */}
            {backgroundVideo ? (
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    poster={backgroundVideo.poster}
                    className="absolute w-full max-w-none h-screen top-[-15vh] left-0 object-cover z-0"
                >
                    <source src={backgroundVideo.mp4} type="video/mp4"/>
                    {backgroundVideo.webm && (
                        <source src={backgroundVideo.webm} type="video/webm"/>
                    )}
                </video>
            ) : (
                <img
                    className="absolute w-full max-w-none h-screen top-[-15vh] left-0 object-cover z-0"
                    src={backgroundImage}
                    alt=""
                    sizes="(max-width: 1440px) 100vw, 1440px"
                />
            )}

            {/* Blur Scrim Overlay */}
            <div
                className="absolute bottom-0 w-full h-[70%] z-[1] backdrop-blur-[3px]"
            />
        </section>
    );
}


/*
function ExampleUsage() {
    return (
        <div className="space-y-8">
            {/!* With Image Background *!/}
            <ImageBackgroundSection
                badge="[our purpose]"
                title="We Build Cleaner Solutions for Resilient Economic Environments."
                linkText="More about us"
                linkHref="/about"
                backgroundImage="https://cdn.prod.website-files.com/682d1ea72a8dbd92c55d9018/682fc478b3f8c853c905c0c0_landscape-15.webp"
            />

            {/!* With Video Background *!/}
            <ImageBackgroundSection
                badge="[innovation]"
                title="Transforming Industries Through Technology"
                linkText="Explore our work"
                linkHref="/projects"
                backgroundVideo={{
                    mp4: "https://example.com/video.mp4",
                    webm: "https://example.com/video.webm",
                    poster: "https://example.com/poster.jpg"
                }}
            />
        </div>
    );
}
*/

export default ImageBackgroundSection;