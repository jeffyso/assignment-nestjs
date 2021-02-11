import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { EntitySchema } from 'typeorm';
type Entity = Function | string | EntitySchema<any>;
export const createTestConfiguration = (
    entities: Entity[],
): TypeOrmModuleOptions => ({
    type: 'postgres',
    database: 'test',
    entities,
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '1234',
    dropSchema: true,
    synchronize: true,
    logging: false,
    autoLoadEntities: true,
    keepConnectionAlive: true

});
