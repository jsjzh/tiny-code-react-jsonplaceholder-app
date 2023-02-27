import React, { useEffect, useState } from "react";
import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Container,
  CssBaseline,
  Paper,
} from "@mui/material";
import { Outlet, useNavigate } from "react-router-dom";
import { useGlobalStore } from "@/store";

import { FavoriteBorderOutlined } from "@mui/icons-material";

interface IProps {}

const navs = [
  { label: "post", path: "/", icon: <FavoriteBorderOutlined /> },
  { label: "album", path: "/album", icon: <FavoriteBorderOutlined /> },
  { label: "todo", path: "/todo", icon: <FavoriteBorderOutlined /> },
  { label: "user", path: "/user", icon: <FavoriteBorderOutlined /> },
];

const Main: React.FC<IProps> = (props) => {
  const currentUser = useGlobalStore((state) => state.currentUser);
  const [currentPage, setCurrentPage] = useState("post");

  const navigate = useNavigate();

  const handleNavigate = (_: any, index: number) => {
    const current = navs[index];
    setCurrentPage(current.label);
    navigate(`${current.path}`);
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
                key={nav.label}
                label={nav.label}
                icon={<FavoriteBorderOutlined />}
              />
            ))}
          </BottomNavigation>
        </Paper>
      </Box>
    </Container>
  );
};

export default Main;
