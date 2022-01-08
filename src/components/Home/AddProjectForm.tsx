import { Form, Formik } from "formik";
import React from "react";
import * as yup from "yup";
import InputField from "../Formik/InputField";

const AddProjectForm: React.FC = () => {
  const initialValues = {
    project_name: "",
    color: "",
  };

  const validationSchema = yup.object();

  const addProject = () => {};
  return (
    <div className="add-project">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={addProject}>
        <Form>
          <InputField type="text" label="project name" name="project_name" />
          <InputField type="text" label="project name" name="project_name" />
        </Form>
      </Formik>
    </div>
  );
};

export default AddProjectForm;
