import { useState, useEffect } from "react";
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import { add, remove, toggle } from "../actions/genericAction";
import { IEntity } from "../models/interface";
import combineReducers from '../reducers/indexReducer';

/**
 * 
 * @param store as requirement "The hook should accept a Redux store as an argument"
 * @returns returns an object with data and a function for each action on the reducer
 */
const useTasks = <T extends IEntity>(store: any) => {

  type AppDispatch = typeof store.dispatch;
  const useAppDispatch: () => AppDispatch = useDispatch
  const dispatch = useAppDispatch()
  type RootState = ReturnType<typeof combineReducers>;
  const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

  /* I decided not to use a useState to be cross component, any action on any component must render component where hook is implemented
   * if state change.
   */

  const data: T[] = useAppSelector((state: RootState) => state.genericReducer);


  useEffect(() => {

  }, []);

  const addItem = (item: T) => {
    dispatch(add(item));
  }

  const toggleItem = (item: T) => {
    dispatch(toggle(item));
  }

  const removeItem = (item: T) => {
    dispatch(remove(item))
  }

  return { data, addItem, removeItem, toggleItem };
};

export default useTasks;