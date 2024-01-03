import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentsModule } from './students/students.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    StudentsModule,
    MongooseModule.forRoot('mongodb://localhost:27017/student'),
  ],
  controllers: [AppController],

  providers: [AppService],
})
export class AppModule {}
