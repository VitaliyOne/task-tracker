import { Box, Card, Typography } from '@mui/material';
import React from 'react';
import Header from '../Header';
import TaskList from '../TaskList';
import useAppSelector from '../../hooks/useAppSelector';

const TaskTrackerCard = () => {
  const { tasks } = useAppSelector((state) => state.tasks);

  return (
    <Box component={Card} display="flex" flexDirection="column" gap={2} p={2} variant="outlined">
      <Header />
      {tasks.length ? <TaskList /> : <Typography align="center">Задач нет</Typography>}
    </Box>
  );
};

export default TaskTrackerCard;
