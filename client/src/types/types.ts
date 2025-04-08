export interface TeamMember {
    id: string;
    name: string;
    role: string;
    image: string;
    social: {
      twitter?: string;
      github?: string;
      instagram?: string;
    };
    gradientFrom: string;
    gradientTo: string;
  }
  