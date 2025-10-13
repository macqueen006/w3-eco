import {cn} from "../lib/utils";
import {ArrowLink} from "./ArrowLink.tsx";

// Card Component
interface ResourceCardProps extends CardData {
    className?: string;
}

export function ResourceCard({image, title, description, link, linkText = "learn more", className
}: ResourceCardProps) {
    return (
        <div
            className={cn(
                "flex flex-col rounded-sm bg-surface overflow-hidden will-change-transform [transform-style:preserve-3d] group",
                className
            )}
        >
            {/* Image */}
            <img
                src={image}
                alt={title}
                className="w-full aspect-[16/10] object-cover"
                sizes="(max-width: 1440px) 100vw, 1440px"
            />

            {/* Accent Line */}
            <div className="w-full h-[6px] bg-primary"/>

            {/* Card Body */}
            <div className="flex flex-col gap-12 flex-1 justify-between items-start p-[18px]">
                {/* Card Text */}
                <div className="flex flex-col gap-[6px]">
                    <h3 className="text-xl leading-7 font-semibold">{title}</h3>
                    <p className="text-xl leading-7 text-foreground/80">{description}</p>
                </div>

                {/* Hover Link with Square Button */}
                <ArrowLink to={link} size="md" variant="default" className="text-foreground !rounded-sm">
                    {linkText}
                </ArrowLink>
            </div>
        </div>
    );
}