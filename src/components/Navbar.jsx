import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Navbar() {
  const cartCount = useSelector(state => state.cart.items.length);
  const favoriteCount = useSelector(state => state.favorites.items.length);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
      <Link className="navbar-brand" to="/">E-Shop</Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/cart">Cart ({cartCount})</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/favorites">Favorites ({favoriteCount})</Link></li>
        </ul>
        <div className="d-flex">
          <Link className="btn btn-outline-light me-2" to="/login">Login</Link>
          <Link className="btn btn-outline-light" to="/register">Register</Link>
        </div>
      </div>
    </nav>
  );
}
