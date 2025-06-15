import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

export default function Register() {
  const formik = useFormik({
    initialValues: { name: '', email: '', password: '' },
    validationSchema: Yup.object({
      name: Yup.string().required('Required'),
      email: Yup.string().email('Invalid email').required('Required'),
      password: Yup.string().min(6, 'Min 6 characters').required('Required'),
    }),
    onSubmit: values => {
      alert('Registered: ' + JSON.stringify(values));
    },
  });

  return (
    <div className="container mt-4">
      <h3>Register</h3>
      <form onSubmit={formik.handleSubmit} className="col-md-4">
        <div className="mb-3">
          <label>Name</label>
          <input name="name" type="text" className="form-control" onChange={formik.handleChange} value={formik.values.name} />
          {formik.errors.name && <div className="text-danger small">{formik.errors.name}</div>}
        </div>
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
        <button type="submit" className="btn btn-primary">Register</button>
      </form>
    </div>
  );
}
