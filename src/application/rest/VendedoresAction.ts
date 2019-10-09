import { Response, Request } from 'express';
import VendedoresRepository from '../../infrastructure/mongoose/repository/VendedoresRepository';

class VendedoresAction {
    private VendedoresRepository: VendedoresRepository;

    public constructor () {
        this.VendedoresRepository = new VendedoresRepository;
    }

    public async index(req: Request, res: Response): Promise<Response> {
        const vendedores = await this.VendedoresRepository.get();
        return res.json(vendedores);
    }

    public async store(req: Request, res: Response): Promise<Response> {
        const vendedor = await this.VendedoresRepository.store(req.body);
        return res.json(vendedor);
    }

    public async update(req: Request, res: Response) {
        const vendedor = await this.VendedoresRepository.update(<string>req.params.id, req.body);
        return res.json(vendedor);
    }

    public async delete(req: Request, res: Response) {
        const vendedor = await this.VendedoresRepository.delete(<string>req.params.id);
        return res.json(vendedor);
    }
}

export default new VendedoresAction;