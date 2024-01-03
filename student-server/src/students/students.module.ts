import { Module } from '@nestjs/common';
import { StudentsService } from './students.service';
import { StudentsController } from './students.controller';
import { StudentModelDefinition } from './entities/student.entity';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([StudentModelDefinition])],
  controllers: [StudentsController],
  providers: [StudentsService],
})
export class StudentsModule {}
