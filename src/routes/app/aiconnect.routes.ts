import {Router} from 'express';
import {asyncMiddleware} from '../../middleware/asyncMiddleware';
import { AiConnectController } from '../../controllers/aiconnect.controller.';

const AiConnectRouter = Router();

AiConnectRouter.post('/', asyncMiddleware(AiConnectController.createWebCall));

export default AiConnectRouter;
