import { Response, Request } from 'express';
import VendedoresRepository from '../../infrastructure/mongoose/repository/VendedoresRepository';

class VendedoresAction {
    private VendedoresRepository: VendedoresRepository;

    public constructor () {
        this.VendedoresRepository = new VendedoresRepository;
    }

    public async index (req: Request, res: Response): Promise<Response> {
        const vendedores = await this.VendedoresRepository.getAll();
        return res.json(vendedores);
    }
}

export default new VendedoresAction();