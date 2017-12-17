import { connect } from 'react-redux';
import Field from '../components/Field';
import { addTask } from '../actions';

const mapDispatchToProps = dispatch => ({
	onAdd: id => dispatch(addTask(id))
});

const FieldContainer = connect(null, mapDispatchToProps)(Field);
