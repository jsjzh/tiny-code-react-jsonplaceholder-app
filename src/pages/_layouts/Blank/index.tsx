import React from "react";
import { Container } from "@mui/material";
import { Outlet } from "react-router-dom";

interface IProps {}

const Blank: React.FC<IProps> = (props) => (
  <Container disableGutters maxWidth="xs">
    <Outlet />
  </Container>
);

export default Blank;
