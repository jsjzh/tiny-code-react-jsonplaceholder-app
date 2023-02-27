import React, { useState } from "react";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { allAPI } from "@/api";
import { useGlobalStore } from "@/store";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const PageRoot = styled.div``;

const PageLogoBox = styled.div`
  height: 20rem;
  background-color: #eee;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PageLogo = styled.div`
  background-color: #eff;
  width: 10rem;
  height: 10rem;
  line-height: 10rem;
  text-align: center;
  border-radius: 50%;
`;

const PageSelectBox = styled.div`
  margin-top: 10rem;
  text-align: center;
`;

const PageEnterBox = styled.div`
  margin-top: 10rem;
  text-align: center;
`;

interface IProps {}

const Login: React.FC<IProps> = (props) => {
  const setCurrentUser = useGlobalStore((state) => state.setCurrentUser);
  const navigate = useNavigate();
  const [currentId, setCurrentId] = useState<React.Key>(1);

  const { data, isLoading } = useQuery({
    queryKey: ["getUsers"],
    queryFn: () => allAPI.getUsers(),
    onSuccess(data) {
      setCurrentId(data[0].id);
    },
  });

  const handleLogin = () => {
    setCurrentUser(data?.find((item) => item.id === currentId) || {});
    navigate("/");
  };

  if (isLoading) {
    return <></>;
  }

  return (
    <PageRoot>
      <PageLogoBox>
        <PageLogo>Hello World</PageLogo>
      </PageLogoBox>

      <PageSelectBox>
        <FormControl style={{ width: "80%" }}>
          <InputLabel id="select-user">选择用户</InputLabel>
          <Select
            labelId="select-user"
            label="选择用户"
            value={currentId}
            onChange={(e) => setCurrentId(e.target.value)}
          >
            {data?.map((item) => (
              <MenuItem key={item.id} value={item.id}>
                {item.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </PageSelectBox>

      <PageEnterBox>
        <Button
          style={{ width: "80%" }}
          variant="contained"
          color="primary"
          onClick={handleLogin}
        >
          login
        </Button>
      </PageEnterBox>
    </PageRoot>
  );
};

export default Login;
