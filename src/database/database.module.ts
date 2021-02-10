import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'
import { EducationLevelModule } from '../education-level/education-level.module';
@Module({
    imports: [
      TypeOrmModule.forRoot({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: '1234',
        database: 'assignment-nest',
        autoLoadEntities: true,
        synchronize: true,
      }),
      EducationLevelModule,
    ],
  })
export class DatabaseModule {}
