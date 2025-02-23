import React from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../redux-state/CartState";
import { Link } from "react-router-dom";
import { useToast } from "@chakra-ui/react";
import { useGetproductByNameQuery } from "../Redux/product";
import { FaShoppingCart, FaStar } from "react-icons/fa"; // أيقونات للتسوق والتقييم

const OurBestSellers = () => {
  const dispatch = useDispatch();
  const toast = useToast();
  const { data, error, isLoading } = useGetproductByNameQuery("products?populate=*&pagination[pageSize]=20");

  if (isLoading) return <div className="text-center p-4">Loading...</div>;
  if (error) return <div className="text-center p-4 text-red-500">Error loading products</div>;
  if (!data?.data) return <div className="text-center p-4">No products available</div>;

  if (!Array.isArray(data.data)) {
    console.error("Error: Expected an array but got:", data.data);
    return <div className="text-center p-4 text-red-500">Invalid data format</div>;
  }

  // تصفية المنتجات التي تنتمي إلى فئة "OUR BEST SELLERS"
  const bestSellersProducts = data.data.filter(product => product.Catagori === "OUR BEST SELLERS");

  // إزالة التكرار بناءً على الـ id
  const uniqueProductsMap = new Map();
  bestSellersProducts.forEach(product => {
    if (!uniqueProductsMap.has(product.id)) {
      uniqueProductsMap.set(product.id, product);
    }
  });

  const uniqueProducts = Array.from(uniqueProductsMap.values());

  // إذا لم يكن هناك منتج، نعرض رسالة
  if (uniqueProducts.length === 0) {
    return <div className="text-center p-4">No products available</div>;
  }

  return (
    <div className="bg-gradient-to-r from-purple-50 to-blue-50 py-12"> {/* خلفية متدرجة */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {uniqueProducts.map((product) => {
            const imageUrl = product.Productimag?.length 
              ? `http://localhost:1337${product.Productimag[0].url}`
              : "";

            return (
              <div key={product.id} className="bg-white rounded-xl shadow-2xl overflow-hidden hover:scale-105 transition-transform duration-300">
                <Link to={`/${product.id}`}>
                  <figure className="relative h-64 w-full">
                    {imageUrl ? (
                      <img 
                        src={imageUrl} 
                        alt={product.ProductTitle}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                        <span className="text-gray-500">No image</span>
                      </div>
                    )}
                    <div className="absolute top-2 right-2 bg-white rounded-full p-2 shadow-md">
                      <FaStar className="text-yellow-400 text-xl" /> {/* أيقونة التقييم */}
                    </div>
                  </figure>
                </Link>
                <div className="p-6">
                  {/* اسم المنتج */}
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">
                      {product.ProductTitle}
                    </span>
                  </h2>
                  {/* سعر المنتج */}
                  <p className="text-lg text-gray-600 mb-4">
                    <span className="text-purple-600 font-bold">MAD</span>{" "}
                    <span className="text-2xl font-bold">{product.ProductPrice}</span>
                  </p>
                  {/* زر Add to Cart */}
                  <button 
                    className="w-full bg-purple-600 text-white py-3 px-6 rounded-lg flex items-center justify-center space-x-2 hover:bg-purple-700 transition-colors duration-300"
                    onClick={() => {
                      dispatch(cartActions.addItemToCart({
                        id: product.id,
                        price: product.ProductPrice,
                        title: product.ProductTitle,
                        image: imageUrl,
                      }));
                      toast({
                        title: "تمت الإضافة إلى السلة",
                        description: `${product.ProductTitle} تمت إضافته إلى سلة التسوق.`,
                        status: "success",
                        duration: 2000,
                        isClosable: true,
                        position: "top-right",
                      });
                    }}
                  >
                    <FaShoppingCart className="text-xl" /> {/* أيقونة السلة */}
                    <span>Add to Cart</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OurBestSellers;