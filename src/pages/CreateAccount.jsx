import React, { useState } from "react";
import { ApplicantsForm, EmployerForm } from "../components";

const CreateAccount = () => {
   const [active, setActive] = useState(1)
  return (
    <div className="w-full h-full mt-[90px] gap-6 grid items-center">
      <div className="w-full h-full items-center flex flex-col justify-center">
        <EmployerForm />
      </div>
    </div>
  );
};

export default CreateAccount;
