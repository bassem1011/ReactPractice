import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/slices/cartSlice';
import { addToFavorites } from '../store/slices/favoritesSlice';

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(`https://api.escuelajs.co/api/v1/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data));
  }, [id]);

  if (!product) return <div className="container mt-4">Loading...</div>;

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-6">
          <img src={product.images[0]} className="img-fluid" alt={product.title} />
        </div>
        <div className="col-md-6">
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <h4>${product.price}</h4>
          <button onClick={() => dispatch(addToCart({ ...product, quantity: 1 }))} className="btn btn-success me-2">Add to Cart</button>
          <button onClick={() => dispatch(addToFavorites(product))} className="btn btn-outline-warning">Favorite</button>
        </div>
      </div>
    </div>
  );
}
