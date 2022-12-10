import { IEntity } from "../models/interface";

/**
 * @ADD add a new item on the state, the entity must extends IEntity 
 * @TOGGLE receive the object, object must extends IEntity property isComplete must toggle boolean value id id match
 * @DELETE receive the object, object must extends IEntity, if id match with any on the state list must be removed
 */
export const ADD = "ADD";
export const TOGGLE = "TOGGLE";
export const DELETE = "DELETE";
  
  export const add = <T extends IEntity> (item: T) => {
      return {
        type: ADD,
        payload: item,
      };
  };
  
  export const toggle = <T extends IEntity> (item: T) => {
      return {
        type: TOGGLE,
        payload: item,
      };
  };
  
  export const remove = <T extends IEntity> (item: T) =>  {
      return {
        type: DELETE,
        payload: item,
      };
  };
  
  