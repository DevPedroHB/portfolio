import { BaseAppError } from "./base-app-error";

export class AlreadyExistsError extends BaseAppError {
	public readonly name = "AlreadyExistsError";
	public readonly statusCode = 409;
	public readonly translationKey = "already_exists";
}
