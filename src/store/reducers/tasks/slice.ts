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
    }
  }
});

export const { addTask } = tasksSlice.actions;

export default tasksSlice;
