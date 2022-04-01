import { NotFoundException } from '@nestjs/common';
import { Injectable } from '@nestjs/common/decorators';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../auth/user.entity';
import { CreateTaskDTO } from './dto/create-task.dto';
import { GetTasksFilterDTO } from './dto/get-tasks-filter.dto';
import { Task } from './task.entity';
import { getNextStatus } from './task.model';
import { TasksRepository } from './tasks.repository';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(TasksRepository)
    private tasksRepository: TasksRepository,
  ) {}

  getTasks(filterDTO: GetTasksFilterDTO, user: User): Promise<Array<Task>> {
    return this.tasksRepository.getTasks(filterDTO, user);
  }

  async getTaskById(id: string, user: User): Promise<Task> {
    const found = await this.tasksRepository.findOne({
      where: { id, user },
    });
    if (!found) throw new NotFoundException();
    return found;
  }

  createTask(createTaskDto: CreateTaskDTO, user: User): Promise<Task> {
    return this.tasksRepository.createTask(createTaskDto, user);
  }

  async deleteTask(id: string, user: User): Promise<void> {
    const result = await this.tasksRepository.delete({ id, user });
    if (result.affected === 0) throw new NotFoundException();
  }

  async updateTaskStatus(id: string, user: User): Promise<Task> {
    const task = await this.getTaskById(id, user);
    task.status = getNextStatus(task.status);
    await this.tasksRepository.save(task);
    return task;
  }

  async updateTask(id: string, body: CreateTaskDTO, user: User): Promise<Task> {
    const task = await this.getTaskById(id, user);
    Object.assign(task, body);
    await this.tasksRepository.save(task);
    return task;
  }
}
