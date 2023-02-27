import React from "react";

import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import PageWrapper from "@/components/PageWrapper";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { allAPI } from "@/api";

interface IProps {}

const AlbumInfo: React.FC<IProps> = (props) => {
  const { id } = useParams();

  const { data, isLoading } = useQuery({
    queryKey: [],
    queryFn: () => allAPI.getAlbumPhotos({ id: Number(id) }),
  });

  if (isLoading) {
    return <></>;
  }

  return (
    <PageWrapper>
      {data?.map((item) => (
        <Box key={item.id} sx={{ mb: 5 }}>
          <Card raised>
            <CardMedia component="img" height="194" image={item.thumbnailUrl} />
            <CardContent>
              <Typography variant="body1">{item.title}</Typography>
            </CardContent>
            <CardActions>
              <Button href={item.url} target="_blank">
                link
              </Button>
            </CardActions>
          </Card>
        </Box>
      ))}
    </PageWrapper>
  );
};

export default AlbumInfo;
