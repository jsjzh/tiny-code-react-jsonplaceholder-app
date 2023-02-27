import React from "react";

import PageWrapper from "@/components/PageWrapper";
import { useQuery } from "@tanstack/react-query";
import { allAPI } from "@/api";
import {
  Avatar,
  List,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

interface IProps {}

const Post: React.FC<IProps> = (props) => {
  const navigate = useNavigate();

  const { data, isLoading } = useQuery({
    queryKey: ["getPosts"],
    queryFn: () => allAPI.getPosts(),
  });

  const handleClick = (post: D.Post) => {
    navigate(`/post/${post.id}`);
  };

  if (isLoading) {
    return <></>;
  }

  return (
    <PageWrapper>
      <List>
        {data?.map((item) => (
          <ListItemButton key={item.id} onClick={() => handleClick(item)}>
            <ListItemAvatar>
              <Avatar>{item.userId}</Avatar>
            </ListItemAvatar>
            <ListItemText primary={item.title} />
          </ListItemButton>
        ))}
      </List>
    </PageWrapper>
  );
};

export default Post;
