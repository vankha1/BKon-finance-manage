import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Income, IncomeDocument } from './incomes.schema';
import { Model } from 'mongoose';
import { CreateIncomeDto } from './dto/create-income.dto';
import { UpdateIncomeDto } from './dto/update-income.dto';

@Injectable()
export class IncomesService {
  constructor(
    @InjectModel(Income.name)
    private readonly incomeModel: Model<IncomeDocument>,
  ) {}

  async findAll(): Promise<Income[]> {
    return this.incomeModel.find({}).exec();
  }

  async create(createIncomeDto: CreateIncomeDto): Promise<Income> {
    const createdIncome = new this.incomeModel({
      ...createIncomeDto,
      createdAt: new Date(),
    });
    return await createdIncome.save();
  }

  async findById(id: string): Promise<Income> {
    const income = await this.incomeModel.findById(id).exec();
    if (!income) {
      throw new NotFoundException('Income not found');
    }
    return income;
  }

  async update(id: string, updateIncomeDto: UpdateIncomeDto): Promise<Income> {
    const existingIncome = await this.incomeModel
      .findByIdAndUpdate(id, updateIncomeDto, { new: true })
      .exec();
    if (!existingIncome) {
      throw new NotFoundException('Income not found');
    }
    return existingIncome;
  }

  async delete(id: string): Promise<Income> {
    const deletedIncome = await this.incomeModel.findByIdAndDelete(id).exec();
    if (!deletedIncome) {
      throw new NotFoundException('Income not found');
    }
    return deletedIncome;
  }
}
