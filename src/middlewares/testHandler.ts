import type { Request, Response, NextFunction } from 'express';

export const testHandler = (req: Request, res: Response, next: NextFunction) => {
    console.log(req.method);
    next();
}