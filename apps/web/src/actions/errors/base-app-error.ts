export abstract class BaseAppError extends Error {
	public abstract readonly name: string;
	public abstract readonly statusCode: number;
	public abstract readonly translationKey: string;

	constructor(message?: string, options?: ErrorOptions) {
		super(message, options);

		Object.setPrototypeOf(this, new.target.prototype);
	}
}
