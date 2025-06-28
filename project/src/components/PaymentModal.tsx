import React from 'react';
import { X } from 'lucide-react';
import StripeCheckout from './StripeCheckout';

interface Plan {
  name: string;
  service: string;
  price: number;
  period: string;
  color: string;
}

interface PaymentModalProps {
  plan: Plan;
  onClose: () => void;
}

const PaymentModal: React.FC<PaymentModalProps> = ({ plan, onClose }) => {
  const handlePaymentSuccess = () => {
    // Handle successful payment
    setTimeout(() => {
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-gray-900">Complete Payment</h3>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="w-6 h-6 text-gray-500" />
            </button>
          </div>

          <StripeCheckout
            plan={plan}
            onSuccess={handlePaymentSuccess}
            onCancel={onClose}
          />
        </div>
      </div>
    </div>
  );
};

export default PaymentModal;