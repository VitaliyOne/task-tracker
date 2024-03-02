import { Container } from '@mui/material';
import React from 'react';
import TaskForm from '../TaskForm';

const Header = () => {
  return (
    <Container disableGutters>
      <TaskForm />
    </Container>
  );
};

export default Header;
