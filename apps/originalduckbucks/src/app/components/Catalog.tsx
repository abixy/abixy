import { useState, useMemo } from "react";
import { Link } from "react-router";
import { coinDesigns } from "../data/coins";
import { Tag } from "lucide-react";
import { CoinPreview } from "./CoinPreview";

export function Catalog() {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const allTags = useMemo(() => {
    const tags = new Set<string>();
    coinDesigns.forEach((design) => design.tags.forEach((tag) => tags.add(tag)));
    return Array.from(tags).sort();
  }, []);

  const filteredDesigns = useMemo(() => {
    if (!selectedTag) return coinDesigns;
    return coinDesigns.filter((design) => design.tags.includes(selectedTag));
  }, [selectedTag]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Browse Our Collection</h2>
        <p className="text-gray-600">Custom 40mm collectible coins - personalize yours today!</p>
      </div>

      <div className="mb-6 flex flex-wrap gap-2">
        <button
          onClick={() => setSelectedTag(null)}
          className={`px-4 py-2 rounded-full flex items-center gap-2 transition-colors ${
            selectedTag === null
              ? "bg-blue-600 text-white"
              : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
          }`}
        >
          <Tag className="w-4 h-4" />
          All Designs
        </button>
        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => setSelectedTag(tag)}
            className={`px-4 py-2 rounded-full flex items-center gap-2 transition-colors capitalize ${
              selectedTag === tag
                ? "bg-blue-600 text-white"
                : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
            }`}
          >
            <Tag className="w-4 h-4" />
            {tag}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredDesigns.map((design) => (
          <Link
            key={design.id}
            to={`/customize/${design.id}`}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow group"
          >
            <div className="aspect-square overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-8">
              <div className="group-hover:scale-105 transition-transform duration-300">
                <CoinPreview
                  icon={design.icon}
                  topText={design.customizableText.top.placeholder}
                  bottomText={design.customizableText.bottom.placeholder}
                  size="medium"
                />
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-900 mb-1">{design.name}</h3>
              <p className="text-gray-600 text-sm mb-3">{design.description}</p>
              <div className="flex flex-wrap gap-1 mb-3">
                {design.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full capitalize"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="text-blue-600 font-semibold group-hover:underline">
                Customize &rarr;
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
