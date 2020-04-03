import todos from "../todos";
import * as ACTIONS from "../../actions/index";

describe("todos reducer", () => {
    let expectedState;
    let resultState;

    beforeEach(() => {
        expectedState = undefined;
    });

    it("returns [] as the default state when no state is provided and action does not apply", () => {
        // arrange
        expectedState = [];
        
        // act
        resultState = todos(undefined, {});

        // assert
        expect(resultState).toEqual(expectedState);
    });

    it("returns state with 1 todo when addTodo action", () => {
        expectedState = [
            {
                id: 1,
                text: "This is a test action",
                completed: false,
            },          
        ];

        // act
        resultState = todos(undefined, ACTIONS.addTodo("This is a test action"));

        // assert
        expect(resultState).toEqual(expectedState);
    });
});