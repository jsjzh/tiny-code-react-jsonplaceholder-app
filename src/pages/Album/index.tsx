import React from "react";

import PageWrapper from "@/components/PageWrapper";
import { useQuery } from "@tanstack/react-query";
import { allAPI } from "@/api";
import {
  Avatar,
  Box,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

interface IProps {}

const Album: React.FC<IProps> = (props) => {
  const navigate = useNavigate();

  const { data, isLoading } = useQuery({
    queryKey: ["getAlbums"],
    queryFn: () => allAPI.getAlbums(),
  });

  const handleClick = (id: React.Key) => {
    navigate(`/album/${id}`);
  };

  if (isLoading) {
    return <></>;
  }

  return (
    <PageWrapper>
      <Box>
        <List disablePadding>
          {data?.map((item) => (
            <ListItem key={item.id}>
              <ListItemButton onClick={() => handleClick(item.id)}>
                <ListItemAvatar>
                  <Avatar>{item.userId}</Avatar>
                </ListItemAvatar>
                <ListItemText primary={item.title} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </PageWrapper>
  );
};

export default Album;
