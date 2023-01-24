const BASE_URL = "http://dummyjson.com";

export const getProducts = async (callback) => {
  let result = await fetch(`${BASE_URL}/products`);
  result = await result.json();
  callback(result.products);
};

export const getOneProduct = (id, callback) => {
  fetch(`${BASE_URL}/products/${id}`)
    .then((res) => res.json())
    .then((result) => callback(result))
    .catch((err) => console.log(err));
};
