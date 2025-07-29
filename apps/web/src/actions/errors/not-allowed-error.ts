import { BaseAppError } from "./base-app-error";

export class NotAllowedError extends BaseAppError {
	public readonly name = "NotAllowedError";
	public readonly statusCode = 403;
	public readonly translationKey = "not_allowed";
}
