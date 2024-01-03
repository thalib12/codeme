import { PartialType } from '@nestjs/mapped-types';
import { CreateStudentDto } from './create-student.dto';

export class UpdateStudentDto {
  rollNo: number;
  date: string;
  status: string;
}
