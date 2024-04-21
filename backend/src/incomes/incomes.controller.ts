import { ApiTags } from '@nestjs/swagger';
import { IncomesService } from './incomes.service';
import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  NotFoundException,
} from '@nestjs/common';
import { UpdateIncomeDto } from './dto/update-income.dto';
import { CreateIncomeDto } from './dto/create-income.dto';

@Controller('incomes')
@ApiTags('incomes')
export class IncomesController {
  constructor(private readonly incomesService: IncomesService) {}

  @Post()
  async create(@Body() createIncomeDto: CreateIncomeDto) {
    return this.incomesService.create(createIncomeDto);
  }

  @Get()
  async findAll() {
    return this.incomesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const income = await this.incomesService.findById(id);
    if (!income) {
      throw new NotFoundException('Income not found');
    }
    return income;
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateIncomeDto: UpdateIncomeDto,
  ) {
    return this.incomesService.update(id, updateIncomeDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.incomesService.delete(id);
  }
}
