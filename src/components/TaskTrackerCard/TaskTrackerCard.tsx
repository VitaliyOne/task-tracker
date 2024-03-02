import { Box, Card } from '@mui/material';
import React from 'react';
import Header from '../Header';
import TaskList from '../TaskList';

const TaskTrackerCard = () => {
  return (
    <Box component={Card} display="flex" flexDirection="column" gap={2} p={2} variant="outlined">
      <Header />
      <TaskList />
    </Box>
  );
};

export default TaskTrackerCard;
