import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

interface IPayload {
  sub: string;
}

export function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction,
): Response | void {
  // Receives the Token
  const bearerToken = request.headers.authorization;

  // Verifies if is there a Token.
  if (!bearerToken) {
    return response.status(401).end();
  }

  // Format bearerToken
  const [, token] = bearerToken.split(' ');

  try {
    // Verifies if user Token
    const { sub } = verify(token, process.env.JWT_SECRET as string) as IPayload;

    // Recover user information
    request.user_id = sub;

    return next();
  } catch (err) {
    return response.status(401).end();
  }
}
