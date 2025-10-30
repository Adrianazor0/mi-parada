import type { Request, Response, NextFunction } from 'express';

export const NotFoundHandler = ( req: Request, res: Response, next: NextFunction) => {
    res.status(404).json({message: "error"})
}