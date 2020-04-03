import todos from "../todos";
import { ADD_TODO } from "../../actions/index";

describe("todos reducer", () => {
    let expectedState;
    let mockAction;
    let resultState;

    beforeEach(() => {
        expectedState = undefined;
        mockAction = undefined;
    });

    it("returns [] as the default state when no state and action is provided", () => {
        // arrange
        expectedState = [];
        
        // act
        resultState = todos(undefined, undefined);

        // assert
        expect(resultState).toEqual(expectedState);
    });

    it("returns state with 1 todo when action.type is ADD_TODO", () => {
        // arrange
        mockAction = {
            type: ADD_TODO,
            text: "This is a test action",
        };

        expectedState = [
            {
                id: 1,
                text: mockAction.text,
                completed: false,
            },
        ];

        // act
        resultState = todos(undefined, mockAction);

        // assert
        expect(resultState).toEqual(expectedState);
    });
});