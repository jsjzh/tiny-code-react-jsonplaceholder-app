import React, { lazy, Suspense } from "react";

import Loading from "@/components/Loading";

import Blank from "@/pages/_layouts/Blank";
import Container from "@/pages/_layouts/Container";

const Login = lazy(() => import("@/pages/Login"));
const Post = lazy(() => import("@/pages/Post"));
const PostInfo = lazy(() => import("@/pages/PostInfo"));
const Album = lazy(() => import("@/pages/Album"));
const AlbumInfo = lazy(() => import("@/pages/AlbumInfo"));
const Todo = lazy(() => import("@/pages/Todo"));
const User = lazy(() => import("@/pages/User"));

const NotFound = lazy(() => import("@/pages/results/NotFound"));
const NotAuthorized = lazy(() => import("@/pages/results/NotAuthorized"));
const ServerError = lazy(() => import("@/pages/results/ServerError"));

const lazyLoad = (children: React.ReactNode) => (
  <Suspense fallback={<Loading />}>{children}</Suspense>
);

export interface IRoute {
  title: string;
  path: string;
  icon?: React.ReactNode;
  element?: React.ReactNode;
  children?: IRoute[];
  hide?: boolean;
}

const routes: IRoute[] = [
  {
    hide: true,
    title: "登录",
    path: "/login",
    element: <Blank />,
    children: [{ title: "登录", path: "/login", element: lazyLoad(<Login />) }],
  },
  {
    title: "应用",
    path: "/",
    element: <Container />,
    children: [
      { title: "文章列表", path: "/", element: lazyLoad(<Post />) },
      {
        hide: true,
        title: "文章详情",
        path: "/post/:id",
        element: lazyLoad(<PostInfo />),
      },
      { title: "相册列表", path: "/album", element: lazyLoad(<Album />) },
      {
        hide: true,
        title: "相册详情",
        path: "/album/:id",
        element: lazyLoad(<AlbumInfo />),
      },
      { title: "待办", path: "/todo", element: lazyLoad(<Todo />) },
      { title: "个人中心", path: "/user", element: lazyLoad(<User />) },
      {
        hide: true,
        title: "个人中心-文章列表",
        path: "/user/:id/posts",
        element: lazyLoad(<PostInfo />),
      },
      {
        hide: true,
        title: "个人中心-相册列表",
        path: "/user/:id/albums",
        element: lazyLoad(<AlbumInfo />),
      },
    ],
  },
  {
    hide: true,
    title: "结果页",
    path: "/results",
    element: <Container />,
    children: [
      {
        title: "无权限",
        path: "/results/403",
        element: lazyLoad(<NotAuthorized />),
      },
      {
        title: "未知错误",
        path: "/results/404",
        element: lazyLoad(<NotFound />),
      },
      {
        title: "服务器出错",
        path: "/results/500",
        element: lazyLoad(<ServerError />),
      },
    ],
  },
];

export default routes;
