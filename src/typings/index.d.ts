/// <reference types="vite/client" />

declare namespace T {}

declare namespace D {
  interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
  }

  interface Comment {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
  }

  interface Album {
    userId: number;
    id: number;
    title: string;
  }

  interface Photo {
    albumId: number;
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
  }

  interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
  }

  interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
      street: string;
      suite: string;
      city: string;
      zipcode: string;
      geo: { lat: string; lng: string };
    };
    phone: string;
    website: string;
    company: { name: string; catchPhrase: string; bs: string };
  }
}
