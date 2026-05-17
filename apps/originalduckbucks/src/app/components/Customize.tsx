import { useState } from "react";
import { useParams, useNavigate, Link } from "react-router";
import { coinDesigns, packOptions } from "../data/coins";
import { useCart } from "../context/CartContext";
import { ArrowLeft, ShoppingCart, Package } from "lucide-react";
import { CoinPreview } from "./CoinPreview";

export function Customize() {
  const { designId } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const design = coinDesigns.find((d) => d.id === designId);
  const [topText, setTopText] = useState("");
  const [bottomText, setBottomText] = useState("");
  const [selectedPack, setSelectedPack] = useState(packOptions[0]);

  if (!design) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Design not found</h2>
        <Link to="/" className="text-blue-600 hover:underline">
          Return to catalog
        </Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart({
      designId: design.id,
      designName: design.name,
      imageUrl: design.imageUrl,
      topText: topText || design.customizableText.top.placeholder,
      bottomText: bottomText || design.customizableText.bottom.placeholder,
      packSize: selectedPack.quantity,
      pricePerCoin: selectedPack.pricePerCoin,
      totalPrice: selectedPack.totalPrice,
    });
    navigate("/cart");
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-blue-600 hover:underline mb-6"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to catalog
      </Link>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="flex items-center justify-center mb-6">
              <CoinPreview
                icon={design.icon}
                topText={topText || design.customizableText.top.placeholder}
                bottomText={bottomText || design.customizableText.bottom.placeholder}
                size="large"
              />
            </div>
            <div className="text-center">
              <div className="text-sm font-semibold text-gray-500 mb-1">Live Preview</div>
              <div className="text-xs text-gray-500">40mm diameter coin</div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{design.name}</h1>
            <p className="text-gray-600 mb-6">{design.description}</p>

            <div className="mb-6 space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Top Text (Curves along top edge)
                </label>
                <input
                  type="text"
                  value={topText}
                  onChange={(e) => {
                    if (e.target.value.length <= design.customizableText.top.maxLength) {
                      setTopText(e.target.value.toUpperCase());
                    }
                  }}
                  placeholder={design.customizableText.top.placeholder}
                  maxLength={design.customizableText.top.maxLength}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg font-semibold uppercase"
                />
                <div className="text-xs text-gray-500 mt-1">
                  {topText.length}/{design.customizableText.top.maxLength} characters
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Bottom Text (Curves along bottom edge)
                </label>
                <input
                  type="text"
                  value={bottomText}
                  onChange={(e) => {
                    if (e.target.value.length <= design.customizableText.bottom.maxLength) {
                      setBottomText(e.target.value.toUpperCase());
                    }
                  }}
                  placeholder={design.customizableText.bottom.placeholder}
                  maxLength={design.customizableText.bottom.maxLength}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg font-semibold uppercase"
                />
                <div className="text-xs text-gray-500 mt-1">
                  {bottomText.length}/{design.customizableText.bottom.maxLength} characters
                </div>
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                <Package className="inline w-4 h-4 mr-1" />
                Select Pack Size
              </label>
              <div className="grid grid-cols-2 gap-3">
                {packOptions.map((pack) => {
                  const isSelected = selectedPack.quantity === pack.quantity;
                  const savings = pack.quantity * 2.0 - pack.totalPrice;
                  return (
                    <button
                      key={pack.quantity}
                      onClick={() => setSelectedPack(pack)}
                      className={`p-4 rounded-lg border-2 transition-all ${
                        isSelected
                          ? "border-blue-600 bg-blue-50 shadow-md"
                          : "border-gray-200 bg-white hover:border-gray-300"
                      }`}
                    >
                      <div className="text-lg font-bold text-gray-900">
                        {pack.quantity} coins
                      </div>
                      <div className="text-sm text-gray-600">
                        ${pack.pricePerCoin.toFixed(2)} each
                      </div>
                      <div className="text-xl font-bold text-blue-600 mt-1">
                        ${pack.totalPrice}
                      </div>
                      {savings > 0 && (
                        <div className="text-xs text-green-600 font-semibold mt-1">
                          Save ${savings.toFixed(0)}!
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            <button
              onClick={handleAddToCart}
              className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 shadow-md"
            >
              <ShoppingCart className="w-5 h-5" />
              Add to Cart - ${selectedPack.totalPrice}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
