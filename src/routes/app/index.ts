import {Router} from 'express';
import ThreemtAppRouter from './threemt.routes';
import WorkShopCityRouter from './workshopcity.routes';

export const appRouter = Router();

appRouter.use('/3mt', ThreemtAppRouter);
appRouter.use('/workshopcity', WorkShopCityRouter);
