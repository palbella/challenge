import { IEntity } from "./interface";

/**
 * id and isComplete must be implemented
 */
export interface ITask extends IEntity {
    id: string;
    displayName: string;
    isComplete: boolean;
}

export class TaskModel implements ITask {

    id: string;
    displayName: string;
    isComplete: boolean;

    constructor() {
        this.id = '';
        this.displayName = '';
        this.isComplete = false;
    }

}

