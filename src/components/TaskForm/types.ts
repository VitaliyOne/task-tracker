import { type Task } from '../../types';

export type TaskForm = Omit<Task, 'id'>;
