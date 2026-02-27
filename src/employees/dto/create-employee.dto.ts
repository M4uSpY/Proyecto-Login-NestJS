import { IsDecimal, IsNumber, IsString } from "class-validator";

export class CreateEmployeeDto {
  @IsString()
  fullName: string;

  @IsString()
  position: string;

  @IsNumber()
  salary?: number;

  @IsString()
  phone: string;
}
