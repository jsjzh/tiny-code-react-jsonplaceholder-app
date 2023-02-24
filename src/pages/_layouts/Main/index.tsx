import React from "react";
import { Container } from "@mui/material";
import { Outlet } from "react-router-dom";

interface IProps {}

const Main: React.FC<IProps> = (props) => (
  <Container maxWidth="xs">
    <Outlet />
  </Container>
);

export default Main;
