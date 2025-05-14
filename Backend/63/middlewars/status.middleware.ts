import { CustomError } from '../api/errors/CustomError';
import { NextFunction, Response } from 'express';

export const statusCheck = (
  err: CustomError,
  _req: any,
  res: Response,
  _next: NextFunction
) => {
  console.error('Error middleware:', err);
  const statusCode = err.statusCode || 500;

  res.status(statusCode).json({
    message: err.message || 'Internal Server Error',
    details: err.details || null,
  });
};
