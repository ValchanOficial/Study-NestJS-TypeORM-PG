import { IsNotEmpty } from 'class-validator';
// https://github.com/typestack/class-validator

export class CreateTaskDTO {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  description: string;
}
