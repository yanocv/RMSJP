import { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import axios from "axios";
import { validateEmail, validateJapanPostalCode, validateTelephone } from "../components/inquiry/helpers";
import styles from "../styles/inquiry.module.scss";
import {
	initialFormValues,
	inquiryFormFieldsContact,
	inquiryFormFieldsTo,
	inquiryFormFieldsFrom
} from "../components/inquiry/constants/form-fields";
import FormInput from "../components/inquiry/FormInput";
import { REQUIRED } from "../components/inquiry/constants/messages";
import { PREFECTURE_CITIES } from "../components/inquiry/constants/cities";

interface FormData {
	[key: string]: string | string[];
}

const Inquiry: NextPage = () => {
	const [formData, setFormData] = useState<FormData>(initialFormValues);
	const [errors, setErrors] = useState<{ [key: string]: string }>({});
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [fromCities, setFromCities] = useState<string[]>([]);
	const [toCities, setToCities] = useState<string[]>([]);

	const validateField = (name: string, value: string | string[]): string | null => {
		const valueStr = Array.isArray(value) ? value.join(", ") : value;
		switch (name) {
			case "email":
				return validateEmail(valueStr);
			case "phone":
				return validateTelephone(valueStr);
			case "fromPostalCode":
			case "toPostalCode":
				return validateJapanPostalCode(valueStr);
			default:
				return value === "" ? "This field is required" : null;
		}
	};

	const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
		const { name, value } = e.target;
		setErrors({
			...errors,
			[name]: validateField(name, value) || ""
		});
	};

	const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): Promise<void> => {
		e.preventDefault();
		const newErrors: { [key: string]: string } = {};
		let hasErrors = false;

		// Merge all form fields and validate each field
		const inquiryFormFields = [...inquiryFormFieldsContact, ...inquiryFormFieldsFrom, ...inquiryFormFieldsTo];

		inquiryFormFields.forEach(field => {
			const { name } = field;
			const value = formData[name];

			if ((name === "optionalMovingDate" || name === "message") && !value) {
				return;
			}

			const error = validateField(name, value);
			if (error || !value) {
				newErrors[name] = error || REQUIRED;
				hasErrors = true;
			}
		});

		if (hasErrors) {
			setErrors(newErrors);
		} else {
			try {
				await axios.post(
					"https://ipkem1wzt3.execute-api.ap-northeast-1.amazonaws.com/default/send-email",
					JSON.stringify(formData),
					{
						headers: {
							Accept: "application/json",
							"Content-Type": "application/json"
						}
					}
				);

				setIsModalOpen(true);
				setFormData(initialFormValues);
				setErrors({});
			} catch (error) {
				// TODO: Handle error
			}
		}
	};

	const handleInputChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
	): void => {
		const { name, value } = e.target as { name: string; value: string };

		// Reset city field if prefecture is changed
		if (name === "fromPrefecture" || name === "toPrefecture") {
			const cityField = name === "fromPrefecture" ? "fromCityWard" : "toCityWard";
			setFormData({
				...formData,
				[name]: value,
				[cityField]: ""
			});

			// Update available cities based on the selected prefecture
			if (name === "fromPrefecture") {
				setFromCities(PREFECTURE_CITIES[value] || []);
			} else {
				setToCities(PREFECTURE_CITIES[value] || []);
			}
		} else {
			setFormData({
				...formData,
				[name]: value || ""
			});
		}

		// Clear errors for the changed field
		if (errors[name]) {
			const newErrors = { ...errors };
			const error = validateField(name, value || "") || "";
			newErrors[name] = error;
			setErrors(newErrors);
		}
	};

	const closeModal = (): void => {
		setIsModalOpen(false);
		setFormData(initialFormValues);
		setErrors({});

		// navigate to home page
		window.location.href = "/inquiry";
	};

	return (
		<div className={styles.container}>
			<Head>
				<title>Inquiry - Roger&apos;s Moving Service JP</title>
				<meta name="description" content="Submit your moving inquiry" />
				<link rel="icon" href="/favicon.ico" />
				<link rel="canonical" href="https://www.rogermovingservice.com/inquiry" />
				<meta property="og:title" content="Inquiry - Roger's Moving Service JP" />
				<meta
					property="og:description"
					content="Submit your moving inquiry to Roger's Moving Service JP and let us help you with a seamless move in Tokyo."
				/>
				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://www.rogermovingservice.com/inquiry" />
				<meta property="og:image" content="https://www.rogermovingservice.com/images/inquiry.webp" />
			</Head>

			{/* Inquiry Form Section */}
			<section className="bg-white py-12">
				<div className="container mx-auto px-4">
					<h1 className="text-5xl font-bold text-center text-gray-900 mb-6">Moving Inquiry</h1>
					<form
						action="/submit-moving-inquiry"
						method="POST"
						className="max-w-3xl mx-auto bg-gray-100 p-8 rounded-md shadow-md"
					>
						<FormInput
							inputs={inquiryFormFieldsContact}
							error={errors}
							onChange={handleInputChange}
							handleBlur={handleBlur}
						/>

						<h2 className="text-lg font-medium text-red-700 mt-8 mb-6">Moving From</h2>
						<FormInput
							inputs={inquiryFormFieldsFrom.map(field => {
								if (field.name === "fromCityWard") {
									return { ...field, values: fromCities };
								}
								return field;
							})}
							error={errors}
							onChange={handleInputChange}
							handleBlur={handleBlur}
							fromCities={formData.fromCityWard}
						/>

						<h2 className="text-lg font-medium text-red-700 mt-8 mb-4">Moving To</h2>
						<FormInput
							inputs={inquiryFormFieldsTo.map(field => {
								if (field.name === "toCityWard") {
									return { ...field, values: toCities };
								}
								return field;
							})}
							error={errors}
							onChange={handleInputChange}
							handleBlur={handleBlur}
							toCities={formData.toCityWard}
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
			{isModalOpen && (
				<div className={`${styles.modalOverlay} ${styles.fadeIn}`} onClick={closeModal}>
					<div className={`${styles.modalContent} flex flex-col items-center`} onClick={e => e.stopPropagation()}>
						<h2 className="text-3xl font-bold text-center mb-4">Form Submitted Successfully!</h2>
						<p className="text-lg text-gray-800 text-center">
							Thank you for your inquiry. We will get back to you shortly.
						</p>
						<button
							className="mt-6 px-4 py-2 bg-blue-600 text-white text-lg font-medium rounded-md hover:bg-blue-700"
							onClick={closeModal}
						>
							Close
						</button>
					</div>
				</div>
			)}
		</div>
	);
};

export default Inquiry;
