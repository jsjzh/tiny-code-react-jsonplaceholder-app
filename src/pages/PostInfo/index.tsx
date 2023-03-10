import React from "react";

import PageWrapper from "@/components/PageWrapper";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { allAPI } from "@/api";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";

interface IProps {}

const PostInfo: React.FC<IProps> = (props) => {
  const { id } = useParams();

  const { data, isLoading } = useQuery({
    queryKey: ["getPost", "getPostComments", id],
    queryFn: () =>
      Promise.all([
        allAPI.getPost({ id: Number(id) }),
        allAPI.getPostComments({ id: Number(id) }),
      ]),
  });

  if (isLoading) {
    return <></>;
  }

  return (
    <PageWrapper>
      <Card>
        <CardContent>
          <Typography variant="h5">{data?.[0].title}</Typography>
          <Typography variant="body1">{data?.[0].body}</Typography>
        </CardContent>
      </Card>
      <List disablePadding>
        {data?.[1].map((item) => (
          <ListItem key={item.id}>
            <ListItemButton>
              <ListItemText
                primary={item.name}
                secondary={
                  <Box>
                    <Box>{item.body}</Box>
                    <Box sx={{ mt: 2, textAlign: "right" }}>{item.email}</Box>
                  </Box>
                }
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </PageWrapper>
  );
};

export default PostInfo;
