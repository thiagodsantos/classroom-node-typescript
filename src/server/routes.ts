import { Router } from 'express';
import VendedoresAction from '../application/rest/VendedoresAction';

const routes = Router();

/* Vendedores */
routes.get('/vendedores', VendedoresAction.index);

export default routes;