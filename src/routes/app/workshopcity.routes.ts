import {Router} from 'express';
import {asyncMiddleware} from '../../middleware/asyncMiddleware';
import {WorkShopCityController} from '../../controllers/workshopcity.controller';

const WorkShopCityRouter = Router();

WorkShopCityRouter.post('/', asyncMiddleware(WorkShopCityController.createWebCall));

export default WorkShopCityRouter;
