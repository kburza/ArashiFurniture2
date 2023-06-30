import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import emailjs from "@emailjs/browser";

const contactSchema = yup.object().shape({
  user_name: yup
    .string()
    .matches(/^[A-Za-z]+$/, "Name should only contain letters")
    .required("* Name is required"),
  user_email: yup
    .string()
    .email("* Email is not valid")
    .required("* Email is required"),
  message: yup
    .string()
    .min(20, "* Message should be at least 20 characters long")
    .required("* Message is required"),
});

export const ContactForm = () => {
  const formik = useFormik({
    initialValues: {
      user_name: "",
      user_email: "",
      message: "",
    },
    initialErrors: {
      user_name: "* Name should only contain letters",
      user_email: "* Email is required",
      message: "* Message is required",
    },
    validationSchema: contactSchema,
    onSubmit: (values, { setSubmitting, resetForm }) => {
      emailjs
        .send(
          "service_4lf5fqn",
          "template_i4ktb0z",
          values,
          "ld7ERP6Oa2NgSfL9S"
        )
        .then(
          (result) => {
            console.log(result.text);
            resetForm({});
            setSubmitting(false);
            alert(
              "Thank you for contacting us! We will be in touch with you shortly!"
            );
          },
          (error) => {
            console.log(error.text);
            setSubmitting(false);
          }
        );
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="row">
        <div className="col-xl-6 col-lg-6">
          <div className="contact__input">
            <label>Name</label>
            <input
              type="text"
              name="user_name"
              onChange={formik.handleChange}
              value={formik.values.user_name}
            />
            <div style={{ color: "red" }}>{formik.errors.user_name}</div>
          </div>
        </div>
        <div className="col-xl-6 col-lg-6">
          <div className="contact__input">
            <label>Email</label>
            <input
              type="email"
              name="user_email"
              onChange={formik.handleChange}
              value={formik.values.user_email}
            />
            <div style={{ color: "red" }}>{formik.errors.user_email}</div>
          </div>
        </div>
        <div className="col-xl-12">
          <div className="contact__input">
            <label>Message</label>
            <textarea
              name="message"
              onChange={formik.handleChange}
              value={formik.values.message}
            />
            <div style={{ color: "red" }}>{formik.errors.message}</div>
          </div>
          <div className="contact__input">
            <input
              type="submit"
              value="Send"
              disabled={formik.isSubmitting || !formik.isValid || !formik.dirty}
            />
          </div>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
