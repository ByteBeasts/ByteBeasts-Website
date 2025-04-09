export interface TeamMember {
    id: string;
    name: string;
    role: string;
    image: string;
    social: {
      linkedin?: any;
      twitter?: string;
      github?: string;
      instagram?: string;
    };
  }
  