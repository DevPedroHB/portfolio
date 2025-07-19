import { toast } from "sonner";

type ActionErrorHandler = {
	serverError?: string | undefined;
	validationErrors?:
		| {
				formErrors: string[];
				fieldErrors: {
					email?: string[] | undefined;
					password?: string[] | undefined;
				};
		  }
		| undefined;
} & {
	thrownError?: Error;
};

export function useActionErrorHandler(error: ActionErrorHandler) {
	const errors: string[] = [];

	if (error.serverError) {
		errors.push(error.serverError);
	}

	if (error.validationErrors) {
		const { formErrors, fieldErrors } = error.validationErrors;

		errors.push(...formErrors, ...Object.values(fieldErrors).flat());
	}

	for (const error of errors) {
		toast.error(error);
	}

	return {
		errors,
	};
}
