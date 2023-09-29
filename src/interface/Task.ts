export type TaskStatus = "todo" | "inProgress" | "done";

export interface Task {
  id: number;
  status: TaskStatus;
  date: string;
  description: string;
}
