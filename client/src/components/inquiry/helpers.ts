import {
	INVALID_EMAIL,
	INVALID_JAPAN_POSTAL_CODE,
	INVALID_TELEPHONE_CHARACTERS,
	INVALID_TELEPHONE_NUMBER,
	REQUIRED
} from "./constants";

export const validateEmail = (fieldValue: string): string | null => {
	const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
	if (!fieldValue) {
		return REQUIRED;
	}
	if (!emailRegex.test(fieldValue) && fieldValue) {
		return INVALID_EMAIL;
	}
	return null;
};

export const validateTelephone = (fieldValue: string): string | null => {
	const halfWidthRegex = /^[0-9]+$/;
	if (!fieldValue) {
		return REQUIRED;
	}
	if (!halfWidthRegex.test(fieldValue)) {
		return INVALID_TELEPHONE_CHARACTERS;
	}
	if (fieldValue.length < 10 || fieldValue.length > 11) {
		return INVALID_TELEPHONE_NUMBER;
	}
	return null;
};

export const validateJapanPostalCode = (fieldValue: string): string | null => {
	const japanPostalCodeRegex = /^\d{3}-?\d{4}$/;
	if (!fieldValue) {
		return REQUIRED;
	}
	if (!japanPostalCodeRegex.test(fieldValue)) {
		return INVALID_JAPAN_POSTAL_CODE;
	}
	return null;
};
