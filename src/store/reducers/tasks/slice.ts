import { createSlice } from '@reduxjs/toolkit';
import { INITIAL_STATE, REDUCER_PATH } from './const';
import { type Task } from '../../../types';
import type { PayloadAction } from '@reduxjs/toolkit';

const tasksSlice = createSlice({
  name: REDUCER_PATH,
  initialState: INITIAL_STATE,
  reducers: {
    addTask: (state, action: PayloadAction<Task>) => {
      state.tasks.unshift(action.payload);
    },
    updateTask: (state, action: PayloadAction<Task>) => {
      const { payload } = action;
      const task = state.tasks.find((item) => item.id === payload.id);
      if (task) Object.assign(task, payload);
    },
    removeTask: (state, action: PayloadAction<Task['id']>) => {
      const { payload: taskId } = action;
      state.tasks = state.tasks.filter((item) => item.id !== taskId);
    }
  }
});

export const { addTask, updateTask, removeTask } = tasksSlice.actions;

export default tasksSlice;
