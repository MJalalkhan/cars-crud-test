import React from 'react';
import { Link } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, TextField, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: theme.spacing(4),
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: 400,
    width: '100%',
  },
  input: {
    margin: theme.spacing(1),
  },
  button: {
    margin: theme.spacing(2),
  },
  link: {
    color: theme.palette.primary.main,
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
  error: {
    color: theme.palette.error.main,
    margin: theme.spacing(1),
  },
}));

function SignUp() {
  const classes = useStyles();

  const initialValues = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
    confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required('Confirm Password is required'),
  });

  const onSubmit = (values, { setSubmitting, setErrors }) => {
    console.log(values);
    setSubmitting(false);
  };

  return (
    <div className={classes.root}>
      <Typography variant="h4">Sign Up</Typography>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        {({ isSubmitting }) => (
          <Form className={classes.form}>
            <TextField className={classes.input} label="Name" name="name" type="text" />
            <ErrorMessage name="name" render={(msg) => <div className={classes.error}>{msg}</div>} />

            <TextField className={classes.input} label="Email" name="email" type="email" />
            <ErrorMessage name="email" render={(msg) => <div className={classes.error}>{msg}</div>} />
            <TextField className={classes.input} label="Password" name="password" type="password" />
            <ErrorMessage name="password" render={(msg) => <div className={classes.error}>{msg}</div>} />

            <TextField className={classes.input} label="Confirm Password" name="confirmPassword" type="password" />
            <ErrorMessage name="confirmPassword" render={(msg) => <div className={classes.error}>{msg}</div>} />

            <Button className={classes.button} variant="contained" color="primary" type="submit" disabled={isSubmitting}>
              Sign Up
            </Button>
          </Form>
        )}
      </Formik>
      <Typography>
        Already have an account? <Link className={classes.link} to="/">Sign In</Link>
      </Typography>
    </div>
  );
}

export default SignUp;
