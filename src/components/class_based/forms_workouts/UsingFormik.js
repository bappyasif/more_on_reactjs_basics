import { Field, Form, Formik } from "formik";
import React, { Component } from "react";

export class UsingFormik extends Component {
  render() {
    return (
      <div>
        <h4>contact us</h4>
        <Formik
          initialValues={{ name: "ab", email: "ab@ba.biz" }}
          onSubmit={async (values) => {
            await new Promise((resolve) => setTimeout(resolve, 200));
            alert(JSON.stringify(values, null, 2));
          }}
        >
          <Form>
            <Field name="name" type="text" />
            <Field name="email" type="email" />
            <button type="submit">submit</button>
          </Form>
          {/* <fieldset>
            <Form>
              <Field name="name" type="text" />
              <Field name="email" type="email" />
              <button type="submit">submit</button>
            </Form>
          </fieldset> */}
        </Formik>
      </div>
    );
  }
}
