/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { UserSchema } from './user-schema';
import { MongooseModule } from '@nestjs/mongoose';
import { UserService } from './user-service';
import { UserController } from './user-controller';


@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost:27017/userdata'),
  MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class AppModule {}
