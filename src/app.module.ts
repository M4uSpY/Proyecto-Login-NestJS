import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeesModule } from './employees/employees.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3307,
      username: 'admin',
      password: 'admin',
      database: 'db_clase',
      autoLoadEntities: true,
      synchronize: true,
    }),
    UsersModule,
    EmployeesModule,
  ],
})
export class AppModule {}
