import visibilityFilter from "../visibilityFilter";
import { setVisibilityFilter, VisibilityFilters } from "../../actions";

describe("visibilityFilter reducer", () => {
    let expectedState;
    let resultState;
    let state;

    beforeEach(() => {
        state = VisibilityFilters.SHOW_ALL;
        resultState = undefined;
        expectedState = undefined;
    });

    it("returns SHOW_ALL as the default state", () => {
        // arrange
        expectedState = VisibilityFilters.SHOW_ALL;

        // act
        // for this test, create a null action. setVisibilityFilter action can only have the SET_VISIBILITY_FILTER type
        resultState = visibilityFilter(undefined, {type: null});
        
        // assert
        expect(resultState).toEqual(expectedState);
    });

    it("returns SHOW_COMPLETED when action.type is SET_VISIBILITY_FILTER action.filter is SHOW_COMPLETED", () => {
        // arrange 
        expectedState = VisibilityFilters.SHOW_COMPLETED;

        // act
        resultState = visibilityFilter(state, setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED));

        // assert
        expect(resultState).toEqual(expectedState);
    });

    it("returns SHOW_ACTIVE when action.type is SET_VISIBILITY_FILTER and action.filter is SHOW_ACTIVE", () => {
        // arrange
        expectedState = VisibilityFilters.SHOW_ACTIVE;

        // act
        resultState = visibilityFilter(state, setVisibilityFilter(VisibilityFilters.SHOW_ACTIVE));
    
        // assert
        expect(resultState).toEqual(expectedState);
    });
});