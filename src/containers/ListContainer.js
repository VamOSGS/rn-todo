import { connect } from 'react-redux';
import List from '../components/List';
import { removeTask, toggleTask } from '../actions';

const mapStateToProps = state => ({
    tasks: state.todos,
    filter: state.filter
});

const mapDispatchToProps = dispatch => ({
    onToggle: id => dispatch(toggleTask(id)),
    onRemove: id => dispatch(removeTask(id))
});

const ListContainer = connect(mapStateToProps, mapDispatchToProps)(List);

export default ListContainer;
