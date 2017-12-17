import { connect } from 'react-redux';
import Nav from '../components/Nav';
import {filter} from '../actions';

const mapStateToProps = state => ({
    filter: state.filter
});

const mapDispatchToProps = dispatch => ({
    onFilter: f => dispatch(filter(f))
})

const NavContainer = connect(mapStateToProps, mapDispatchToProps)(Nav);

export default NavContainer;
