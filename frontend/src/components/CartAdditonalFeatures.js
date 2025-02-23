import React from "react";
import { FaCcVisa, FaCcPaypal, FaCcMastercard, FaCcStripe } from "react-icons/fa"; // تجميع الاستيراد من نفس الحزمة

const CartAdditonalFeatures = () => {
  return (
    <div className="paymentIconHold flex gap-8 flex-row justify-center items-center mt-10">
      {/* تحديد حجم الأيقونات بشكل مرن */}
      <FaCcVisa className="w-24 h-24 md:w-32 md:h-32 transition-transform transform hover:scale-110" />
      <FaCcPaypal className="w-24 h-24 md:w-32 md:h-32 transition-transform transform hover:scale-110" />
      <FaCcMastercard className="w-24 h-24 md:w-32 md:h-32 transition-transform transform hover:scale-110" />
      <FaCcStripe className="w-24 h-24 md:w-32 md:h-32 transition-transform transform hover:scale-110" />
    </div>
  );
};

export default CartAdditonalFeatures;
