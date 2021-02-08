import { Controller, Module } from "@nestjs/common";
import { CONSTANT } from "src/constant/constant";
import { EducationLevelService } from "src/domain/services/education-level.service";
import { educationLevelProviders } from "src/providers/EducationLevel.provider";
import { EducationlevelController } from "./educationlevel/educationlevel.controller";
@Module({
    imports: [
    ],
    controllers: [EducationlevelController],
    providers: [
        EducationLevelService,
        ...educationLevelProviders
    ],
    exports: [
        EducationLevelService,
    ]
})
export class ControllerModule { }
