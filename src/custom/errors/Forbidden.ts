import { CustomError } from './interfaces/AbstractCustomError';

export class Forbidden extends CustomError {
  protected _statusCode = 403;
}
