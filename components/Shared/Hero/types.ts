import { StaticImageData } from "next/image";

export type HeroProps = {
    imageSrc: string | StaticImageData;
    title: string;
    altText: string;
    subtitle?: string;
}