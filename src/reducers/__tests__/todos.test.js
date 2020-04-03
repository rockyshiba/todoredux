import todos from "../todos";
import * as ACTIONS from "../../actions/index";

describe("todos reducer", () => {
    let state;
    let expectedState;
    let resultState;

    beforeEach(() => {
        state = undefined;
        expectedState = undefined;
    });

    afterEach(() => {
        resultState = undefined;
    });

    it("returns [] as the default state when no state is provided and action does not apply", () => {
        // arrange
        expectedState = [];
        
        // act
        resultState = todos(state, {});

        // assert
        expect(resultState).toEqual(expectedState);
    });

    it("returns state with 1 todo when addTodo action", () => {
        // arrange
        expectedState = [
            {
                id: 1,
                text: "This is a test action",
                completed: false,
            },          
        ];

        // act
        resultState = todos(state, ACTIONS.addTodo("This is a test action"));

        // assert
        expect(resultState).toEqual(expectedState);
    });

    it("returns altered state with selected id's !completed when toggleTodo action", () => {
        // arrange
        state = [
            {
                id: 12,
                text: "This is also a test",
                completed: false,
            },
            {
                id: 13,
                text: "This is a test",
                completed: false,
            },
        ];

        expectedState = [
            {
                id: 12,
                text: "This is also a test",
                completed: false,
            },
            {
                id: 13,
                text: "This is a test",
                completed: true,
            },
        ];

        // act
        resultState = todos(state, ACTIONS.toggleTodo(13));

        // assert
        expect(resultState).toEqual(expectedState);
    });

    it("does not alter state if there are no associated ids for toggleTodo action", () => {
        // arrange
        state = [
            {
                id: 12,
                text: "This is also a test",
                completed: false,
            },
            {
                id: 13,
                text: "This is a test",
                completed: false,
            },
        ];

        // act
        resultState = todos(state, ACTIONS.toggleTodo(999));

        // assert
        expect(resultState).toEqual(state);
    });
});