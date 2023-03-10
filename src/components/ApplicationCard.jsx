import { Web3Button } from "@thirdweb-dev/react";
import React, { useState } from "react";
import { contractAddress } from "../constant";
import CustomButton from "./CustomButton";
import FormField from "./FormField";
import Loader from "./Loader";

const ApplicationCard = ({ index }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [form, setForm] = useState({
    name: "",
    coverLetter: "",
    resume: "",
    portfolio: "",
  });

  const handleFormFieldChange = (fieldName, e) => {
    setForm({ ...form, [fieldName]: e.target.value });
  };

  const handleSubmit = async (contract) => {
    setIsLoading(true);
    const data = await contract.call(
      "applyForJobs",
      index,
      form.name,
      form.coverLetter,
      form.resume,
      form.portfolio
    );
    setIsLoading(false);
    setSuccess(true);
  };
  return (
    <div className="col-span-2 ">
      {isLoading && <Loader />}
      <div className="flex flex-col bg-[#3a3a43] py-3 px-4">
        <form onSubmit={(e) => e.preventDefault()} className="mt-6">
          <FormField
            inputType="text"
            labelName="Full Name"
            placeholder="Enter FullName"
            value={form.name}
            handleChange={(e) => handleFormFieldChange("name", e)}
          />
          <FormField
            inputType="text"
            isTextArea
            labelName="Cover Letter"
            placeholder="Write a compeling cover letter"
            value={form.coverLetter}
            handleChange={(e) => handleFormFieldChange("coverLetter", e)}
          />
          <FormField
            inputType="text"
            labelName="Resume"
            placeholder="upload an uptodate resume"
            value={form.resume}
            handleChange={(e) => handleFormFieldChange("resume", e)}
          />
          <FormField
            inputType="text"
            labelName="Portfolio"
            placeholder="upload portfolio"
            value={form.portfolio}
            handleChange={(e) => handleFormFieldChange("portfolio", e)}
          />
          <div className="mt-6">
            {success && 
            <CustomButton
            title='Application Succesfull'
            style='bg-green-600 rounded-lg '
             />}

            {!success && (
              <Web3Button
                accentColor="green"
                contractAddress={contractAddress}
                action={handleSubmit}
              >
                applyForJobs
              </Web3Button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default ApplicationCard;
