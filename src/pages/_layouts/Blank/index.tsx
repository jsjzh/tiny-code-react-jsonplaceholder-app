import { Container } from "@material-ui/core";
import React from "react";
import { Outlet } from "react-router-dom";

interface IProps {}

const Blank: React.FC<IProps> = (props) => (
  <Container disableGutters maxWidth="xs">
    <Outlet />
  </Container>
);

export default Blank;
