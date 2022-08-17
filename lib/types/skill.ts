export type SkillType = {
  id: string,
  code: string,
  label: string,
  level: string,
  description: string,
  pageTitle: string,
  pageDescription: string,
  pageImagePreview: string
  difficulty: 1 | 2 | 3 | 4,
  stydyTime: number,
  links: LinkType[],
  specializations: string[],
};

export type SkillStateTypes = {
  skill: SkillType,
  currentLink: {
    link: LinkType | {},
  },
  loading: boolean,
  error: string,
};

export type LinkType = {
  id: string,
  url: string,
  label: string,
  description: string,
  type: string,
  checked: boolean,
  is_free: boolean,
  time: number,
  hidden: boolean,
};
