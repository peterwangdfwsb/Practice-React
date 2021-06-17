import todos from '../../redux/reducers/todos';
import filter from '../../redux/reducers/filter';

describe('Test for todos reducer', () => {
  it('Should return empty array as init value', () => {
    expect(todos(undefined, {})).toEqual([]);
  });
  it('handle ADD_TODO action', () => {
    const action = {type: 'ADD_TODO', id: 1, text: 'first item'};
    const result = [{id: 1, text: 'first item', completed: false}];
    expect(todos(undefined, action)).toEqual(result);
  });
  it('handle TOGGLE action', () => {
    const addAction = {type: 'ADD_TODO', id: 1, text: 'first item'};
    const toggleAction = {type: 'TOGGLE_TODO', id: 1};
    const result = [{id: 1, text: 'first item', completed: true}];
    const newState = todos(undefined, addAction);
    expect(todos(newState, toggleAction)).toEqual(result);
  });
});

describe('Test for filter reducer', () => {
  it('Should return "all" for default state', () => {
    expect(filter(undefined, {})).toEqual('all');
  });
  it('handle SET_FILTER action', () => {
    const action = {type: 'SET_FILTER', filter: 'active'};
    const result = 'active';
    expect(filter(undefined, action)).toEqual(result);
  });
});