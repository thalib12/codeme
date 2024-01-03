import { Injectable } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Student, StudentModel } from './entities/student.entity';

@Injectable()
export class StudentsService {
  constructor(
    @InjectModel(Student.name)
    private readonly student: StudentModel,
  ) {}
  create(createStudentDto: CreateStudentDto) {
    this.student.create(createStudentDto);
    return 'This action adds a new student';
  }

  findAll() {
    return this.student.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} student`;
  }

  async update(updateStudentDto: UpdateStudentDto) {
    const student = await this.student.findOne({
      rollNo: updateStudentDto.rollNo,
    });
    const attendance = student.attendance;
    const newAttendance = attendance.map((el) => {
      if (el.date === updateStudentDto.date) {
        return { date: el.date, status: updateStudentDto.status };
      }
      return { date: el.date, status: el.status };
    });

    this.student.findOneAndUpdate(
      { rollNo: updateStudentDto.rollNo },
      { attendance: newAttendance },
    );
  }

  remove(id: number) {
    return `This action removes a #${id} student`;
  }
}
