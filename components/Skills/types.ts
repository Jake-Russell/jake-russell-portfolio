import { StaticImageData } from "next/image";

type Skill = {
  name: string;
  image: StaticImageData;
};

export type SkillCategory = {
  title: string;
  skills: Skill[];
};
