import { VendedoresModel } from '../model/VendedoresModel';
import { DocumentQuery } from 'mongoose';

class VendedoresRepository {
    public find(
        params: object,
        offset: number = 0,
        limit: number = 10
    ): DocumentQuery<VendedoresModel[], VendedoresModel, {}> {
        return VendedoresModel.find(params).skip(offset).limit(limit);
    }

    public store(vendedor: object): Promise<VendedoresModel> {
        return VendedoresModel.create(vendedor);
    }

    public update(id: string, vendedor: object): DocumentQuery<VendedoresModel | null, VendedoresModel, {}> {
        return VendedoresModel.findByIdAndUpdate(id, vendedor);
    }

    public delete(id: string): DocumentQuery<VendedoresModel | null, VendedoresModel, {}> {
        return VendedoresModel.findByIdAndDelete(id);
    }
}

export default VendedoresRepository;