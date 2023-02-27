import React from "react";

import { Avatar, Box } from "@mui/material";
import PageWrapper from "@/components/PageWrapper";
import { useGlobalStore } from "@/store";

interface IProps {}

const User: React.FC<IProps> = (props) => {
  const currentUser = useGlobalStore((state) => state.currentUser);

  console.log(currentUser);

  return (
    <PageWrapper>
      <Box>
        <Avatar>{currentUser.name}</Avatar>
      </Box>
    </PageWrapper>
  );
};

export default User;
