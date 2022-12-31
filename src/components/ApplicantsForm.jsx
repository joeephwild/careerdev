import { Web3Button } from "@thirdweb-dev/react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useStateContext } from "../context";
import CustomButton from "./CustomButton";
import FormField from "./FormField";
import Loader from "./Loader";

const ApplicantsForm = () => {
  //const { createAnAccount } = useStateContext()
  const navigate = useNavigate();
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
    setForm({ ...form, [fieldName]: e.target.value });
  };

  const checkIfImage = (url, callback) => {
    const img = new Image();
    img.src = url;

    if (img.complete) callback(true);

    img.onload = () => callback(true);
    img.onerror = () => callback(false);
  };
  const handleSubmit = async(contract) => {
    setIsLoading(true)
    const data = await contract.call(
        "createAnAccount",
        form.name,
        form.skills,
        form.experience,
        form.salaryExpectation,
        form.description,
        form.profile,
        form.githubLink
      );
      console.log(data)
      setIsLoading(false)
      navigate('/')
  }
    return (
    <div className="flex  flex-col rounded-[10px] sm:p-10 p-4">
      <div className=" flex-col flex justify-center items-center p-[16px] sm:min-w-[680px] bg-[#3a3a43] rounded-[10px]">
      {isLoading && <Loader />}
        <div className="text-white text-xl font-bold">Applicant Account</div>
        <form action="" className="mt-6 flex flex-col items-center w-full">
          <div className="flex flex-wrap gap-[40px]">
            <FormField
              labelName="name *"
              placeholder="Enter fullName"
              inputType="text"
              value={form.name}
              handleChange={(e) => handleFormFieldChange("name", e)}
            />
            <FormField
              labelName="Salary Expectation *"
              placeholder="$400000- $1200000"
              inputType="text"
              value={form.salaryExpectation}
              handleChange={(e) =>
                handleFormFieldChange("salaryExpectation", e)
              }
            />
          </div>
          <div className="flex flex-wrap gap-[40px]">
            <FormField
              labelName="Skills *"
              placeholder="Enter Skills"
              inputType="text"
              value={form.skills}
              handleChange={(e) => handleFormFieldChange("skills", e)}
            />
            <FormField
              labelName="Experience *"
              placeholder="9yrs"
              inputType="text"
              value={form.experience}
              handleChange={(e) =>
                handleFormFieldChange("experience", e)
              }
            />
          </div>
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
            labelName="Github Link *"
            placeholder="Enter valid github/portfolio url"
            inputType="text"
            value={form.githubLink}
            handleChange={(e) => handleFormFieldChange("githubLink", e)}
          />
          <div className="mt-6">
            <Web3Button
              accentColor="green"
              contractAddress="0xC5297f0E7a89E383deEce762cbe3eA5B0a2E1E43"
              action={handleSubmit}
            >
              createAnAccount
            </Web3Button>
          </div>
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
