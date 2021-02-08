import { EntityRepository, Repository } from 'typeorm';
import { EducationLevel } from '../models/education-level.entity'

@EntityRepository(EducationLevel)
export class EducationLevelRepository extends Repository<EducationLevel> {

    findByUsername(firstName: string): Promise<EducationLevel[]> {
        return this.createQueryBuilder("education_level")
                .addSelect("education_level.firstName")
                .where("firstName = :firstName", { firstName })
                .getMany()
    }
}