import reducer from '../reducers/polygonReducer';


const getMockAction = payload => ({
  type: 'MODIFY_POLYGON',
  data: payload,
});

describe('polygonReducer', () => {
  it('Should return initial state', () => {
    const expectedState = [];
    expect(reducer(undefined, {})).toEqual(expectedState);
  });
  it('Should handle MODIFY_POLYGON action', () => {
    const expectedState = [4, 5];
    const mockInitialState = [[1, 2]];
    const mockAction = getMockAction(expectedState);

    expect(reducer([], mockAction)).toEqual([expectedState]);
    expect(reducer(mockInitialState, mockAction))
      .toEqual([...mockInitialState, expectedState]);
  });
  it('Should remove an existing location', () => {
    const expectedState = [[4, 5]];
    const mockInitialState = [[4, 5], [1, 2]];
    const mockAction = getMockAction([1, 2]);

    expect(reducer(mockInitialState, mockAction))
      .toEqual(expectedState);
  });
  it('Should return empty array if removing last polygon', () => {
    const mockInitialState = [[1, 2]];
    const mockAction = getMockAction([1, 2]);

    expect(reducer(mockInitialState, mockAction)).toEqual([]);
  });
});
