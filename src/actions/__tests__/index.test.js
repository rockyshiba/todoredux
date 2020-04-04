import * as ACTIONS from "../index";

describe("addTodo action", () => {
    it("returns action.type as ADD_TODO", () => {
        // arrange
        // act
        const resultAction = ACTIONS.addTodo();

        // assert
        expect(resultAction.type).toBe(ACTIONS.ADD_TODO);
    });

    it("returns action.text to any string", () => {
        // arrange
        // act
        const resultAction = ACTIONS.addTodo("any");

        // assert
        expect(resultAction.text).toBe("any");
        expect(resultAction.text).not.toBe(1);
    });
});

describe("toggleTodo action", () => {
    it("returns action.type TOGGLE_TODO", () => {
        // arrange
        // act
        const resultAction = ACTIONS.toggleTodo();

        // assert
        expect(resultAction.type).toBe(ACTIONS.TOGGLE_TODO);
    });

    it("returns action.id as a number", () => {
        // arrange
        // act
        const resultAction = ACTIONS.toggleTodo(1);

        // assert
        expect(resultAction.id).toBe(1);
        expect(resultAction.id).not.toBe("1");
    });
});

describe("setVisibilityFilter action", () => {
    it("returns action.type to SET_VISIBILITY_FILTER", () => {
        // arrange
        // act
        const resultAction = ACTIONS.setVisibilityFilter();

        // assert
        expect(resultAction.type).toBe(ACTIONS.SET_VISIBILITY_FILTER);
    });
});