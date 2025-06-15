import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromFavorites } from '../store/slices/favoritesSlice';

export default function Favorites() {
  const favorites = useSelector(state => state.favorites.items);
  const dispatch = useDispatch();

  return (
    <div className="container mt-4">
      <h3>Your Favorites</h3>
      {favorites.length === 0 ? (
        <p>No favorite products yet.</p>
      ) : (
        <div className="row">
          {favorites.map(product => (
            <div className="col-md-3 mb-4" key={product.id}>
              <div className="card h-100">
                <img src={product.images[0]} className="card-img-top" alt={product.title} height="200" style={{ objectFit: 'cover' }} />
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">${product.price}</p>
                  <button onClick={() => dispatch(removeFromFavorites(product.id))} className="btn btn-sm btn-danger">Remove</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
