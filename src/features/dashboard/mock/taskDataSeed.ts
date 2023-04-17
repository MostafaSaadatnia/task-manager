import { ITask } from "../models/task";
import { TaskStatus } from "../models/taskStatus";

export const DATA_SEED: Partial<ITask>[] = [
    {
        id: 1,
        content: `
        <p>
        ● The user should be able to add new tasks with a title and description.
        </p>
        <p>
            ● The user should be able to view all tasks in a list view.
        </p>
        <p>
            ● The user should be able to mark a task as completed.
        </p>
        `,
        title: 'Challenge',
        creationDate: '2023-04-17',
        status: TaskStatus.InProgress
    },
    {
        id: 2,
        content: `
        <p>
        ● The user should be able to filter tasks by completion status (completed or not completed). 
        </p>
        `,
        title: 'Complete Rest Service',
        creationDate: '2023-04-17',
        status: TaskStatus.InProgress
    },
    {
        id: 3,
        content: `
        <p>
        ● Use TypeScript 
        </p>
        <p>
        ● Implement drag-and-drop functionality to reorder tasks. 
        </p>
        <p>
        ● Using Angular material CSS to implement the designs.  
        </p>
        `,
        title: 'Tommorow Tasks',
        creationDate: '2023-04-17',
        status: TaskStatus.InProgress
    }
];