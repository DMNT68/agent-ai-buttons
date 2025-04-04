import {Router} from 'express';
import ThreemtAppRouter from './threemt.routes';

export const appRouter = Router();

appRouter.use('/3mt', ThreemtAppRouter);
