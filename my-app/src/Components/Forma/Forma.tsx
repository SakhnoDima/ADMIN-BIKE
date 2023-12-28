import React from "react";
import { Field, Form, Formik } from "formik";
import uniqid from "uniqid";
import { SignupSchema } from "../../Constant";
import { inputs } from "../../Constant";
import Button, { ButtonType } from "../Button/Button";

const inputStyle =
  "w-[235px] h-[29px] px-[16px] py-[5px] bg-gray-color rounded-[5px] placeholder:font-main placeholder:text-sm placeholder:font-normal";

interface IFormInitValues {
  name: string;
  type: string;
  color: string;
  wheelSize: string;
  price: string;
  id: string;
  desc: string;
}

const Forma: React.FC<{}> = () => {
  const initialValues: IFormInitValues = {
    name: "",
    type: "",
    color: "",
    wheelSize: "",
    price: "",
    id: uniqid(),
    desc: "",
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={SignupSchema}
      onSubmit={(values, actions) => {
        console.log({ values, actions });

        actions.setSubmitting(false);
      }}
    >
      {({ errors, touched }) => (
        <Form className="w-[482px]">
          <div className="w-[481px] flex flex-wrap gap-x-[11px] gap-y-[10px] ">
            {inputs.map((item) => (
              <div className="relative" key={item.inputName}>
                <Field
                  className={inputStyle}
                  name={item.inputName}
                  required
                  placeholder={item.placeholder}
                />
                {Object.keys(errors).includes(item.inputName) &&
                Object.keys(touched).includes(item.inputName) ? (
                  <p className="text-xs text-red-600 text-center mt-[2px] absolute top-[5px] right-[16px]">
                    {Object.entries(errors).map((el) => {
                      if (el[0] !== item.inputName) {
                        return null;
                      }
                      return el[1];
                    })}
                  </p>
                ) : null}
              </div>
            ))}
          </div>
          <Field
            as="textarea"
            className={` w-[100%] px-[16px] py-[5px] bg-gray-color rounded-[5px] placeholder:font-main placeholder:text-sm placeholder:font-normal my-[10px] h-[75px] resize-none`}
            name="desc"
            placeholder="Description"
          />

          <div className="flex flex-row gap-[11px]">
            <Button type={ButtonType.SUBMIT} name="SAVE" />
            <Button type={ButtonType.RESET} name="CLEAR" />
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default Forma;