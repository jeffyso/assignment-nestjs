import { Connection, Repository } from 'typeorm';
import { CONSTANT } from '../../constant/constant';
import { EducationLevelRepository } from '../repository/education-level.repository';


export const educationLevelProviders = [
    {
        provide: CONSTANT.EDUCATION_LEVEL_REPOSITORY,
        useFactory: (connection: Connection) => connection.getCustomRepository(EducationLevelRepository),
        inject: [CONSTANT.DATABASE_CONNECTION],
    },
];
