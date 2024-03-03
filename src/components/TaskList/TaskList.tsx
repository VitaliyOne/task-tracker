import { Box, Card, Stack, Tab, Tabs } from '@mui/material';
import React, { useState } from 'react';
import { FilterTab } from './types';
import useAppSelector from '../../hooks/useAppSelector';
import TaskCard from '../TaskCard';

const TaskList = () => {
  const [currentTab, setCurrentTab] = useState<FilterTab>(FilterTab.ALL);
  const tasks = useAppSelector((state) => {
    const { tasks } = state.tasks;
    switch (currentTab) {
      case FilterTab.ACTIVE:
        return tasks.filter((task) => !task.isCompleted);
      case FilterTab.FINISHED:
        return tasks.filter((task) => task.isCompleted);
      default:
        return tasks;
    }
  });

  const onTabChange = (_: unknown, value: FilterTab) => {
    setCurrentTab(value);
  };

  return (
    <Box component={Card} p={2} variant="outlined">
      <Tabs value={currentTab} onChange={onTabChange}>
        <Tab label="Все" value={FilterTab.ALL} />
        <Tab label="Активные" value={FilterTab.ACTIVE} />
        <Tab label="Завершенные" value={FilterTab.FINISHED} />
      </Tabs>
      <Stack py={2} spacing={2}>
        {tasks.map((task) => (
          <TaskCard key={task.id} {...task} />
        ))}
      </Stack>
    </Box>
  );
};

export default TaskList;
