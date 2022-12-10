
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {
  ADD,
  TOGGLE,
  DELETE,
} from "../actions/genericAction";
import { IEntity } from '../models/interface';


/**
 * 
 * @param items arrays of any entity that extends IEntity
 * @param action ADD: add a new item od the list, TOGGLE: toggle isComplete property, DELETE: remove item on the list
 * @returns new state of array
 */
function genericReducer<T extends IEntity>(items: T[] = [], action: PayloadAction<any>) {
  const { type, payload } = action;

  switch (type) {
    case ADD:
      return [...items, payload];

    case TOGGLE:
      const element = items.find(x => x.id == payload.id);
      if (element) {
        element.isComplete = !element.isComplete;
        return [...items];
      } else {
        return items;
      }

    case DELETE:
      return items.filter(x => x.id != payload.id);

    default:
      return items;
  }
};

export default genericReducer;