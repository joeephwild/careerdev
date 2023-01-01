import { Web3Button } from "@thirdweb-dev/react";
import { ethers } from "ethers";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CustomButton, FormField, Loader } from "../components";
import { contractAddress } from "../constant";
import { useStateContext } from "../context"

const CreateJoblist = () => {
  //const { listAjob } = useStateContext();
  const amount = 0.05
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState({
    companyName: "",
    companyImage: "",
    category: "",
    salary: "",
    description: "",
    skills: "",
    location: "",
    jobType: "",
    value: ethers.utils.parseEther(amount.toString())
  });

  const handleFormFieldChange = (fieldName, e) => {
    setForm({ ...form, [fieldName]: e.target.value });
  };
  const handleSubmit = async(contract) => {
    setIsLoading(true)
   const data = await contract.call(
      "listAJob",
      form.companyName,
      form.companyImage,
      form.category,
      form.salary,
      form.description,
      form.skills,
      form.location,
      form.jobType,
    );
    console.log(data)
    setIsLoading(false);
    navigate("/jobs")
  }
  return (
    <div className="w-full h-full items-center flex flex-col justify-center">
      <div className="flex  flex-col rounded-[10px] sm:p-10 p-4">
        {isLoading && <Loader />}
        <div className=" flex-col flex justify-center items-center p-[16px] sm:min-w-[680px] bg-[#3a3a43] rounded-[10px]">
          <div className="text-white text-xl font-bold">Applicant Account</div>
          <form
            onSubmit={(e) => e.preventDefault()}
            action=""
            className="mt-6 flex flex-col items-center w-full"
          >
            <div className="flex flex-wrap gap-[40px]">
              <FormField
                labelName="Company Name *"
                placeholder="Starbucks"
                inputType="text"
                value={form.companyName}
                handleChange={(e) => handleFormFieldChange("companyName", e)}
              />
              <FormField
                labelName="Salary *"
                placeholder="$400000- $1200000"
                inputType="number"
                value={form.salary}
                handleChange={(e) => handleFormFieldChange("salary", e)}
              />
            </div>
            <div className="flex flex-wrap gap-[40px]">
              <FormField
                labelName="Skills *"
                placeholder="Enter rspective skills"
                inputType="text"
                value={form.skills}
                handleChange={(e) => handleFormFieldChange("skills", e)}
              />
              <FormField
                labelName="Category *"
                placeholder="Enter company Category"
                inputType="text"
                value={form.category}
                handleChange={(e) => handleFormFieldChange("category", e)}
              />
            </div>
            <div className="flex flex-wrap gap-[40px]">
              <FormField
                labelName="Location *"
                placeholder="Enter Location.."
                inputType="text"
                value={form.location}
                handleChange={(e) => handleFormFieldChange("location", e)}
              />
              <FormField
                labelName="Remote/Onsite/Hybrid *"
                placeholder="Enter JobType..."
                inputType="text"
                value={form.jobType}
                handleChange={(e) => handleFormFieldChange("jobType", e)}
              />
            </div>
            <FormField
              isTextArea
              labelName="Description *"
              placeholder="Enter required details for the job"
              inputType="text"
              value={form.description}
              handleChange={(e) => handleFormFieldChange("description", e)}
            />
            <FormField
              labelName="Company Image *"
              placeholder="Enter valid image url"
              inputType="text"
              value={form.companyImage}
              handleChange={(e) => handleFormFieldChange("companyImage", e)}
            />
            <div>
              <Web3Button
              overrides={amount}
                contractAddress={contractAddress}
                action={handleSubmit}
              >
                listAJob
              </Web3Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateJoblist;
