import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import { Button } from "./ui/button";
import { FormValues } from "@/types";
import toast from "react-hot-toast";

const validationSchema = Yup.object({
  name: Yup.string().required("Ім'я обов'язкове"),
  email: Yup.string()
    .email("Невірний формат email")
    .required("Email обов'язковий"),
  bookingDate: Yup.date().required("Дата бронювання обов'язкова").nullable(),
  comment: Yup.string(),
});
const initialValues = {
  name: "",
  email: "",
  bookingDate: "",
  comment: "",
};

const message = () => {
  toast.success("Nice, we will call you back later.", {
    position: "bottom-right",
  });
};

export default function BookingForm() {
  const handleSubmit = (
    values: FormValues,
    actions: FormikHelpers<FormValues>
  ) => {
    console.log(values);
    message();
    actions.resetForm();
  };

  return (
    <div className="p-10 max-w-screen-xl w-1/2 border rounded-lg">
      <h1 className="text-2xl font-semibold text-left text-gray-800 mb-2">
        Book your campervan now
      </h1>
      <p className="text-sm text-gray-600 text-left mb-4">
        Stay connected. We are always ready to help you.
      </p>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form className="space-y-4">
            <div className="form-group">
              <label htmlFor="name" className="block text-gray-700">
                Name*
              </label>
              <Field
                name="name"
                type="text"
                className="mt-1 p-2 w-full border border-gray-300 rounded focus:border-pink-400 focus:ring focus:ring-pink-200"
              />
              <ErrorMessage
                name="name"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email" className="block text-gray-700">
                Email*
              </label>
              <Field
                name="email"
                type="email"
                className="mt-1 p-2 w-full border border-gray-300 rounded focus:border-pink-400 focus:ring focus:ring-pink-200"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>
            <div className="form-group">
              <label htmlFor="bookingDate" className="block text-gray-700">
                Booking date*
              </label>
              <Field
                name="bookingDate"
                type="date"
                className="mt-1 p-2 w-full border border-gray-300 rounded focus:border-pink-400 focus:ring focus:ring-pink-200"
              />
              <ErrorMessage
                name="bookingDate"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>
            <div className="form-group">
              <label htmlFor="comment" className="block text-gray-700">
                Comment:
              </label>
              <Field
                name="comment"
                as="textarea"
                className="mt-1 p-2 w-full border border-gray-300 rounded focus:border-pink-400 focus:ring focus:ring-pink-200 h-24"
              />
            </div>
            <Button variant="destructive" size="lg" className="rounded-3xl">
              Send
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
