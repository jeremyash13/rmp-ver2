import React, { useRef } from "react"
import { Formik, Form, Field, ErrorMessage } from "formik"

export default function LoginForm(props) {
  const handleSubmit = (values, { setSubmitting }) => {
    fetch('http://localhost:3000/login', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
    })
  }

  return (
    <div className={props.className}>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form>
            <div>
              <Field type="email" name="email" placeholder="Email"/>
              <Field type="password" name="password" placeholder="Password" />
              <button type="submit">
                Submit
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  )
}
