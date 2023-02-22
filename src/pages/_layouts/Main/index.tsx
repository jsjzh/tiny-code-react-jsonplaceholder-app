import { Container } from "@material-ui/core";
import React from "react";
import { Outlet } from "react-router-dom";

interface IProps {}

const Main: React.FC<IProps> = (props) => (
  <Container maxWidth="xs">
    <Outlet />
  </Container>
);

export default Main;
