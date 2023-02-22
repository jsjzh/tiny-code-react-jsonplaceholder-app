import React from "react";
import { useGlobalStore } from "@/store";
import { useNavigate, useSearchParams } from "react-router-dom";

import PageWrapper from "@/components/PageWrapper";
import { compose } from "lodash/fp";
import queryString from "query-string";

import { Button } from "@material-ui/core";

const Jump: React.FC = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const jump = compose(navigate, queryString.stringifyUrl);

  const user = useGlobalStore((state) => state.currentUser);

  searchParams.forEach((value, key) => {
    console.log(`key: ${key}`, `value: ${value}`);
  });

  return (
    <PageWrapper
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={{ margin: "1rem 0" }}>
        <div>
          <div>url query from: {searchParams.get("from")}</div>
          <div>url query id: {searchParams.get("id")}</div>
        </div>

        <div style={{ margin: "1rem 0" }}>
          <div>id: {user.id}</div>
          <div>name: {user.name}</div>
          <div>username: {user.username}</div>
          <div>email: {user.email}</div>
          <div>phone: {user.phone}</div>
          <div>website: {user.website}</div>
        </div>

        <div style={{ textAlign: "center" }}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => jump({ url: "/home" })}
          >
            back to home page
          </Button>
        </div>
      </div>
    </PageWrapper>
  );
};
export default Jump;
