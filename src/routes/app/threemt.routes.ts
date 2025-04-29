import {Router} from 'express';
import {asyncMiddleware} from '../../middleware/asyncMiddleware';
import {ThreemtController} from '../../controllers/threemt.controller';

const ThreemtAppRouter = Router();

ThreemtAppRouter.post('/', asyncMiddleware(ThreemtController.createWebCall));

export default ThreemtAppRouter;
