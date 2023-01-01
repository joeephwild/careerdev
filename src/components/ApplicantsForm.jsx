import { Web3Button } from "@thirdweb-dev/react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { contractAddress } from "../constant";
import FormField from "./FormField";
import Loader from "./Loader";

const ApplicantsForm = () => {
  //const { createEmployerAccount } = useStateContext();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    skills: "",
    expereience: "",
    salary: "",
    description: "",
    image: "",
    link: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleFormFieldChange = (fieldName, e) => {
    setForm({ ...form, [fieldName]: e.target.value });
  };

  const handleSubmit = async (contract) => {
    setIsLoading(true);
    const data = await contract.call(
      "createAnAccount",
      form.name,
      form.skills,
      form.expereience,
      form.salary,
      form.description,
      form.image,
      form.link
    );
    console.log(data);
    setIsLoading(false);
    navigate("/");
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
          <div className="flex flex-wrap gap-[40px]">
            <FormField
              labelName="FullName *"
              placeholder="John Doe"
              inputType="text"
              value={form.name}
              handleChange={(e) => handleFormFieldChange("name", e)}
            />
            <FormField
              labelName="Salary Expectation *"
              placeholder="$400000- $1200000"
              inputType="number"
              value={form.salary}
              handleChange={(e) => handleFormFieldChange("salary", e)}
            />
          </div>
          <div className="flex flex-wrap gap-[40px]">
            <FormField
              labelName="Enter Role *"
              placeholder="Blockchain Developer"
              inputType="text"
              value={form.skills}
              handleChange={(e) => handleFormFieldChange("skills", e)}
            />
            <FormField
              labelName="Experience *"
              placeholder="8yrs"
              inputType="number"
              value={form.expereience}
              handleChange={(e) => handleFormFieldChange("expereience", e)}
            />
          </div>
          <FormField
          isTextArea
            labelName="Description *"
            placeholder="Enter compeling description..."
            inputType="text"
            value={form.description}
            handleChange={(e) => handleFormFieldChange("description", e)}
          />
          <FormField
            labelName="Profile Image *"
            placeholder="Enter valid url"
            inputType="text"
            value={form.image}
            handleChange={(e) => handleFormFieldChange("image", e)}
          />
          <FormField
            labelName="Location *"
            placeholder="Enter company Location"
            inputType="text"
            value={form.link}
            handleChange={(e) => handleFormFieldChange("link", e)}
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

export default ApplicantsForm;
