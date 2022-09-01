import { useFormik } from "formik";
import { useState } from "react";

import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/esm/Container";
import Col from "react-bootstrap/esm/Col";
import { basicSchema } from "../../utils/basic.schema";
import contactImg from "../../assets/img/contact-img.svg";

import "./contact-form.styles.scss";

const ContactForm = () => {
  const [buttonText, setButtonText] = useState("Send");

  const onSubmit = async (values, actions) => {
    setButtonText("Sent");
    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm();
    setButtonText("Send");
    console.log(values);
  };

  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    },
    validationSchema: basicSchema,
    onSubmit,
  });

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <img src={contactImg} alt="opa" />
          </Col>
          <Col md={6}>
            <h2>Get In Touch</h2>
            <form autoComplete="off" onSubmit={handleSubmit}>
              <Row>
                <Col sm={6} className="px-1">
                  <input
                    onChange={handleChange}
                    value={values.firstName}
                    name="firstName"
                    onBlur={handleBlur}
                    type="text"
                    placeholder="First Name"
                    className={
                      errors.firstName && touched.firstName ? "input-error" : ""
                    }
                  />
                  {errors.firstName && (
                    <p className="error">{errors.firstName}</p>
                  )}
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    onChange={handleChange}
                    value={values.lastName}
                    name="lastName"
                    onBlur={handleBlur}
                    type="text"
                    placeholder="Last Name"
                    className={
                      errors.lastName && touched.lastName ? "input-error" : ""
                    }
                  />
                  {errors.lastName && (
                    <p className="error">{errors.lastName}</p>
                  )}
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="email"
                    value={values.email}
                    type="email"
                    placeholder="Email Adress"
                    className={
                      errors.email && touched.email ? "input-error" : ""
                    }
                  />
                  {errors.email && <p className="error">{errors.email}</p>}
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="phone"
                    value={values.phone}
                    type="tel"
                    placeholder="phone number"
                    className={errors.phone ? "input-error" : ""}
                  />
                  {errors.phone && touched.phone && (
                    <p className="error">{errors.phone}</p>
                  )}
                </Col>
                <Col sm={12} className="px-1">
                  <textarea
                    cols="30"
                    rows="6"
                    placeholder="message"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="message"
                    value={values.message}
                    type="text"
                    className={
                      errors.message && touched.message ? "input-error" : ""
                    }
                  ></textarea>
                  {errors.message && <p className="error">{errors.message}</p>}
                  <button disabled={isSubmitting} type="submit">
                    <span>{buttonText}</span>
                  </button>
                </Col>
                {/* <Col>
                  <p className="success">messagem de status</p>
                </Col> */}
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactForm;
