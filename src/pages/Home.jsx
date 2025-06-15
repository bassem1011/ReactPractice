import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/slices/cartSlice';
import { addToFavorites } from '../store/slices/favoritesSlice';
import { Link } from 'react-router-dom';

export default function Home() {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products')
      .then(res => res.json())
      .then(data => setProducts(data.slice(0, 20)));
  }, []);

  return (
    <div className="container mt-4">
      <h3>Products</h3>
      <div className="row">
        {products.map(product => (
          <div className="col-md-3 mb-4" key={product.id}>
            <div className="card h-100">
              <img src={product.images[0]} className="card-img-top" alt={product.title} height="200" style={{ objectFit: 'cover' }} />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">${product.price}</p>
                <Link to={`/product/${product.id}`} className="btn btn-sm btn-primary mb-2">View</Link>
                <button onClick={() => dispatch(addToCart({ ...product, quantity: 1 }))} className="btn btn-sm btn-success mb-1">Add to Cart</button>
                <button onClick={() => dispatch(addToFavorites(product))} className="btn btn-sm btn-outline-warning">Favorite</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}