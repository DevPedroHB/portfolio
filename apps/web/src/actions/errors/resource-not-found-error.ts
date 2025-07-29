import { BaseAppError } from "./base-app-error";

export class ResourceNotFoundError extends BaseAppError {
	public readonly name = "ResourceNotFoundError";
	public readonly statusCode = 404;
	public readonly translationKey = "resource_not_found";
}
