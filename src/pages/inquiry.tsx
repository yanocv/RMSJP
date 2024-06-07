import { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/inquiry.module.scss";
import {
  inquiryFormFields,
  initialFormValues,
  REQUIRED,
  inquiryFormFieldsContact,
  inquiryFormFieldsTo,
  inquiryFormFieldsFrom,
} from "../components/inquiry/constants";
import { useState } from "react";
import FormInput from "../components/inquiry/FormInput";
import { validateEmail, validateTelephone } from "@components/inquiry/helpers";

const Inquiry: NextPage = () => {
  const [formData, setFormData] = useState(initialFormValues);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validateField = (name: string, value: string): string | null => {
    switch (name) {
      case "email":
        return validateEmail(value);
      case "phone":
        return validateTelephone(value);
      default:
        return value === "" ? "This field is required" : "";
    }
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    const newErrors: { [key: string]: string } = {};
    let hasErrors = false;

    // Merge all form fields and validate each field
    const inquiryFormFields = [
      ...inquiryFormFieldsContact,
      ...inquiryFormFieldsFrom,
      ...inquiryFormFieldsTo,
    ];

    inquiryFormFields.forEach((field) => {
      const { name, required } = field;
      const value = formData[name];
      const error = validateField(name, value);
      if (error || (required && !value)) {
        newErrors[name] = error || REQUIRED;
        hasErrors = true;
      }
    });

    if (hasErrors) {
      setErrors(newErrors);
    } else {
      // Handle form submission (e.g., send form data to the server)
      console.log(formData);
      console.log("Form submitted successfully!");
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ): void => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    if (errors[name]) {
      const newErrors = { ...errors };
      newErrors[name] = validateField(name, value);
      setErrors(newErrors);
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Inquiry - Roger&apos;s Moving Service JP</title>
        <meta name="description" content="Submit your moving inquiry" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Inquiry Form Section */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold text-center text-gray-900 mb-6">
            Moving Inquiry
          </h1>
          <form
            action="/submit-moving-inquiry"
            method="POST"
            className="max-w-3xl mx-auto bg-gray-100 p-8 rounded-md shadow-md"
          >
            <FormInput
              inputs={inquiryFormFieldsContact}
              error={errors}
              onChange={handleInputChange}
            />

            <h2 className="text-lg font-medium text-red-700 mt-8 mb-6">
              Moving From
            </h2>
            <FormInput
              inputs={inquiryFormFieldsFrom}
              error={errors}
              onChange={handleInputChange}
            />

            <h2 className="text-lg font-medium text-red-700 mt-8 mb-4">
              Moving To
            </h2>
            <FormInput
              inputs={inquiryFormFieldsTo}
              error={errors}
              onChange={handleInputChange}
            />

            <div className="text-center">
              <button
                type="submit"
                className="px-6 py-3 bg-blue-600 text-white text-lg font-medium rounded-md hover:bg-blue-700"
                onClick={handleSubmit}
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Inquiry;
