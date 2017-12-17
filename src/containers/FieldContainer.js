import { connect } from 'react-redux';
import Field from '../components/Field';
import { addTask } from '../actions';

const mapDispatchToProps = dispatch => ({
	onAdd: task => dispatch(addTask(task))
});

const FieldContainer = connect(null, mapDispatchToProps)(Field);

export default FieldContainer;