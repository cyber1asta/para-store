import React from "react";
import hairImage from "../assets/hair.jpeg";

const HairCarePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 via-white to-gray-100">
      {/* Header Section */}
      <header className="py-16 px-6 text-center bg-white shadow-md">
        <h1 className="text-5xl font-extrabold text-pink-700 uppercase tracking-widest mb-4">
          AM PARA Haircare
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Discover the secret to healthy, shiny, and strong hair with AM PARA. Your beauty, our priority.
        </p>
      </header>

      {/* Hero Image */}
      <div className="flex justify-center my-12">
        <img
          src={hairImage}
          alt="Luxury Hair Care"
          className="w-full max-w-3xl rounded-3xl shadow-2xl object-cover transition-transform transform hover:scale-105 duration-500"
        />
      </div>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-6 py-12">
        {/* Why Hair Care is Important */}
        <section className="mb-16 text-center">
          <h2 className="text-4xl font-bold text-pink-700 mb-6">
            Why is Hair Care Essential?
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Your hair is your crown. Keeping it healthy requires a balanced routine that includes proper nutrition and external care.
          </p>
        </section>

        {/* Hair Care Tips */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Tip 1 */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
            <h3 className="text-2xl font-semibold text-pink-700 mb-4">
              💨 Avoid Excessive Heat
            </h3>
            <p className="text-gray-600">
              Frequent use of hair dryers and straighteners can cause damage. Try air-drying your hair whenever possible.
            </p>
          </div>

          {/* Tip 2 */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
            <h3 className="text-2xl font-semibold text-pink-700 mb-4">
              🥑 Eat Nutrient-Rich Foods
            </h3>
            <p className="text-gray-600">
              A diet rich in vitamins, such as nuts and fruits, enhances the strength and shine of your hair.
            </p>
          </div>

          {/* Tip 3 */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
            <h3 className="text-2xl font-semibold text-pink-700 mb-4">
              🌿 Use Natural Oils
            </h3>
            <p className="text-gray-600">
              Massage your hair with coconut or argan oil to deeply hydrate and nourish your scalp.
            </p>
          </div>

          {/* Tip 4 */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
            <h3 className="text-2xl font-semibold text-pink-700 mb-4">
              🚿 Don’t Overwash Your Hair
            </h3>
            <p className="text-gray-600">
              Washing your hair too often strips away natural oils, making it dry. 2-3 times a week is ideal.
            </p>
          </div>

          {/* Tip 5 */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
            <h3 className="text-2xl font-semibold text-pink-700 mb-4">
              🛏️ Night Hair Care Routine
            </h3>
            <p className="text-gray-600">
              Use a silk pillowcase to prevent breakage and braid your hair before bed to keep it tangle-free.
            </p>
          </div>

          {/* Tip 6 */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
            <h3 className="text-2xl font-semibold text-pink-700 mb-4">
              🚰 Stay Hydrated
            </h3>
            <p className="text-gray-600">
              Drinking enough water keeps your scalp and hair hydrated, reducing dryness and frizz.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <section className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-pink-700 mb-6">
            Elevate Your Hair Care Routine with AM PARA ✨
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Explore our exclusive hair care products and experience the magic of premium beauty.
          </p>
          <button className="bg-pink-600 text-white px-6 py-3 rounded-lg font-semibold text-lg shadow-lg hover:bg-pink-700 transition">
            Shop Now
          </button>
        </section>
      </main>
    </div>
  );
};

export default HairCarePage;
