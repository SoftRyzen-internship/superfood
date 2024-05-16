export interface Description {
  children: {
    text: string;
  }[];
}

export interface PolicyContent {
  _id: string;
  title: string;
  description: Description[];
}

export interface PolicyContentProps {
  content: PolicyContent | null;
}
