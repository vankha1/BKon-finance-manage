import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { IncomesModule } from './incomes/incomes.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://tintranthanh:sherlockhomes17@cluster0.fnukyrv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
    ),
    UserModule,
    IncomesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
