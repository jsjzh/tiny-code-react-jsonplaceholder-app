import React, { useState } from "react";
import PageWrapper from "@/components/PageWrapper";
import {
  Button,
  createStyles,
  FormControl,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
} from "@material-ui/core";
import { useQuery } from "@tanstack/react-query";
import { allAPI } from "@/api";
import Loading from "@/components/Loading";
import { useGlobalStore } from "@/store";
import { useNavigate } from "react-router-dom";

interface IProps {}

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {},
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
    selectBox: {
      marginTop: "5rem",
      textAlign: "center",
    },
    enterBox: {
      marginTop: "9rem",
      textAlign: "center",
    },
  })
);

const Login: React.FC<IProps> = (props) => {
  const classes = useStyles();
  const [id, setId] = useState(1);

  const setCurrentUser = useGlobalStore((state) => state.setCurrentUser);
  const navigate = useNavigate();

  const { data, isLoading } = useQuery({
    queryKey: ["getUsers"],
    queryFn: () => allAPI.getUsers(),
  });

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
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
