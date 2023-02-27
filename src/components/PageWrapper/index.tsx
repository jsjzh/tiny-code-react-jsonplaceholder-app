import React from "react";
import { Box } from "@mui/material";

type IPageWrapperProps = {
  style?: React.CSSProperties;
  children?: React.ReactNode;
};

const PageWrapper: React.FC<IPageWrapperProps> = (props) => (
  <Box style={props.style}>{props.children}</Box>
);

export default PageWrapper;
