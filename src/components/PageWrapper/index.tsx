import React from "react";

type IPageWrapperProps = {
  style?: React.CSSProperties;
  children?: React.ReactNode;
};

const PageWrapper: React.FC<IPageWrapperProps> = (props) => (
  <div style={props.style}>{props.children}</div>
);

export default PageWrapper;
