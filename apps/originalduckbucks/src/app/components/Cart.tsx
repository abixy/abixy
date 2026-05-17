import { Link, useNavigate } from "react-router";
import { useCart } from "../context/CartContext";
import { Trash2, ArrowLeft, ShoppingBag } from "lucide-react";
import { coinDesigns } from "../data/coins";
import { CoinPreview } from "./CoinPreview";

export function Cart() {
  const { cart, removeFromCart, cartTotal } = useCart();
  const navigate = useNavigate();

  if (cart.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12 text-center">
        <div className="bg-white rounded-lg shadow-md p-12">
          <ShoppingBag className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Your cart is empty</h2>
          <p className="text-gray-600 mb-6">Start shopping to add items to your cart</p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Browse Catalog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-blue-600 hover:underline mb-6"
      >
        <ArrowLeft className="w-4 h-4" />
        Continue shopping
      </Link>

      <h1 className="text-3xl font-bold text-gray-900 mb-6">Shopping Cart</h1>

      <div className="space-y-4 mb-6">
        {cart.map((item, index) => {
          const design = coinDesigns.find(d => d.id === item.designId);
          return (
            <div key={index} className="bg-white rounded-lg shadow-md p-4 flex gap-4">
              <div className="w-24 h-24 flex-shrink-0 flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg">
                {design && (
                  <CoinPreview
                    icon={design.icon}
                    topText={item.topText}
                    bottomText={item.bottomText}
                    size="small"
                  />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-semibold text-gray-900">{item.designName}</h3>
                <p className="text-sm text-gray-600 mb-1">
                  Top: <span className="font-semibold">{item.topText}</span> / Bottom: <span className="font-semibold">{item.bottomText}</span>
                </p>
                <p className="text-sm text-gray-600">
                  Pack size: {item.packSize} coins @ ${item.pricePerCoin.toFixed(2)} each
                </p>
              </div>
              <div className="flex flex-col items-end justify-between">
                <button
                  onClick={() => removeFromCart(index)}
                  className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                  aria-label="Remove item"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
                <div className="text-xl font-bold text-gray-900">
                  ${item.totalPrice.toFixed(2)}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex justify-between items-center mb-4">
          <span className="text-lg font-semibold text-gray-700">
            Total ({cart.length} {cart.length === 1 ? "item" : "items"})
          </span>
          <span className="text-3xl font-bold text-gray-900">${cartTotal.toFixed(2)}</span>
        </div>
        <button
          onClick={() => navigate("/checkout")}
          className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors"
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}
