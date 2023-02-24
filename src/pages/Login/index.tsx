import React, { useState } from "react";
import PageWrapper from "@/components/PageWrapper";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { allAPI } from "@/api";
import Loading from "@/components/Loading";
import { useGlobalStore } from "@/store";
import { useNavigate } from "react-router-dom";
import { css } from "@emotion/react";

console.log(css());

interface IProps {}

const Login: React.FC<IProps> = (props) => {
  const classes = {};
  const [id, setId] = useState(1);

  const setCurrentUser = useGlobalStore((state) => state.setCurrentUser);
  const navigate = useNavigate();

  const { data, isLoading } = useQuery({
    queryKey: ["getUsers"],
    queryFn: () => allAPI.getUsers(),
  });

  const handleChange = (event: any) => {
    setId(event.target.value as number);
  };

  const handleLogin = () => {
    setCurrentUser(data?.find((item) => item.id === id) || {});
    navigate("/");
  };

  return (
    <PageWrapper>
      <div className={classes.root}>
        <div className={classes.logoBox}>
          <div className={classes.logo}></div>
        </div>
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <div className={classes.selectBox}>
              <FormControl style={{ width: "80%" }}>
                <InputLabel id="select-user">选择用户</InputLabel>
                <Select
                  labelId="select-user"
                  value={id}
                  onChange={handleChange}
                >
                  {data?.map((item) => (
                    <MenuItem key={item.id} value={item.id}>
                      {item.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>

            <div className={classes.enterBox}>
              <Button
                style={{ width: "80%" }}
                variant="contained"
                color="primary"
                onClick={handleLogin}
              >
                login
              </Button>
            </div>
          </>
        )}
      </div>
    </PageWrapper>
  );
};

export default Login;
