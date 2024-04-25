export interface Genre {
    id: number;
    name: string;
  }
  
  export interface Release {
    id: number;
    release: number;  // Assuming 'release' is a year
  }
  
  export interface Movie {
    id: number;
    name: string;
    genre: Genre[];
    rating: number;
    description: string;
    release: Release;
    image: string;
  }
  