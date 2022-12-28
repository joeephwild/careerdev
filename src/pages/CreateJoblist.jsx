import { ethers } from "ethers";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CustomButton, FormField } from "../components";
import { useStateContext } from "../context";

const CreateJoblist = () => {
  const { listAjob } = useStateContext()
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
  });

  const handleFormFieldChange = (fieldName, e) => {
    setForm({...form, [fieldName]: e.target.value});
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    setIsLoading(true);
    await listAjob({...form, value: ethers.utils.formatEther("0.05", 18)})
    setIsLoading(false)
  };
  return (
    <div className="w-full h-full items-center flex flex-col justify-center">
      <div className="flex  flex-col rounded-[10px] sm:p-10 p-4">
        {isLoading && "loading..."}
        <div className=" flex-col flex justify-center items-center p-[16px] sm:min-w-[680px] bg-[#3a3a43] rounded-[10px]">
          <div className="text-white text-xl font-bold">Applicant Account</div>
          <form
            onSubmit={handleSubmit}
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
                inputType="number"
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
              value={form.profile}
              handleChange={(e) => handleFormFieldChange("profile", e)}
            />
            <CustomButton
              btnType="submit"
              title="Post"
              style="bg-green-500 rounded-lg mt-8"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateJoblist;
