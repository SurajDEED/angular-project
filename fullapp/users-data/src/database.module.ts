/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './user-schema';
@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/userdata'),
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
  ],
})
export class DatabaseModule {}
