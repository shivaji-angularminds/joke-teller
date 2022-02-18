import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

class GoogleForm extends React.Component {
  render() {
    return (
      <Formik
        initialValues={{
          acceptTerms: false,
          hello: false,
          hello1: false,
          email: "",
          universal:false
        }}
        validationSchema={Yup.object().shape({

            universal:Yup.bool().oneOf([true],"bscinc"),
          acceptTerms: Yup.bool().oneOf(
            [true],
            "Accept Terms & Conditions is required"
          ),
          hello:  Yup.bool().when("universal", {
            is: (universal) => universal === true,
            then: Yup.bool().required("em 1 requied"),
          }),
          email: Yup.string().when("hello", {
            is: (hello) => hello === true,
            then: Yup.string().required("em 1 requied"),
          }),
        })}
        onSubmit={(fields) => {
          alert("SUCCESS!! :-)\n\n" + JSON.stringify(fields, null, 4));
        }}
      >
        {({ errors, status, touched }) => (
          <Form>
            <div className="">
              <Field
                type="radio"
                name="universal"
                className={
                  " " + (errors.universal && touched.universal ? " is-invalid" : "")
                }
              />
              <label htmlFor="hello" className="form-check-label">
                universal
              </label>
              <ErrorMessage
                name="universal"
                component="div"
                className="invalid-feedback"
              />
            </div>

            <div className="form-group form-check">
              <Field
                type="checkbox"
                name="acceptTerms"
                className={
                  "form-check-input " +
                  (errors.acceptTerms && touched.acceptTerms
                    ? " is-invalid"
                    : "")
                }
              />
              <label htmlFor="acceptTerms" className="form-check-label">
                Accept Terms & Conditions
              </label>
              <ErrorMessage
                name="acceptTerms"
                component="div"
                className="invalid-feedback"
              />
            </div>
            <div className="form-group form-check">
              <Field
                type="checkbox"
                name="hello"
                className={
                  "form-check-input " +
                  (errors.hello && touched.hello ? " is-invalid" : "")
                }
              />
              <label htmlFor="hello" className="form-check-label">
                hello
              </label>
              <ErrorMessage
                name="hello"
                component="div"
                className="invalid-feedback"
              />
            </div>
            <div className="">
              <Field
                type="text"
                name="email"
                className={
                  " " + (errors.email && touched.email ? " is-invalid" : "")
                }
              />
              <label htmlFor="hello" className="form-check-label">
                email
              </label>
              <ErrorMessage
                name="email"
                component="div"
                className="invalid-feedback"
              />
            </div>
            <div className="form-group form-check">
              <Field
                type="checkbox"
                name="hello1"
                className={
                  "form-check-input " +
                  (errors.hello1 && touched.hello1 ? " is-invalid" : "")
                }
              />
              <label htmlFor="hello1" className="form-check-label">
                hello1
              </label>
              <ErrorMessage
                name="hello1"
                component="div"
                className="invalid-feedback"
              />
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-primary mr-2">
                Submit
              </button>
              <button type="reset" className="btn btn-secondary">
                Reset
              </button>
            </div>
          </Form>
        )}
      </Formik>
    );
  }
}

export default GoogleForm;
