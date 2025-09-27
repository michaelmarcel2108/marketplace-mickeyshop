import { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import products from "../../utils/products.json";   // ✅ fix import
import { useRatings } from "../../utils/RatingContext";

export default function ProductDetail() {
  const { id } = useParams();
  const location = useLocation();

  // Ambil produk dari state atau fallback cari di products.json
  let p = location.state;
  if (!p) {
    const isNumber = !isNaN(Number(id));
    p = products.find((item) =>
      isNumber ? item.id === Number(id) : item.slug === id
    );
  }

  // Jika tetap tidak ketemu
  if (!p) {
    return <div className="p-6">Produk tidak ditemukan.</div>;
  }

  const { ratings, addReview } = useRatings();
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!rating || !review.trim()) return;
    addReview(p.id, rating, review);
    setRating(0);
    setReview("");
  };

  return (
    <div className="p-6 space-y-6 flex gap-6">
      <section className="flex-4 gap-6">
        <div className="border rounded-lg p-4 shadow hover:shadow-lg">
          <img
            src={p.img}
            alt={p.name}
            className="w-full h-64 object-cover rounded mb-4"
          />
          <h1 className="text-2xl font-bold">{p.name}</h1>
          <p className="mt-2 font-semibold text-lg text-blue-600">
            Rp {p.price.toLocaleString()}
          </p>
          <p className="text-gray-500 text-sm mt-1">Stok: {p.stock}</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3">User Reviews</h2>
          {!ratings[p.id] || ratings[p.id].length === 0 ? (
            <p className="text-gray-500">Belum ada review.</p>
          ) : (
            <ul className="space-y-4">
              {ratings[p.id].map((r) => (
                <li
                  key={r.id}
                  className="border rounded-lg p-4 bg-gray-50 shadow-sm"
                >
                  <div className="flex items-center gap-2 mb-2">
                    {[...Array(r.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-500">★</span>
                    ))}
                    {[...Array(5 - r.rating)].map((_, i) => (
                      <span key={i} className="text-gray-300">★</span>
                    ))}
                  </div>
                  <p className="text-gray-700">{r.review}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>

      <section className="border rounded-lg p-4 shadow hover:shadow-lg flex-1">
        <h2 className="text-xl font-semibold mt-6">Tambah Review</h2>
        <form onSubmit={handleSubmit} className="mb-6">
          <div className="mb-4">
            <label className="block text-lg font-medium mb-2">Rating:</label>
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  type="button"
                  key={star}
                  onClick={() => setRating(star)}
                  className={`text-2xl ${
                    star <= rating ? "text-yellow-500" : "text-gray-300"
                  }`}
                >
                  ★
                </button>
              ))}
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-lg font-medium mb-2">Review:</label>
            <textarea
              value={review}
              onChange={(e) => setReview(e.target.value)}
              className="w-full border rounded-lg p-3"
              rows="3"
              placeholder="Tulis pengalaman Anda..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
      </section>
    </div>
  );
}
