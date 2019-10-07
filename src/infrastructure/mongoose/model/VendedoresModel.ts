import { Schema, Document, Model, model } from 'mongoose';
import { VendedoresInterface } from '../interfaces/VendedoresInterface';

const VendedoresSchema = new Schema({
    nome: { type: String, required: true },
    rg  : { type: String },
    cpf : { type: String }
}, {
    timestamps: true
});

export interface VendedoresModel extends VendedoresInterface, Document {}

export const VendedoresModel: Model<VendedoresModel> = model<VendedoresModel>('Vendedores', VendedoresSchema);