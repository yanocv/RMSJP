export const ELEVATOR_OPTIONS = [
  "Yes",
  "Stairs only",
  "Elevator does Not stop on our floor",
];

export const PACKING_SERVICE_OPTIONS = ["Yes", "No"];

export const inquiryFormFieldsContact = [
  {
    name: "firstName",
    type: "text",
    label: "First name",
    required: true,
  },
  {
    name: "lastName",
    type: "text",
    label: "Last name",
    required: true,
  },
  {
    name: "email",
    type: "email",
    label: "Email",
    required: true,
  },
  {
    name: "phone",
    type: "tel",
    label: "Phone Number",
    required: true,
  },
  {
    name: "requestMovingDate",
    type: "date",
    label: "Moving date",
    required: true,
  },
  {
    name: "optionalMovingDate",
    type: "date",
    label: "Optional moving date",
    required: true,
  },
  // Moving From fields

  // Moving To fields
];

export const inquiryFormFieldsTo = [
  {
    name: "toApartmentSize",
    type: "select",
    label: "Apartment Size",
    values: ["1R", "1K", "1DK", "1LDK", "2LDK", "3LDK", "4LDK"],
  },
  {
    name: "toPostalCode",
    type: "text",
    label: "Postal code",
    required: true,
  },
  {
    name: "toPrefecture",
    type: "select",
    label: "Prefecture",
    required: true,
    values: ["Tokyo", "Kanagawa", "Saitama", "Chiba"],
  },
  {
    name: "toCityWard",
    type: "text",
    label: "City/Ward",
    required: true,
  },
  {
    name: "toAddress",
    type: "text",
    label: "Address",
    required: true,
  },
  {
    name: "toBuildingName",
    type: "text",
    label: "Building name & apartment number",
  },
  {
    name: "toElevator",
    type: "select",
    label: "Elevator",
    values: ELEVATOR_OPTIONS,
    required: true,
  },
  // Packing Service
  {
    name: "packingService",
    type: "select",
    label: "Do you want us to pack everything for you?",
    values: PACKING_SERVICE_OPTIONS,
    required: true,
  },
];

export const inquiryFormFieldsFrom = [
  {
    name: "fromApartmentSize",
    type: "select",
    label: "Apartment size",
    required: true,
    values: ["1R", "1K", "1DK", "1LDK", "2LDK", "3LDK", "4LDK"],
  },
  {
    name: "fromPostalCode",
    type: "text",
    label: "Postal code",
    required: true,
  },
  {
    name: "fromPrefecture",
    type: "select",
    label: "Prefecture",
    required: true,
    values: ["Tokyo", "Kanagawa", "Saitama", "Chiba"],
  },
  {
    name: "fromCityWard",
    type: "text",
    label: "City/Ward",
    required: true,
  },
  {
    name: "fromAddress",
    type: "text",
    label: "Address",
    required: true,
  },
  {
    name: "fromBuildingName",
    type: "text",
    label: "Building name & apartment number",
    required: true,
  },
  {
    name: "fromElevator",
    type: "select",
    label: "Elevator",
    values: ELEVATOR_OPTIONS,
    required: true,
  },
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
  fromElevator: ELEVATOR_OPTIONS,
  toApartmentSize: "",
  toPostalCode: "",
  toPrefecture: "",
  toCityWard: "",
  toAddress: "",
  toBuildingName: "",
  toElevator: ELEVATOR_OPTIONS,
  packingService: PACKING_SERVICE_OPTIONS,
};

export const REQUIRED = "This field is required";
export const INVALID_EMAIL = "Invalid email address";
export const INVALID_TELEPHONE_CHARACTERS =
  "Telephone number must contain only numbers";
export const INVALID_TELEPHONE_NUMBER =
  "Telephone number must be 10 or 11 digits";
