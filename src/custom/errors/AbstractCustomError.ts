export abstract class CustomError extends Error {
  constructor(message: string) {
    super(message);
    Object.setPrototypeOf(this, new.target.prototype);
  }
  protected _statusCode: number;
  get statusCode(): number {
    return this._statusCode;
  }
}
