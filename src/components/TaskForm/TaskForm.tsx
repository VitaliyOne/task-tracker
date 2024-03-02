import { Add as AddIcon } from '@mui/icons-material';
import { Box, Button, Card, Stack, TextField } from '@mui/material';
import React from 'react';

const TaskForm = () => {
  const onSubmit: React.FormEventHandler = (event) => {
    event.preventDefault();
  };

  return (
    <Box component={Card} p={1} variant="outlined">
      <Stack component="form" p={1} spacing={1} onSubmit={onSubmit}>
        <TextField label="Заголовок" size="small" />
        <TextField label="Описание" rows={3} size="small" multiline />
        <Button size="small" startIcon={<AddIcon />} type="submit" variant="contained" fullWidth>
          Добавить
        </Button>
      </Stack>
    </Box>
  );
};

export default TaskForm;
