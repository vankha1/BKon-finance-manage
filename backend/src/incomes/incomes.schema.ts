import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type IncomeDocument = Income & Document;
@Schema({
  toJSON: {
    getters: true,
    virtuals: true,
  },
  timestamps: true,
})
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
