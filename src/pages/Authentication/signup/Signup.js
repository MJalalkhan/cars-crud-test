import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { TextField, Button, Grid, Box, Typography } from "@mui/material";
import { makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";

const validationSchema = Yup.object().shape({
  name: Yup.string().min(5).required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required('Confirm Password is required'),
});
const initialValues = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: theme.spacing(4),
  },
  form: {
    display: "flex",
    flexDirection: "column",
    maxWidth: 400,
    width: "100%",
    marginTop: "2rem",
  },
  link: {
    color: theme.palette.primary.main,
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
    },
  },
  error: {
    color: theme.palette.error.main,
    margin: theme.spacing(1),
  },
}));

const handleSubmit = (values) => {
  console.log(values); // Replace with actual form submission logic
};

const SignUp = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="h4">Sign Up</Typography>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form className={classes.form}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Field
                  as={TextField}
                  name="name"
                  label="Name"
                  fullWidth
                  error={errors.name && touched.name}
                  helperText={errors.name && touched.name ? errors.email : ""}
                />
                <ErrorMessage name="name" render={(msg) => <div className={classes.error}>{msg}</div>} />

              </Grid>
              <Grid item xs={12}>
                <Field
                  name="email"
                  as={TextField}
                  label="Email"
                  fullWidth
                  type="email"
                  error={touched.email && Boolean(errors.email)}
                  helperText={touched.email && errors.email}
                />
                <ErrorMessage name="email" render={(msg) => <div className={classes.error}>{msg}</div>} />
              </Grid>
              
              <Grid item xs={12}>
                <Field
                  name="password"
                  as={TextField}
                  label="Password"
                  type="password"
                  fullWidth
                  error={touched.password && Boolean(errors.password)}
                  helperText={touched.password && errors.password}
                />
                <ErrorMessage name="Password" render={(msg) => <div className={classes.error}>{msg}</div>} />
              </Grid>
              <Grid item xs={12}>
                <Field
                  name="confirmPassword"
                  as={TextField}
                  label="Confirm Password"
                  type="password"
                  fullWidth
                  error={touched.password && Boolean(errors.password)}
                  helperText={touched.password && errors.confirmPassword}
                />
                <ErrorMessage name="confirmPassword" render={(msg) => <div className={classes.error}>{msg}</div>} />
              </Grid>
              <Grid item xs={12}>
                <Box display="flex" justifyContent="space-between">
                  <Button
                    variant="contained"
                    type="submit"
                  >
                    Sign Up
                  </Button>
                  <Typography className="">
                    Already have an account?
                    <Link to="/" className={classes.link}>
                      SignIn
                    </Link>
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>
    </div>
  );
};
export default SignUp;
