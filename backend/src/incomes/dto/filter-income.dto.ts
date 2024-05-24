import { IsString, IsOptional, IsDateString } from 'class-validator';

export class FilterIncomeDto {
  @IsString()
  uid: string;

  @IsOptional()
  @IsDateString()
  startDate?: string;

  @IsOptional()
  @IsDateString()
  endDate?: string;
}
