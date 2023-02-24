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
import styled from "styled-components";

const Root = styled.div``;

const LogoBox = styled.div`
  height: 20rem;
  background-color: #eee;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.div`
  background-color: #eff;
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
`;

const SelectBox = styled.div`
  margin-top: 5rem;
  text-align: center;
`;

const EnterBox = styled.div`
  margin-top: 9rem;
  text-align: center;
`;

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
      <Root>
        <LogoBox>
          <Logo>logo</Logo>
        </LogoBox>
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <SelectBox>
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
            </SelectBox>

            <EnterBox>
              <Button
                style={{ width: "80%" }}
                variant="contained"
                color="primary"
                onClick={handleLogin}
              >
                login
              </Button>
            </EnterBox>
          </>
        )}
      </Root>
    </PageWrapper>
  );
};

export default Login;
