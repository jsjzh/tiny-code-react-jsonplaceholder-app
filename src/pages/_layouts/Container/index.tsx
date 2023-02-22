import React from "react";
import { Outlet, Link } from "react-router-dom";

import routes, { IRoute } from "@/routes";

const createLinks = (routes: IRoute[]) => {
  const results: React.ReactNode[] = [];

  for (let index = 0; index < routes.length; index++) {
    const route = routes[index];
    if (route.hide) continue;
    if (Array.isArray(route.children) && route.children.length) {
      results.push(...createLinks(route.children));
    } else {
      results.push(
        <Link key={route.path} to={route.path}>
          {route.title} &nbsp;
        </Link>
      );
    }
  }

  return results;
};

const LayoutContainer: React.FC = () => {
  return (
    <div>
      <div>{createLinks(routes)}</div>

      <Outlet />
    </div>
  );
};

export default LayoutContainer;
