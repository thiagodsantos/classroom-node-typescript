import { VendedoresModel } from '../model/VendedoresModel';
import { DocumentQuery } from 'mongoose';

class VendedoresRepository {
    public getAll(): DocumentQuery<VendedoresModel[], VendedoresModel, {}> {
        return VendedoresModel.find();
    }

    public findByNome(nome: String): DocumentQuery<VendedoresModel[], VendedoresModel, {}> {
        return VendedoresModel.find({ nome });
    }

    public findByCpf(cpf: String): DocumentQuery<VendedoresModel | null, VendedoresModel, {}> {
        return VendedoresModel.findOne({ cpf });
    }

    public findByRg(rg: String): DocumentQuery<VendedoresModel | null, VendedoresModel, {}> {
        return VendedoresModel.findOne({ rg });
    }
}

export default VendedoresRepository;