type Skill = {
  name: string;
  image: string;
};

export type SkillCategory = {
  title: string;
  skills: Skill[];
};
