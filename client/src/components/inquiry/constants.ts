const ELEVATOR_OPTIONS = ["Yes", "Stairs only", "Elevator does Not stop on our floor"];
const PACKING_SERVICE_OPTIONS = ["Yes", "No"];
const APARTMENT_SIZE_OPTIONS = ["1R", "1K", "1DK", "1LDK", "2LDK", "3LDK", "4LDK", "Other"];
const PREFECTURE = ["Tokyo", "Kanagawa", "Saitama", "Chiba"];

export const inquiryFormFieldsContact = [
	{
		name: "firstName",
		type: "text",
		label: "First name"
	},
	{
		name: "lastName",
		type: "text",
		label: "Last name"
	},
	{
		name: "email",
		type: "email",
		label: "Email"
	},
	{
		name: "phone",
		type: "tel",
		label: "Phone Number"
	},
	{
		name: "requestMovingDate",
		type: "date",
		label: "Moving date"
	},
	{
		name: "optionalMovingDate",
		type: "date",
		label: "Optional moving date"
	}
];

export const inquiryFormFieldsTo = [
	{
		name: "toApartmentSize",
		type: "select",
		label: "Apartment Size",
		values: APARTMENT_SIZE_OPTIONS
	},
	{
		name: "toPostalCode",
		type: "text",
		label: "Postal code"
	},
	{
		name: "toPrefecture",
		type: "select",
		label: "Prefecture",
		values: PREFECTURE
	},
	{
		name: "toCityWard",
		type: "text",
		label: "City/Ward"
	},
	{
		name: "toAddress",
		type: "text",
		label: "Address"
	},
	{
		name: "toBuildingName",
		type: "text",
		label: "Building name & apartment number"
	},
	{
		name: "toElevator",
		type: "select",
		label: "Elevator",
		values: ELEVATOR_OPTIONS
	},
	{
		name: "packingService",
		type: "select",
		label: "Do you want us to pack everything for you?",
		values: PACKING_SERVICE_OPTIONS
	},
	{
		name: "message",
		type: "textarea",
		label: "Message"
	}
];

export const inquiryFormFieldsFrom = [
	{
		name: "fromApartmentSize",
		type: "select",
		label: "Apartment size",

		values: APARTMENT_SIZE_OPTIONS
	},
	{
		name: "fromPostalCode",
		type: "text",
		label: "Postal code"
	},
	{
		name: "fromPrefecture",
		type: "select",
		label: "Prefecture",

		values: PREFECTURE
	},
	{
		name: "fromCityWard",
		type: "text",
		label: "City/Ward"
	},
	{
		name: "fromAddress",
		type: "text",
		label: "Address"
	},
	{
		name: "fromBuildingName",
		type: "text",
		label: "Building name & apartment number"
	},
	{
		name: "fromElevator",
		type: "select",
		label: "Elevator",
		values: ELEVATOR_OPTIONS
	}
];

export const initialFormValues = {
	firstName: "",
	lastName: "",
	email: "",
	phone: "",
	requestMovingDate: "",
	optionalMovingDate: "",
	fromApartmentSize: "",
	fromPostalCode: "",
	fromPrefecture: "",
	fromCityWard: "",
	fromAddress: "",
	fromBuildingName: "",
	fromElevator: "",
	toApartmentSize: "",
	toPostalCode: "",
	toPrefecture: "",
	toCityWard: "",
	toAddress: "",
	toBuildingName: "",
	toElevator: "",
	packingService: "",
	message: ""
};

export const REQUIRED = "This field is required";
export const INVALID_EMAIL = "Invalid email address";
export const INVALID_TELEPHONE_CHARACTERS = "Telephone number must contain only numbers";
export const INVALID_TELEPHONE_NUMBER = "Telephone number must be 10 or 11 digits";
export const INVALID_JAPAN_POSTAL_CODE = "Invalid Japan postal/zip code";
