import React from "react";
import { Outlet } from "react-router-dom";

interface IProps {}

const Blank: React.FC<IProps> = (props) => <Outlet />;

export default Blank;
