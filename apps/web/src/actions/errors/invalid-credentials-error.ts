import { BaseAppError } from "./base-app-error";

export class InvalidCredentialsError extends BaseAppError {
	public readonly name = "InvalidCredentialsError";
	public readonly statusCode = 401;
	public readonly translationKey = "invalid_credentials";
}
