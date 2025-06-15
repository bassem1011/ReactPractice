import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { login } from '../store/slices/authSlice';

export default function Login() {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: { email: '', password: '' },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email').required('Required'),
      password: Yup.string().min(6, 'Min 6 characters').required('Required'),
    }),
    onSubmit: values => {
      dispatch(login(values));
      alert('Logged in!');
    },
  });

  return (
    <div className="container mt-4">
      <h3>Login</h3>
      <form onSubmit={formik.handleSubmit} className="col-md-4">
        <div className="mb-3">
          <label>Email</label>
          <input name="email" type="email" className="form-control" onChange={formik.handleChange} value={formik.values.email} />
          {formik.errors.email && <div className="text-danger small">{formik.errors.email}</div>}
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input name="password" type="password" className="form-control" onChange={formik.handleChange} value={formik.values.password} />
          {formik.errors.password && <div className="text-danger small">{formik.errors.password}</div>}
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
    </div>
  );
}

