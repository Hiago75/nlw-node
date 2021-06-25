import { CustomError } from './interfaces/AbstractCustomError';

export class BadRequest extends CustomError {
  protected _statusCode = 401;
}
