import { Container } from '@mui/material';
import React from 'react';
import TaskTrackerCard from '../TaskTrackerCard';

const TaskTracker = () => {
  return (
    <Container maxWidth="sm">
      <TaskTrackerCard />
    </Container>
  );
};

export default TaskTracker;
