interface SuccessModalProps {
	onClose: () => void;
}

const SuccessModal: React.FC<SuccessModalProps> = ({ onClose }) => {
	return (
		<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
			<div className="bg-white p-6 rounded shadow-md text-center">
				<h2 className="text-2xl font-bold mb-4">Success!</h2>
				<p className="mb-4">Your inquiry has been sent successfully.</p>
				<button onClick={onClose} className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
					Close
				</button>
			</div>
		</div>
	);
};

export default SuccessModal;
