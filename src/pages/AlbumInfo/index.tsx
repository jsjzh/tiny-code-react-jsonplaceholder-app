import React from "react";

import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  ImageList,
  ImageListItem,
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
      <Box>
        <ImageList>
          {data ? (
            data.map((item) => (
              <ImageListItem key={item.id}>
                <img src={item.url} srcSet={item.thumbnailUrl} />
              </ImageListItem>
            ))
          ) : (
            <></>
          )}
        </ImageList>
      </Box>
    </PageWrapper>
  );
};

export default AlbumInfo;
