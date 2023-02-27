import React, { useEffect, useState } from "react";
import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Container,
  Paper,
} from "@mui/material";
import { Outlet, useNavigate } from "react-router-dom";
import { useGlobalStore } from "@/store";

import {
  AlbumOutlined,
  PostAddOutlined,
  SettingsApplicationsOutlined,
  TodayOutlined,
} from "@mui/icons-material";

interface IProps {}

const navs = [
  { label: "POST", value: "post", path: "/", icon: <PostAddOutlined /> },
  { label: "ALBUM", value: "album", path: "/album", icon: <AlbumOutlined /> },
  { label: "TODO", value: "todo", path: "/todo", icon: <TodayOutlined /> },
  {
    label: "USER",
    value: "user",
    path: "/user",
    icon: <SettingsApplicationsOutlined />,
  },
];

const Main: React.FC<IProps> = (props) => {
  const currentUser = useGlobalStore((state) => state.currentUser);
  const [currentPage, setCurrentPage] = useState("post");

  const navigate = useNavigate();

  const handleNavigate = (_: any, value: string) => {
    const current = navs.find((nav) => nav.value === value);
    setCurrentPage(value);
    navigate(`${current!.path}`);
  };

  useEffect(() => {
    if (!currentUser.id) {
      navigate("/login");
    }
  }, []);

  return (
    <Container disableGutters maxWidth="xs">
      <Box sx={{ pb: 7 }}>
        <Outlet />
        <Paper
          sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
          elevation={3}
        >
          <BottomNavigation
            showLabels
            value={currentPage}
            onChange={handleNavigate}
          >
            {navs.map((nav) => (
              <BottomNavigationAction
                key={nav.value}
                label={nav.label}
                value={nav.value}
                icon={nav.icon}
              />
            ))}
          </BottomNavigation>
        </Paper>
      </Box>
    </Container>
  );
};

export default Main;
