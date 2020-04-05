import { connect } from 'react-redux';
import { VisibilityFilters, toggleTodo } from "../actions";
import TodoList from '../components/TodoList';

// filters todos based on current visibilityfilter in redux store
// renders todo list

/**
 * Filters through an array of todo objects
 * @param {array} todos Array of todo objects
 * @param {string} filter Criteria that filters the todos array
 * @return Array of todo objects
 */
const getVisibleTodos = (todos, filter) => {
    switch (filter){
        case VisibilityFilters.SHOW_COMPLETED:
            return todos.filter(t => t.SHOW_COMPLETED);
        case VisibilityFilters.SHOW_ACTIVE:
            return todos.filter(t => !t.completed);
        case VisibilityFilters.SHOW_ALL:
        default:
            return todos;
    }
}

const mapStateToProps = state => {
    return {
        todos: getVisibleTodos(state.todos, state.visibilityFilter)
    }
}

// toggleTodo is on TodoList component
const mapDispatchToProps = dispatch => {
    return {
        toggleTodo: id => {
            dispatch(toggleTodo(id))
        }
    }
}

const VisibileTodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList);

export default VisibileTodoList;