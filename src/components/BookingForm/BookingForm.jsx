import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import toast from "react-hot-toast";
import css from "./BookingForm.module.css";
import sprite from "../../assets/icons/symbol-defs.svg";

const bookingSchema = Yup.object({
  name: Yup.string()
    .min(2, "Name is too short")
    .matches(/^[A-Za-z\s]+$/, "Only letters are allowed")
    .required("Please enter your name."),
  email: Yup.string()
    .email("Invalid email address")
    .required("Please enter your email."),
});

const initialValues = {
  name: "",
  email: "",
};

export default function BookingForm() {
  const handleSubmit = (values, actions) => {
    toast.success("Camper booked successfully!");
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={bookingSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched }) => (
        <Form className={css.form}>
          <div className={css.headerWrapper}>
            <h2 className={css.title}>Book your campervan now</h2>
            <p className={css.text}>
              Stay connected! We are always ready to help you.
            </p>
          </div>

          {/* Name Field */}
          <div className={css.fieldWrapper}>
            <Field
              className={`${css.input} ${
                errors.name && touched.name ? css.inputError : ""
              }`}
              type="text"
              name="name"
              placeholder="Name*"
            />
            {errors.name && touched.name && (
              <div className={css.iconContainer}>
                <svg className={css.errorIcon} width="20" height="20">
                  <use href={`${sprite}#icon-error`} />
                </svg>
              </div>
            )}
            <ErrorMessage className={css.errorText} component="p" name="name" />
          </div>

          {/* Email Field */}
          <div className={css.fieldWrapper}>
            <Field
              className={`${css.input} ${
                errors.email && touched.email ? css.inputError : ""
              }`}
              type="email"
              name="email"
              placeholder="Email*"
            />
            {errors.email && touched.email && (
              <div className={css.iconContainer}>
                <svg className={css.errorIcon} width="20" height="20">
                  <use href={`${sprite}#icon-error`} />
                </svg>
              </div>
            )}
            <ErrorMessage className={css.errorText} component="p" name="email" />
          </div>

          <button className={css.button} type="submit">
            Send
          </button>
        </Form>
      )}
    </Formik>
  );
}