import { Web3Button } from "@thirdweb-dev/react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { contractAddress } from "../constant";
import { useStateContext } from "../context";
import CustomButton from "./CustomButton";
import FormField from "./FormField";
import Loader from "./Loader";

const EmployerForm = () => {
  //const { createEmployerAccount } = useStateContext();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    companyName: "",
    category: "",
    description: "",
    location: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleFormFieldChange = (fieldName, e) => {
    setForm({ ...form, [fieldName]: e.target.value });
  };

  const handleSubmit = async(contract) => {
    setIsLoading(true);
  const data = await  contract.call(
      "createEmployerAccount",
      form.companyName,
      form.category,
      form.description,
      form.location
    );
    console.log(data)
    setIsLoading(false);
    navigate("/")
  };
  return (
    <div className="flex  flex-col rounded-[10px] sm:p-10 p-4">
      <div className=" flex-col flex justify-center items-center p-[16px] sm:min-w-[680px] bg-[#3a3a43] rounded-[10px]">
        {isLoading && <Loader />}
        <div className="text-white text-xl font-bold">Employer Account</div>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="mt-6 flex flex-col items-center w-full"
        >
          <FormField
            labelName="Company Name *"
            placeholder="Pepsi"
            inputType="text"
            value={form.companyName}
            handleChange={(e) => handleFormFieldChange("companyName", e)}
          />
          <FormField
            labelName="Company Category *"
            placeholder="Enter companes description..."
            inputType="text"
            value={form.category}
            handleChange={(e) => handleFormFieldChange("category", e)}
          />
          <FormField
            isTextArea
            labelName="Company Description *"
            placeholder="Enter Description"
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
          <div className="mt-6">
            <Web3Button
              accentColor="green"
              contractAddress={contractAddress}
              action={handleSubmit}
            >
              createEmployerAccount
            </Web3Button>
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
