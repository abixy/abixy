import { Outlet, Link } from "react-router";
import { ShoppingCart } from "lucide-react";
import { useCart } from "../context/CartContext";

export function Root() {
  const { cart } = useCart();

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
              ODB
            </div>
            <h1 className="text-2xl font-bold text-gray-900">OriginalDuckBucks</h1>
          </Link>
          <Link
            to="/cart"
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors relative"
          >
            <ShoppingCart className="w-5 h-5" />
            <span>Cart</span>
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
                {cart.length}
              </span>
            )}
          </Link>
        </div>
      </header>
      <main className="flex-1">
        <Outlet />
      </main>
      <footer className="bg-gray-800 text-white py-6 mt-12">
        <div className="max-w-7xl mx-auto px-4 text-center text-sm">
          &copy; 2026 OriginalDuckBucks.com - Custom 40mm Collectible Coins
        </div>
      </footer>
    </div>
  );
}
