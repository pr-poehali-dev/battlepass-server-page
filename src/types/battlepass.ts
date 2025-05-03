
export type TopPlayerType = {
  id: number;
  name: string;
  avatar: string;
  level: number;
  experience: number;
}

export type MissionType = {
  id: number;
  title: string;
  description: string;
  reward: number;
  progress: number;
  total: number;
  completed: boolean;
}

export type SeasonDataType = {
  name: string;
  endDate: string;
  currentLevel: number;
  maxLevel: number;
  experience: number;
  nextLevelExperience: number;
  stars: number;
  hasVipPass: boolean;
}
