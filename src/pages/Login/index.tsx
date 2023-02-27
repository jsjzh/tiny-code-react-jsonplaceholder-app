import React, { useState } from "react";
import {
  Box,
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
    <Box>
      <Box
        sx={{
          height: "40vh",
          backgroundColor: "#eee",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            backgroundColor: "#eff",
            width: "20vw",
            height: "20vw",
            lineHeight: "20vw",
            textAlign: "center",
            borderRadius: "50%",
          }}
        >
          Hi
        </Box>
      </Box>

      <Box
        sx={{
          mt: "20vh",
          textAlign: "center",
        }}
      >
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
      </Box>

      <Box
        sx={{
          mt: "20vh",
          textAlign: "center",
        }}
      >
        <Button
          style={{ width: "80%" }}
          variant="contained"
          color="primary"
          onClick={handleLogin}
        >
          login
        </Button>
      </Box>
    </Box>
  );
};

export default Login;
