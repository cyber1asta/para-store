import React, { useState } from 'react';
import { FaTruck, FaMoneyBillWave, FaShieldAlt, FaTimes } from 'react-icons/fa';
import GooglePayButton from "@google-pay/button-react";
import { PayPalButtons } from '@paypal/react-paypal-js';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import { useSelector } from 'react-redux';

const PopupCartTotal = ({ totalPr, onClose }) => {
  const [showDeliveryForm, setShowDeliveryForm] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // إعدادات الشحن والضرائب بالدرهم
  const shipping = 30;
  const tax = 20;

  // المجموع النهائي مع الشحن والضرائب
  const finalTotalInOriginalCurrency = totalPr + shipping + tax;

  // التعامل مع ارسال تفاصيل الشحن
  const handleSubmitDelivery = (e) => {
    e.preventDefault();
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      setShowDeliveryForm(false);
    }, 3000);
  };

  // التعامل مع النقر على زر PayPal
  const handlePayPalClick = () => {
    window.location.href = "https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=XXXX";
  };

  // التعامل مع النقر على زر الدفع بواسطة البطاقة
  const handleCardPaymentClick = () => {
    window.location.href = "https://checkout.stripe.com/pay/XXXX";
  };

  // رسالة النجاح بعد تأكيد الطلب
  const SuccessMessage = () => (
    <div className="bg-green-500 text-white px-4 py-2 absolute top-0 left-0 right-0 text-center animate-fadeIn">
      Order placed successfully! We'll deliver to your address.
    </div>
  );

  // الحصول على العناصر الموجودة في السلة
  const cartItems = useSelector((state) => state.cart.items);
  const cartLen = cartItems.length;

  return (
    <div className="fixed top-0 right-0 w-1/4 h-full bg-white bg-opacity-90 p-6 overflow-auto z-50">
      <button onClick={onClose} className="absolute right-4 top-4 text-gray-500 hover:text-gray-700">
        <FaTimes className="text-2xl" />
      </button>

      {showSuccess && <SuccessMessage />}

      <h2 className="text-xl font-bold text-center mb-6">Order Summary</h2>
      <div className="space-y-3 text-lg">
        <div className="flex justify-between items-center">
          <span>Subtotal</span>
          <span className="font-semibold">{totalPr} MAD</span> {/* سعر المنتج بدون تغييره */}
        </div>
        <div className="flex justify-between items-center">
          <span>Shipping</span>
          <span className="font-semibold">{shipping} MAD</span>
        </div>
        <div className="flex justify-between items-center">
          <span>Tax</span>
          <span className="font-semibold">{tax} MAD</span>
        </div>
        <div className="border-t pt-3 mt-3 text-lg">
          <div className="flex justify-between items-center">
            <span className="font-bold">Total</span>
            <span className="font-bold">{finalTotalInOriginalCurrency} MAD</span>
          </div>
        </div>
      </div>

      <h3 className="text-lg font-semibold text-center mt-6">Select Payment Method</h3>

      <button
        onClick={() => setShowDeliveryForm(!showDeliveryForm)}
        className="w-full h-12 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all duration-300 flex items-center justify-center space-x-2 mt-3"
      >
        <FaMoneyBillWave />
        <span>Cash on Delivery</span>
      </button>

      {showDeliveryForm && (
        <form onSubmit={handleSubmitDelivery} className="space-y-4 mt-4 text-lg">
          <input
            required
            type="text"
            placeholder="Full Name"
            className="w-full h-12 px-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            required
            type="tel"
            placeholder="Phone Number"
            className="w-full h-12 px-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            required
            type="text"
            placeholder="Address"
            className="w-full h-12 px-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            required
            type="text"
            placeholder="City"
            className="w-full h-12 px-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full h-12 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300"
          >
            Confirm Order
          </button>
        </form>
      )}

      {/* Google Pay Button */}
      <div className="gpayBtnHold flex justify-center mt-3">
        <GooglePayButton
          className="gpayHold w-full h-12"
          environment="TEST"
          paymentRequest={{
            apiVersion: 2,
            apiVersionMinor: 0,
            allowedPaymentMethods: [
              {
                type: "CARD",
                parameters: {
                  allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
                  allowedCardNetworks: ["MASTERCARD", "VISA", "AMEX"],
                },
                tokenizationSpecification: {
                  type: "PAYMENT_GATEWAY",
                  parameters: {
                    gateway: "example",
                    gatewayMerchantId: "exampleGatewayMerchantId",
                  },
                },
              },
            ],
            merchantInfo: {
              merchantId: "17613812255336763067",
              merchantName: "Demo Only",
            },
            transactionInfo: {
              totalPriceStatus: "FINAL",
              totalPriceLabel: "Total",
              totalPrice: finalTotalInOriginalCurrency.toString(),
              currencyCode: "MAD",
              countryCode: "MA",
            },
          }}
          onLoadPaymentData={(paymentData) => {
            console.log(paymentData.paymentMethodData);
          }}
        />
      </div>

      {/* PayPal Button */}
      <div className="paypalHold mt-3">
        <PayPalScriptProvider>
          <PayPalButtons
            aria-label="BUY WITH PAYPAL"
            createOrder={(data, actions) => {
              return actions.order.create({
                purchase_units: [
                  {
                    amount: {
                      value: finalTotalInOriginalCurrency.toString(),
                    },
                  },
                ],
              });
            }}
          />
        </PayPalScriptProvider>
      </div>

      {/* Additional Information */}
      <div className="grid grid-cols-3 gap-3 p-4 bg-gray-100 mt-6 rounded-xl">
        <div className="text-center">
          <FaShieldAlt className="mx-auto text-2xl text-green-600" />
          <p className="text-sm">Secure Payment</p>
        </div>
        <div className="text-center">
          <FaTruck className="mx-auto text-2xl text-blue-600" />
          <p className="text-sm">Fast Delivery</p>
        </div>
        <div className="text-center">
          <FaMoneyBillWave className="mx-auto text-2xl text-purple-600" />
          <p className="text-sm">Money Back</p>
        </div>
      </div>
    </div>
  );
};

export default PopupCartTotal;
