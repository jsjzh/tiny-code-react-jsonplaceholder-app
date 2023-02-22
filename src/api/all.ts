import createAPI from "@/shared/createAPI";

const api = createAPI(import.meta.env.VITE_JSONPLACEHOLDER_TYPICODE_COM);

export const getPosts = () => api.getJSON<D.Post[]>("/posts");

export const getPost = (data: { id: number }) =>
  api.getJSON<D.Post[]>(`/posts/${data.id}`);

export const getPostComments = (data: { id: number }) =>
  api.getJSON<D.Post[]>(`/posts/${data.id}/comments`);

export const getComments = () => api.getJSON<D.Comment[]>("/comments");

export const getComment = (data: { id: number }) =>
  api.getJSON<D.Comment>(`/comments/${data.id}`);

export const getAlbums = () => api.getJSON<D.Album[]>("/albums");

export const getAlbum = (data: { id: number }) =>
  api.getJSON<D.Album>(`/albums/${data.id}`);

export const getAlbumPhotos = (data: { id: number }) =>
  api.getJSON<D.Photo[]>(`/albums/${data.id}/photos`);

export const getPhotos = () => api.getJSON<D.Photo[]>("/photos");

export const getPhoto = (data: { id: number }) =>
  api.getJSON<D.Photo>(`/photos/${data.id}`);

export const getTodos = () => api.getJSON<D.Todo[]>("/todos");

export const getTodo = (data: { id: number }) =>
  api.getJSON<D.Todo>(`/todos/${data.id}`);

export const getUsers = () => api.getJSON<D.User[]>("/users");

export const getUser = (data: { id: number }) =>
  api.getJSON<D.User>(`/users/${data.id}`);

export const getUserAlbums = (data: { id: number }) =>
  api.getJSON<D.Album[]>(`/users/${data.id}/albums`);

export const getUserTodos = (data: { id: number }) =>
  api.getJSON<D.Todo[]>(`/users/${data.id}/todos`);

export const getUserPosts = (data: { id: number }) =>
  api.getJSON<D.Post[]>(`/users/${data.id}/posts`);
