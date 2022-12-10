// Entities must extends IEntity to be supported on custom reducer
export interface IEntity {
    id: string;
    isComplete: boolean;
  }