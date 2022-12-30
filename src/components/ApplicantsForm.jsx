import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useStateContext } from "../context";
import CustomButton from "./CustomButton";
import FormField from "./FormField";

const ApplicantsForm = () => {
  const { createAnAccount } = useStateContext()
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    skills: "",
    experience: "",
    salaryExpectation: "",
    description: "",
    profile: "",
    githubLink: "",
  });
  const handleFormFieldChange = (fieldName, e) => {
    setForm({...form, [fieldName]: e.target.value });
  }

  const checkIfImage = (url, callback) => {
    const img = new Image();
    img.src = url;
  
    if (img.complete) callback(true);
  
    img.onload = () => callback(true);
    img.onerror = () => callback(false);
  };

  const handleSubmit = async(e) => {
    e.preventDefault();

    checkIfImage(form.profile, async(exist) => {
      if(exist){
        setIsLoading(true);
        await createAnAccount({...form})
        setIsLoading(false);
        navigate("/")
      }
    })
  }
  return (
    <div className="flex  flex-col rounded-[10px] sm:p-10 p-4">
      {isLoading && "loading..."}
      <div className=" flex-col flex justify-center items-center p-[16px] sm:min-w-[680px] bg-[#3a3a43] rounded-[10px]">
        <div className="text-white text-xl font-bold">Applicant Account</div>
        <form onSubmit={handleSubmit} action="" className="mt-6 flex flex-col items-center w-full">
          <div className="flex flex-wrap gap-[40px]">
            <FormField
              labelName="Experience *"
              placeholder="Enter years of experience"
              inputType="text"
              value={form.experience}
              handleChange={(e) => handleFormFieldChange("experience", e)}
            />
            <FormField
              labelName="Salary Expectation *"
              placeholder="$400000- $1200000"
              inputType="number"
              value={form.salaryExpectation}
              handleChange={(e) =>
                handleFormFieldChange("salaryExpectation", e)
              }
            />
          </div>
          <FormField
            labelName="Skills *"
            placeholder="Ente Your skills"
            inputType="text"
            value={form.skills}
            handleChange={(e) => handleFormFieldChange("skills", e)}
          />
          <FormField
            isTextArea
            labelName="Description *"
            placeholder="Express your personality"
            inputType="text"
            value={form.description}
            handleChange={(e) => handleFormFieldChange("description", e)}
          />
          <FormField
            labelName="Profile Image *"
            placeholder="Enter valid image url"
            inputType="text"
            value={form.profile}
            handleChange={(e) => handleFormFieldChange("profile", e)}
          />
          <FormField
            labelName="Profile Image *"
            placeholder="Enter valid github/portfolio url"
            inputType="url"
            value={form.githubLink}
            handleChange={(e) => handleFormFieldChange("githubLink", e)}
          />
          <CustomButton
            btnType="submit"
            title="Create Account"
            style="bg-green-500 rounded-lg mt-8"
          />
          <div className="flex flex-col items-center mt-6 ">
            <span>Wanna apply for jobs, sign up as an employer below</span>
            <Link to="/createaccount">
              <span className="text-lg cursor-pointer font-bold underline text-green-500">
                Employer Account
              </span>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ApplicantsForm;
