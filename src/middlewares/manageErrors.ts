import { Request, Response } from 'express';

export function manageErrors(err: Error, request: Request, response: Response): Response {
  if (err instanceof Error) {
    return response.status(400).json({
      error: err.message,
    });
  }

  return response.status(500).json({
    status: 'error',
    message: 'Internal server error',
  });
}
