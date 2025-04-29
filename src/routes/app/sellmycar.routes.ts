import {Router} from 'express';
import {asyncMiddleware} from '../../middleware/asyncMiddleware';
import {SellMyCarController} from '../../controllers/sellmycar.controller';

const SellMyCarRouter = Router();

SellMyCarRouter.post('/', asyncMiddleware(SellMyCarController.createWebCall));

export default SellMyCarRouter;
