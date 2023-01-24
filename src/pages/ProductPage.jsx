import React from "react";
import { useEffect, useState } from "react";
import { getOneProduct, getProducts } from "../api/apiDummyJson";

const ProductPage = () => {
  const [products, setProducts] = useState({});

  const handlerDetail = (id) => {
    getOneProduct(id, (cb) => {
      const { id, title, description } = cb;
      alert(`${id} : ${title} | ${description}`);
    });
  };

  useEffect(() => {
    getProducts((cb) => {
      setProducts(cb);
    });
  }, []);

  return (
    <>
      <div className="container">
        <h1 className="">List Products</h1>
        <hr />
        <table className="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Title</th>
              <th scope="col">Brand</th>
              <th scope="col">Description</th>
              <th scope="col">Category</th>
              <th scope="col">Price</th>
              <th scope="col">Rating</th>
              <th scope="col">Stock</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => {
              const { id, title, brand, description, category, price, rating, stock } = product;
              return (
                <tr>
                  <th key={id} scope="row">
                    {id}
                  </th>
                  <td>
                    <div>
                      <button data-bs-toggle="modal" data-bs-target="#staticBackdrop" onClick={() => handlerDetail(id)}>
                        {title}
                      </button>
                    </div>
                  </td>
                  <td>{brand}</td>
                  <td>{description}</td>
                  <td>{category}</td>
                  <td>{price}</td>
                  <td>{rating}</td>
                  <td>{stock}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <>
        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
          Launch static backdrop modal
        </button>

        {/* Modal */}
        <div
          className="modal fade"
          id="staticBackdrop"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabIndex={-1}
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="staticBackdropLabel">
                  Modal title
                </h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
              </div>
              <div className="modal-body">...</div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Understood
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default ProductPage;
