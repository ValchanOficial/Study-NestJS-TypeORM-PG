export enum TaskStatus {
  OPEN = 'OPEN',
  IN_PROGRESS = 'IN_PROGRESS',
  DONE = 'DONE',
}

export const getNextStatus = (status: TaskStatus): TaskStatus =>
  ({
    OPEN: TaskStatus.IN_PROGRESS,
    IN_PROGRESS: TaskStatus.DONE,
  }[status] || TaskStatus.OPEN);
