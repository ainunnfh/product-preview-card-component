import React from "react";

const ProductCard = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#f2ebe3] items-center justify-center ">
      <div className="bg-white p-5 flex flex-col gap-6">
        <img
          className="rounded-md bg-blue-900"
          src="image-product-mobile.jpg"
          alt=""
        />

        <div className="text-[#6c7289] ">
          <div className="uppercase tracking-tighter">Perfume</div>
          <div className="font-bold text-4xl flex flex-col font-Fraunces text-black">
            Gabrielle Essence <span>Eau De Parfum</span>
          </div>
          <div className="mt-3 text-xl font-Montserrat ">
            A floral, solar and voluptuous interpretation composed by Olivier
            Polge, Perfumer-Creator for the House of CHANEL.
          </div>

          {/* price */}
          <div className="mt-5">
            <span className="text-[#3a8266] font-bold  text-2xl">$149.99</span>
            <span className="text-gray-400 ml-3 line-through">$169.99</span>
          </div>
        </div>
        <div className="bg-[#3a8266] text-white p-3 rounded-md text-center font-semibold">
          Add to Cart
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
