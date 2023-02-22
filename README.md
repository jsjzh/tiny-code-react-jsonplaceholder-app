# tiny-code-react

## 说明

## 草稿

1. react18
2. vite
3. react-router-dom
4. react-qurey axios ~~swr~~
5. zustand ~~jotai valtio RTK~~
6. lodash immer use-immer
7. ahooks react-dnd

animation: framer-motion + Three.js
Router: react-router-dom
form: formik+yup
api: axios+react query
state manager : zustand
utility:lodash+immer
css: [email protected]
UX\UI : react-hot-toast react-spinners-kit @heroicons /react react-dnd timeago-react
vite\typescript\ eslint prettier\ eslint-config-airbn eslint-config-airbnb-typescript

用 `jsonplaceholder.typicode.com` 提供的接口，写一个小应用，纯展示。

1. 选择用户登录，信息存在 global
2. 首页展示所有 post
3. 相册页展示所有 albums
4. TODO 页展示用户 todo
5. 个人中心页 展示 个人文章 个人相册

---

1. 文章列表页 分有无 userId
2. 文章详情页 comment
3. 相册列表页 photo 分有无 userId
4. TODO 列表页 有 userId
5. 个人中心页
   1. 个人文章 -> 文章列表页
   2. 个人相册 -> 相册列表页

```
/posts 100 posts
/comments 500 comments
/albums 100 albums
/photos 5000 photos
/todos 200 todos
/users 10 users

GET /posts
GET /posts/1
GET /posts/1/comments
GET /comments?postId=1
POST /posts
PUT /posts/1
PATCH /posts/1
DELETE /posts/1

/posts/1/comments
/albums/1/photos
/users/1/albums
/users/1/todos
/users/1/posts
```
