import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type IncomeDocument = HydratedDocument<Income>;

@Schema()
export class Income {
  @Prop({ required: true })
  createAt: Date;

  @Prop({ required: true })
  account: string;

  @Prop()
  note?: string;

  @Prop()
  completeAt?: Date;

  @Prop()
  deleteAt?: Date;
}

export const IncomeSchema = SchemaFactory.createForClass(Income);
