import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useStateContext } from "../context";
import CustomButton from "./CustomButton";
import FormField from "./FormField";

const EmployerForm = () => {
  const {  createEmployerAccount, address, hello } = useStateContext()
  const navigate = useNavigate()
  const [form, setForm] = useState({
    companyImage: "",
    name: "",
    description: "",
    location: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  
  const handleFormFieldChange = (fieldName, e) => {
    setForm({ ...form, [fieldName]: e.target.value })
  }

  const handleSubmit = async() => {
    await createEmployerAccount(form);
  }

  return (
    <div className="flex  flex-col rounded-[10px] sm:p-10 p-4">
      {isLoading && "loading..."}
      <div className=" flex-col flex justify-center items-center p-[16px] sm:min-w-[680px] bg-[#3a3a43] rounded-[10px]">
        <div className="text-white text-xl font-bold">Employer Account</div>
        
        <form onSubmit={(e) => 
    e.preventDefault()} className="mt-6 flex flex-col items-center w-full">
          <FormField
            labelName="Company Name *"
            placeholder="Pepsi"
            inputType="text"
            value={form.name}
            handleChange={(e) => handleFormFieldChange("name", e)}
          />
          <FormField
            isTextArea
            labelName="Company Description *"
            placeholder="Enter companes description..."
            inputType="text"
            value={form.description}
            handleChange={(e) => handleFormFieldChange("description", e)}
          />
          <FormField
           labelName="Location *"
           placeholder="Enter company Location"
           inputType="text"
           value={form.location}
           handleChange={(e) => handleFormFieldChange("location", e)}
         />
          <FormField
            labelName="Company Image *"
            placeholder="Enter valid image"
            inputType="text"
            value={form.companyImage}
            handleChange={(e) => handleFormFieldChange("companyImage", e)}
          />
          <div onClick={handleSubmit}>
          <CustomButton
            btnType="submit"
            title="Create Account"
            style="bg-green-500 rounded-lg mt-8"
          />
          </div>
          <div className="flex flex-col items-center mt-6 ">
            <span>Wanna apply for jobs, sign up as an applicant below</span>
            <Link to="/ApplicantForm">
              <span className="text-lg font-bold underline text-green-500">
                Create an Applicant account
              </span>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EmployerForm;
