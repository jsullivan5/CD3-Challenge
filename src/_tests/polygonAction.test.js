import { modifyPolygon } from '../actions';


describe('modifyPolygon action', () => {
  it('should create an action to modify the polygon data', () => {
    const mockPolygon = [1, 2];
    const expectedAction = {
      type: 'MODIFY_POLYGON',
      data: mockPolygon,
    };
    expect(modifyPolygon(mockPolygon)).toEqual(expectedAction);
  });
});
