import { Add as AddIcon } from '@mui/icons-material';
import { Box, Button, Card, Stack, TextField } from '@mui/material';
import React, { useState } from 'react';
import { type TaskForm as ITaskForm } from './types';
import { DEFAULT_TASK_FORM_DATA } from './const';
import { generateUniqueId } from './utils';
import useAppDispatch from '../../hooks/useAppDispatch';
import { addTask } from '../../store/reducers/tasks/slice';

const TaskForm = () => {
  const [formData, setFormData] = useState<ITaskForm>(DEFAULT_TASK_FORM_DATA);
  const dispatch = useAppDispatch();

  const resetFormData = () => setFormData(DEFAULT_TASK_FORM_DATA);

  const onSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    dispatch(
      addTask({
        id: generateUniqueId(),
        ...formData
      })
    );

    resetFormData();
  };

  const onInputChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const { name, value } = event.target;
    setFormData((state) => ({ ...state, [name]: value }));
  };

  return (
    <Box component={Card} p={1} variant="outlined">
      <Stack component="form" p={1} spacing={1} onSubmit={onSubmit}>
        <TextField
          label="Заголовок"
          name="title"
          size="small"
          value={formData.title}
          required
          onChange={onInputChange}
        />
        <TextField
          label="Описание"
          name="description"
          rows={3}
          size="small"
          value={formData.description}
          multiline
          onChange={onInputChange}
        />
        <Button size="small" startIcon={<AddIcon />} type="submit" variant="contained" fullWidth>
          Добавить
        </Button>
      </Stack>
    </Box>
  );
};

export default TaskForm;
