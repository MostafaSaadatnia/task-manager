import { TaskStatus } from "./taskStatus";

export interface ITask {
    id: (string | number),
    title: string,
    content: string,
    creationDate: string,
    lastModifyDate: string,
    status:TaskStatus
}