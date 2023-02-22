import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import queryString from "query-string";
import { compose } from "lodash/fp";

import { allAPI } from "@/api";
import { useGlobalStore } from "@/store";
import PageWrapper from "@/components/PageWrapper";
import Loading from "@/components/Loading";
import ServerError from "@/pages/results/ServerError";

import { Button } from "@material-ui/core";

const Home: React.FC = () => {
  const [id, setId] = useState(1);

  const navigate = useNavigate();

  const jump = compose(navigate, queryString.stringifyUrl);

  const setUser = useGlobalStore((state) => state.setCurrentUser);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["getUser", id],
    queryFn: () => allAPI.getUser({ id }),
    onSuccess: setUser,
  });

  const handleQuery = (count: number) => {
    const _id = id + count;
    setId(_id > 10 ? 10 : _id < 1 ? 1 : _id);
  };

  if (isError) {
    return <ServerError />;
  }

  return (
    <PageWrapper
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Button
            variant="contained"
            color="primary"
            onClick={() => handleQuery(-1)}
          >
            id - 1
          </Button>

          <Button
            variant="contained"
            color="primary"
            onClick={() => handleQuery(1)}
          >
            id + 1
          </Button>
        </div>

        <div style={{ margin: "1rem 0" }}>
          {isLoading ? (
            <Loading />
          ) : (
            <>
              <div>id: {data?.id}</div>
              <div>name: {data?.name}</div>
              <div>username: {data?.username}</div>
              <div>email: {data?.email}</div>
              <div>phone: {data?.phone}</div>
              <div>website: {data?.website}</div>
            </>
          )}
        </div>

        <div style={{ textAlign: "center" }}>
          <Button
            variant="contained"
            color="primary"
            onClick={() =>
              jump({
                url: "/jump",
                query: { from: "home", id },
              })
            }
          >
            to jump page
          </Button>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Home;
