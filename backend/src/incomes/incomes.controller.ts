import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
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
import { Income } from './incomes.schema';

@Controller('incomes')
@ApiTags('incomes')
export class IncomesController {
  constructor(private readonly incomesService: IncomesService) {}

  @Post()
  @ApiCreatedResponse({
    description: 'Created Succesfully',
    type: Income,
    isArray: false,
  })
  @ApiBadRequestResponse({ description: 'Bad Request' })
  async create(@Body() createIncomeDto: CreateIncomeDto) {
    return this.incomesService.create(createIncomeDto);
  }

  @Get()
  @ApiOkResponse({
    type: Income,
    isArray: true,
  })
  async findAll() {
    return this.incomesService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({
    type: Income,
    isArray: false,
  })
  @ApiNotFoundResponse({
    description: 'Not Found',
  })
  async findOne(@Param('id') id: string) {
    const income = await this.incomesService.findById(id);
    if (!income) {
      throw new NotFoundException('Income not found');
    }
    return income;
  }

  @Put(':id')
  @ApiOkResponse({
    type: Income,
    isArray: false,
  })
  @ApiNotFoundResponse({
    description: 'Not Found',
  })
  @ApiBadRequestResponse({ description: 'Bad Request' })
  async update(
    @Param('id') id: string,
    @Body() updateIncomeDto: UpdateIncomeDto,
  ) {
    return this.incomesService.update(id, updateIncomeDto);
  }

  @Delete(':id')
  @ApiOkResponse({
    description: 'Deleted Successfully',
  })
  @ApiNotFoundResponse({
    description: 'Not Found',
  })
  async delete(@Param('id') id: string) {
    return this.incomesService.delete(id);
  }
}
