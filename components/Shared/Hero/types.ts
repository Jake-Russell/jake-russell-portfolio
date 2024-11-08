import { StaticImageData } from "next/image";

export type HeroProps = {
    imageSrc: string | StaticImageData;
    title: string;
    subtitle?: string;
}