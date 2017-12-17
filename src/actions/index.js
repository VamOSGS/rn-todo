import { ADD_TASK, REMOVE_TASK, TOGGLE_TASK, FILTER } from '../constants';

export const addTask = task => ({
	type: ADD_TASK,
	task
});

export const removeTask = id => ({
	type: REMOVE_TASK,
	id
});

export const toggleTask = id => ({
	type: TOGGLE_TASK,
	id
});

export const filter = filter => ({
  type: FILTER,
  filter
})
