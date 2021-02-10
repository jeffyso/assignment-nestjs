import { IsNotEmpty, IsNumber } from "class-validator";

export class CreateEducationLevelDto {
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    id: number;

}
