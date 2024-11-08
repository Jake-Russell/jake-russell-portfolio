import { StaticImageData } from "next/image";

export type ProjectItemProps = {
  title: string;
  subtitle?: string;
  backgroundImage: StaticImageData;
  projectUrl: string;
};
