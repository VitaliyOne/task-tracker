import { Box, Card, Checkbox, IconButton, Stack, Typography } from '@mui/material';
import React from 'react';
import { Delete as DeleteIcon } from '@mui/icons-material';
import { type TaskCardProps } from './types';
import useAppDispatch from '../../hooks/useAppDispatch';
import { removeTask, updateTask } from '../../store/reducers/tasks/slice';

const TaskCard = (props: TaskCardProps) => {
  const { id, title, description, isCompleted } = props;
  const dispatch = useAppDispatch();

  const textStyles = { textDecorationLine: isCompleted ? 'line-through' : 'none' };

  const onCheckboxChange = (_: React.ChangeEvent<HTMLInputElement>, value: boolean) => {
    dispatch(updateTask({ ...props, isCompleted: value }));
  };

  const onDeleteButtonClick = () => {
    // eslint-disable-next-line no-alert
    const isDeletionConfirmed = window.confirm('Вы уверены, что хотите удалить задачу?');
    if (isDeletionConfirmed) dispatch(removeTask(id));
  };

  return (
    <Box component={Card} display="flex" flexDirection="row" gap={1} p={1} variant="outlined">
      <Checkbox value={isCompleted} onChange={onCheckboxChange} />
      <Stack flexGrow={1}>
        <Typography sx={textStyles}>{title}</Typography>
        <Typography color={(theme) => theme.palette.grey[600]} sx={textStyles} variant="body2">
          {description}
        </Typography>
      </Stack>
      <IconButton onClick={onDeleteButtonClick}>
        <DeleteIcon />
      </IconButton>
    </Box>
  );
};

export default TaskCard;
