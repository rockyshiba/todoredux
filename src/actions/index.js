export const ADD_TODO = 'ADD_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE',
};

export let nextTodoId = 1;

/**
 * Creates action object to create a new todo item for redux store
 * @param {string} text 
 * @return {object} Action object with type ADD_TODO, id, and text
 */
export const addTodo = text => ({
    type: ADD_TODO,
    id: nextTodoId++,
    text,
});

/**
 * Creates action object to set visibility of todos based on filter keyword
 * @param {string} filter 
 * @return {object} Action object with type: SET_VISIBILITY_FILTER and filter
 */
export const setVisibilityFilter = filter => ({
    type: SET_VISIBILITY_FILTER,
    filter
});

/**
 * Creates action object to toggle visibility of Todo by id
 * @param {number} id 
 * @return {object} Action object with type TOGGLE_TODO and id
 */
export const toggleTodo = id => ({
    type: TOGGLE_TODO,
    id
});