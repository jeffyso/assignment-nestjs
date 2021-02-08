import { Connection, Repository } from 'typeorm';
import { CONSTANT } from 'src/constant/constant';
import { EducationLevelRepository } from '../domain/repository/educationlevel.repository';

export const educationLevelProviders = [
    {
        provide: CONSTANT.EDUCATIONLEVEL_REPOSITORY,
        useFactory: (connection: Connection) => connection.getRepository(EducationLevelRepository),
        inject: [CONSTANT.DATABASE_CONNECTION],
    },
];