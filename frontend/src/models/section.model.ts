export interface Subsection {
    subtitle: string;
    image: string;
  }
  
  export interface Section {
    title: string;
    description?: string;
    image?: string;
    subsections?: Subsection[];
  }
  