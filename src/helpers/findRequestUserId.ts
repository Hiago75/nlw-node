import { Request } from 'express';

export function findRequestUserId(request: Request): { user_id: string } {
  const { user_id } = request;

  return { user_id };
}
