import React, { useState } from 'react';
import { CreditCard, Shield, Lock, ExternalLink, AlertCircle } from 'lucide-react';

interface Plan {
  name: string;
  service: string;
  price: number;
  period: string;
  color: string;
  stripeLink: string;
}

interface StripeCheckoutProps {
  plan: Plan;
  onSuccess: () => void;
  onCancel: () => void;
}

const StripeCheckout: React.FC<StripeCheckoutProps> = ({ plan, onSuccess, onCancel }) => {
  const [isRedirecting, setIsRedirecting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleStripePayment = () => {
    try {
      setIsRedirecting(true);
      setError(null);
      
      // Redirect to the specific Stripe payment link for this plan
      window.open(plan.stripeLink, '_blank');
      
      // Reset state after a short delay
      setTimeout(() => {
        setIsRedirecting(false);
      }, 2000);
      
    } catch (err) {
      setError('Failed to redirect to payment page');
      setIsRedirecting(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-gray-50 rounded-xl p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="font-semibold text-gray-900">{plan.service}</span>
          <span className="text-sm text-gray-600">{plan.name} Plan</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-gray-900">₹{plan.price}</span>
          <span className="text-gray-600">/{plan.period}</span>
        </div>
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
          <div>
            <p className="text-red-800 font-medium">Payment Error</p>
            <p className="text-red-700 text-sm mt-1">{error}</p>
          </div>
        </div>
      )}

      <div className="space-y-4">
        <div className="flex items-center gap-3 text-sm text-gray-600">
          <Shield className="w-5 h-5 text-green-500" />
          <span>SSL encrypted & secure payment</span>
        </div>
        <div className="flex items-center gap-3 text-sm text-gray-600">
          <Lock className="w-5 h-5 text-blue-500" />
          <span>Your data is protected with bank-grade security</span>
        </div>
        <div className="flex items-center gap-3 text-sm text-gray-600">
          <CreditCard className="w-5 h-5 text-purple-500" />
          <span>Supports all major credit/debit cards</span>
        </div>
      </div>

      <div className="border-t pt-6">
        <h4 className="font-semibold text-gray-900 mb-4">Secure Stripe Payment</h4>
        
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
          <div className="flex items-start gap-3">
            <ExternalLink className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-blue-800 font-medium">Secure Checkout</p>
              <p className="text-blue-700 text-sm mt-1">
                You'll be redirected to Stripe's secure payment page to complete your purchase.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <button
            onClick={handleStripePayment}
            disabled={isRedirecting}
            className={`w-full p-4 border-2 rounded-xl transition-all duration-200 flex items-center justify-center gap-3 ${
              isRedirecting
                ? 'border-gray-200 bg-gray-50 cursor-not-allowed'
                : 'border-blue-300 bg-blue-50 hover:bg-blue-100 cursor-pointer'
            }`}
          >
            <CreditCard className="w-6 h-6 text-blue-600" />
            <div className="text-center">
              <p className="font-medium text-blue-900">
                {isRedirecting ? 'Redirecting to Stripe...' : 'Pay with Stripe'}
              </p>
              <p className="text-sm text-blue-700">Secure payment processing</p>
            </div>
            {!isRedirecting && <ExternalLink className="w-4 h-4 text-blue-600" />}
          </button>
        </div>
      </div>

      <div className="flex gap-3">
        <button
          onClick={onCancel}
          disabled={isRedirecting}
          className="flex-1 py-3 px-6 border border-gray-300 rounded-xl font-medium text-gray-700 hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Cancel
        </button>
        <button
          onClick={handleStripePayment}
          disabled={isRedirecting}
          className={`flex-1 py-3 px-6 rounded-xl font-bold text-white transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl bg-gradient-to-r ${plan.color} disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none`}
        >
          {isRedirecting ? (
            <div className="flex items-center justify-center gap-2">
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              Redirecting...
            </div>
          ) : (
            <div className="flex items-center justify-center gap-2">
              <span>Pay ₹{plan.price}</span>
              <ExternalLink className="w-4 h-4" />
            </div>
          )}
        </button>
      </div>

      <p className="text-xs text-gray-500 text-center">
        By continuing, you agree to our Terms of Service and Privacy Policy. 
        Payment will be processed securely through Stripe.
      </p>
    </div>
  );
};

export default StripeCheckout;