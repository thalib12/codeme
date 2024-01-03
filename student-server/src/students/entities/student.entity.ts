import { ModelDefinition, Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Model } from 'mongoose';

export type StudentDocument = Document<Student>;

export type StudentModel = Model<Student>;

class Attendance {
  date: string;
  status: string;
}

@Schema()
export class Student extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  rollNo: number;

  @Prop({ default: [{ date: '', status: '' }] })
  attendance: Attendance[];
}

export const StudentSchema = SchemaFactory.createForClass<Student>(Student);

export const StudentModelDefinition: ModelDefinition = {
  name: Student.name,
  schema: StudentSchema,
  collection: 'student',
};
