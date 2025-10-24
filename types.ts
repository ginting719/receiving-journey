export enum ContentType {
  MindMap = 'mindmap',
  Video = 'video',
  PPT = 'ppt',
  QnA = 'qna',
  Podcast = 'podcast',
  ExternalLink = 'external',
}

export interface QnAItem {
  question: string;
  answer: string;
}

// Represents a single piece of learning material within a larger module.
export interface TutorialMaterial {
  id: string;
  type: ContentType;
  title: string;
  // For MindMap: image URL
  // For Video: YouTube embed URL
  // For PPT: download link
  // For QnA: QnAItem[]
  content: string | QnAItem[]; 
}

// Represents a main training topic, containing multiple materials.
export interface ReceivingModule {
    id: string;
    title: string;
    description: string;
    materials: TutorialMaterial[];
    checklistUrl?: string;
}