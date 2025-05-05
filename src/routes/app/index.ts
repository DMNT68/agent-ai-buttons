import {Router} from 'express';
import ThreemtAppRouter from './threemt.routes';
import WorkShopCityRouter from './workshopcity.routes';
import SellMyCarRouter from './sellmycar.routes';
import AiConnectRouter from './aiconnect.routes';

export const appRouter = Router();

appRouter.use('/3mt', ThreemtAppRouter);
appRouter.use('/workshopcity', WorkShopCityRouter);
appRouter.use('/sellmycar', SellMyCarRouter);
appRouter.use('/aiconnect', AiConnectRouter);
