import { IEntity } from "./interface";

/**
 * id and isComplete must be implemented
 */
export interface IToDo extends IEntity {
    id: string;
    name: string;
    isComplete: boolean;
}

export class ToDoModel implements IToDo {

    id: string;
    name: string;
    isComplete: boolean;

    constructor() {
        this.id = '';
        this.name = '';
        this.isComplete = false;
    }

}

