import { act, renderHook } from '@testing-library/react';
import useCustomDispatch from './hooks/useCustomDispatch';
import store from './store';
import { IToDo, ToDoModel } from './models/ToDo';
import { Provider } from 'react-redux';
import { ITask, TaskModel } from './models/Task';

const ReduxProvider = ({ children, reduxStore }: { children: any, reduxStore: any }) => (
  <Provider store={reduxStore}>{children}</Provider>
)

const wrapper = ({ children }: { children: any }) => (
  <ReduxProvider reduxStore={store}>{children}</ReduxProvider>
);

/**
 * Testing of the custom hook with generic redux, the state must be initialized as string empty
 */
describe('Testing Custom Hook with ToDo entity', () => {
  it('Hook must initialize as array empty', () => {

    const { result } = renderHook(() =>
      useCustomDispatch<IToDo>(store), { wrapper });


    const expected: IToDo[] = [];
    const received = result.current.data;
    expect(received).toEqual(expected);
  });

  /**
   * Adding a new ToDo entity must be reflected on the state
   */
  it('Hook must add new ToDo', () => {

    const { result } = renderHook(() =>
      useCustomDispatch<IToDo>(store), { wrapper });

    act(() => {
      const newItem = new ToDoModel();
      newItem.id = '1234567890';
      newItem.name = 'Task A';
      result.current.addItem(newItem);
    })

    expect(1).toEqual(result.current.data.length);
    const expected: string = '1234567890';
    const received = result.current.data[0].id;
    expect(expected).toEqual(received);
  });

   /**
   * Toggle action must set the task as complete
   */
  it('Task B must be complete, task A not change', () => {

    const { result } = renderHook(() =>
      useCustomDispatch<IToDo>(store), { wrapper });

    act(() => {
      const newItem = new ToDoModel();
      newItem.id = '1234567891';
      newItem.name = 'Task B';
      result.current.addItem(newItem);
      result.current.toggleItem(newItem);
    })

    expect(2).toEqual(result.current.data.length);
    const expected: boolean = true;
    const received = result.current.data[1].isComplete;
    expect(expected).toEqual(received);
    expect(false).toEqual(result.current.data[0].isComplete);
  });

   /**
   * Remove action must remove the task of the state
   */
  it('Task A must be removed', () => {

    const { result } = renderHook(() =>
      useCustomDispatch<IToDo>(store), { wrapper });

    act(() => {
      const item = new ToDoModel();
      item.id = '1234567890';
      result.current.removeItem(item);
    })

    expect(1).toEqual(result.current.data.length);
    const expected: string = 'Task B';
    const received = result.current.data[0].name;
    expect(expected).toEqual(received);
  });
})


/**
 * Redux must accept any other entity if extends of IEntity 
 */
describe('Testing Custom Hook with other entity', () => {

  it('Hook must add new entity different of ToDo', () => {

    const { result } = renderHook(() =>
      useCustomDispatch<ITask>(store), { wrapper });

    act(() => {
      const newItem: ITask = {
        id: '1234567892',
        displayName: 'Task C',
        isComplete: false
      };
      result.current.addItem(newItem);
    })

    expect(2).toEqual(result.current.data.length);
    const expected: string = '1234567892';
    const received = result.current.data[1].id;
    expect(expected).toEqual(received);
  });

  it('Task C must be complete, task B should still be complete', () => {

    const { result } = renderHook(() =>
      useCustomDispatch<ITask>(store), { wrapper });

    act(() => {
      const newItem: ITask = {
        id: '1234567892',
        displayName: 'Task C',
        isComplete: false
      };
      result.current.toggleItem(newItem);
    })

    expect(2).toEqual(result.current.data.length);
    const expected: boolean = true;
    const received = result.current.data[1].isComplete;
    expect(expected).toEqual(received);
    expect(true).toEqual(result.current.data[0].isComplete);
  });

  it('Task C must be removed', () => {

    const { result } = renderHook(() =>
      useCustomDispatch<ITask>(store), { wrapper });

    act(() => {
      const item = new TaskModel();
      item.id = '1234567892';
      result.current.removeItem(item);
    })

    expect(1).toEqual(result.current.data.length);
  });
})