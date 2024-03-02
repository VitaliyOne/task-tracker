import { Box, Card, Tab, Tabs } from '@mui/material';
import React, { useState } from 'react';
import { FilterTab } from './types';

const TaskList = () => {
  const [currentTab, setCurrentTab] = useState<FilterTab>(FilterTab.ALL);

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
    </Box>
  );
};

export default TaskList;
