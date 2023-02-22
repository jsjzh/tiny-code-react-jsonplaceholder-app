import React, { useState } from "react";

import PageWrapper from "@/components/PageWrapper";
import {
  FormControl,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
} from "@material-ui/core";
import { useQuery } from "@tanstack/react-query";

interface IProps {}

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "100%",
  },
  logoBox: {
    height: "20rem",
    backgroundColor: "#eee",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    backgroundColor: "#eff",
    width: "10rem",
    height: "10rem",
    borderRadius: "50%",
  },
  selectBox: {},
}));

const Login: React.FC<IProps> = (props) => {
  const classes = useStyles();

  // const {} = useQuery({queryKey:[], quer})

  const [id, setId] = useState();

  const handleChange = () => {};

  return (
    <PageWrapper>
      <div className={classes.root}>
        <div className={classes.logoBox}>
          <div className={classes.logo}></div>
        </div>
        <div className={classes.selectBox}>
          <FormControl>
            <InputLabel id="select-user">选择用户</InputLabel>
            <Select
              labelId="select-user"
              id="select-user"
              value={id}
              onChange={handleChange}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Login;
