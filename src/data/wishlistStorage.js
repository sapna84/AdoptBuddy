export const getWishlist = () => {
  return JSON.parse(localStorage.getItem("wishlist")) || [];
};

export const addToWishlist = (pet) => {
  const wishlist = getWishlist();

  const alreadyExists = wishlist.find((item) => item.id === pet.id);

  if (!alreadyExists) {
    wishlist.push(pet);
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }
};

export const removeFromWishlist = (id) => {
  const wishlist = getWishlist().filter((pet) => pet.id !== id);

  localStorage.setItem("wishlist", JSON.stringify(wishlist));
};

export const isWishlisted = (id) => {
  return getWishlist().some((pet) => pet.id === id);
};