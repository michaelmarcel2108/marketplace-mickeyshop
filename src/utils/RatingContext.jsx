import { createContext, useContext, useState } from "react";

const RatingContext = createContext();

export function RatingProvider({ children }) {
  // Struktur data: { productId: [ { id, rating, review }, ... ] }
  const [ratings, setRatings] = useState({});

  // Tambah review untuk produk tertentu
  const addReview = (productId, rating, review) => {
    setRatings((prev) => {
      const newReview = { id: Date.now(), rating, review };
      return {
        ...prev,
        [productId]: [...(prev[productId] || []), newReview],
      };
    });
  };

  return (
    <RatingContext.Provider value={{ ratings, addReview }}>
      {children}
    </RatingContext.Provider>
  );
}

export const useRatings = () => useContext(RatingContext);
