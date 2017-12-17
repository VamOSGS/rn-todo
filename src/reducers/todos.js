import { ADD_TASK, REMOVE_TASK, TOGGLE_TASK } from '../constants';
import defaultTasks from '../defalutTasks';

const initialState = [...defaultTasks];

export default (state = initialState, action) => {
	switch (action.type) {
    
		case ADD_TASK:
			return [...state, action.task];
		case REMOVE_TASK:
			return [...state.filter(i => i.id != action.id)];
		case TOGGLE_TASK:
			return [...state.map(task => task.id == action.id ? {...task, done: !task.done} : task)];

		default:
			return state;
	}
};
