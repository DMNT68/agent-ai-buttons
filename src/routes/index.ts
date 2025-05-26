import {Router, Request, Response} from 'express';
import {errorMiddleware} from '../middleware/errorMiddleware';
import {appRouter} from './app';

import {rateLimit} from 'express-rate-limit';

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    limit: 5,
    message: 'Too many requests from this IP, please try again after 15 minutes',
});

export const router = Router();

router.use('/aiconnect', appRouter);

router.use(errorMiddleware);
router.use((req: Request, res: Response) => {
    res.status(404).send('<h1>Page not found</h1>');
});
