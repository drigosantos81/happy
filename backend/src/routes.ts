import { Router } from 'express';
import multer from 'multer';

import uploadConfig from './config/uploads';
import OrphanagesControllers from './controllers/OrphanagesControllers';

const routes = Router();
const upload = multer(uploadConfig);

routes.get('/orphanages', OrphanagesControllers.index);
routes.get('/orphanages/:id', OrphanagesControllers.show);
routes.post('/orphanages', upload.array('images'), OrphanagesControllers.create);

export default routes;