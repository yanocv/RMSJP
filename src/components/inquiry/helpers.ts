import {
  INVALID_EMAIL,
  INVALID_TELEPHONE_CHARACTERS,
  INVALID_TELEPHONE_NUMBER,
  REQUIRED,
} from "./constants";

export const validateEmail = (fieldValue: string): string | null => {
  const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
  if (!emailRegex.test(fieldValue) && fieldValue) {
    return INVALID_EMAIL;
  }
  return null;
};

export const validateTelephone = (fieldValue: string): string | null => {
  const halfWidthRegex = /^[0-9]+$/;
  if (!fieldValue) {
    return REQUIRED;
  } else if (!halfWidthRegex.test(fieldValue)) {
    return INVALID_TELEPHONE_CHARACTERS;
  } else if (fieldValue.length < 10 || fieldValue.length > 11) {
    return INVALID_TELEPHONE_NUMBER;
  }
  return null;
};

// Validate required fields
export const validateRequiredFields = (
  formData: Record<string, string>
): string | null => {
  for (const key in formData) {
    if (formData[key] === "") {
      return REQUIRED;
    }
  }
  return null;
};
