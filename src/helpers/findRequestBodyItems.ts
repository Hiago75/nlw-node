import { Request } from 'express';

/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export function findRequestBodyItems(request: Request, [...items]: string[]) {
  const { ...requestItems } = request.body;

  items.map((item) => {
    requestItems[item];
  });

  return requestItems;
}
