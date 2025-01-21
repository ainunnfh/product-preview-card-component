import React from "react";

const ProductCard = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#f2ebe3] items-center justify-center md:h-screen">
      <div className=" p-5 md:flex ">
        <img
          className="hidden md:block rounded-md bg-blue-900 md:w-60"
          src="image-product-desktop.jpg"
          alt=""
        />
        <img
          className="block md:hidden rounded-md bg-blue-900"
          src="image-product-mobile.jpg"
          alt=""
        />

        <div className="bg-white p-4 rounded-md">
          <div className="text-[#6c7289] flex flex-col md: h-full md:justify-around ">
            <div className="uppercase">
              P&#32;e&#32;r&#32;f&#32;u&#32;m&#32;e
            </div>
            <div className="font-bold text-4xl flex flex-col font-fraunces text-black">
              Gabrielle Essence <span>Eau De Parfum</span>
            </div>
            <div className="mt-3 text-xl font-Montserrat ">
              A floral, solar and voluptuous interpretation composed by Olivier
              Polge, Perfumer-Creator for the House of CHANEL.
            </div>

            {/* price */}
            <div className="mt-5 ">
              <span className="text-[#3a8266] font-bold  text-2xl font-fraunces">
                $149.99
              </span>
              <span className="text-gray-400 ml-3 line-through ">$169.99</span>
            </div>
            {/* cart button */}
            <div className="bg-[#3a8266] text-white p-3 rounded-md text-center font-semibold flex items-center justify-center mt-5">
              <svg
                className="mr-2"
                width="15"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.383 10.388a2.397 2.397 0 0 0-1.518-2.222l1.494-5.593a.8.8 0 0 0-.144-.695.8.8 0 0 0-.631-.28H2.637L2.373.591A.8.8 0 0 0 1.598 0H0v1.598h.983l1.982 7.4a.8.8 0 0 0 .799.59h8.222a.8.8 0 0 1 0 1.599H1.598a.8.8 0 1 0 0 1.598h.943a2.397 2.397 0 1 0 4.507 0h1.885a2.397 2.397 0 1 0 4.331-.376 2.397 2.397 0 0 0 1.12-2.021ZM11.26 7.99H4.395L3.068 3.196h9.477L11.26 7.991Zm-6.465 6.392a.8.8 0 1 1 0-1.598.8.8 0 0 1 0 1.598Zm6.393 0a.8.8 0 1 1 0-1.598.8.8 0 0 1 0 1.598Z"
                  fill="#FFF"
                />
              </svg>
              add to cart
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
