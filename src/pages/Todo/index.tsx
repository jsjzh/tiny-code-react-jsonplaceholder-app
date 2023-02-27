import React from "react";

import {
  Box,
  Checkbox,
  FormGroup,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import PageWrapper from "@/components/PageWrapper";
import { useQuery } from "@tanstack/react-query";
import { allAPI } from "@/api";
import { useImmer } from "use-immer";

interface IProps {}

const Todo: React.FC<IProps> = (props) => {
  const [currentData, updateCurrentData] = useImmer<D.Todo[]>([]);

  const { isLoading } = useQuery({
    queryKey: [],
    queryFn: () => allAPI.getTodos(),
    onSuccess(data) {
      updateCurrentData(data);
    },
  });

  const handleChange = (id: React.Key) => {
    updateCurrentData((state) => {
      if (!state) return;
      for (let index = 0; index < state.length; index++) {
        const item = state[index];
        if (id === item.id) {
          item.completed = !item.completed;
          return;
        }
      }
    });
  };

  const handleClick = (id: React.Key) => {
    handleChange(id);
  };

  if (isLoading) {
    return <></>;
  }

  return (
    <PageWrapper>
      <Box>
        <FormGroup>
          <List disablePadding>
            {currentData?.map((item) => (
              <ListItem key={item.id}>
                <ListItemAvatar>
                  <Checkbox
                    checked={item.completed}
                    onChange={() => handleChange(item.id)}
                  />
                </ListItemAvatar>
                <ListItemButton onClick={() => handleClick(item.id)}>
                  <ListItemText primary={item.title} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </FormGroup>
      </Box>
    </PageWrapper>
  );
};

export default Todo;
