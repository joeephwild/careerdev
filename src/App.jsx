
import { Route, Routes} from 'react-router-dom'
import Navbar from "./components/Navbar";
import {HomePage, CreateAccount, Applicant, CreateJoblist, JobsDetails, DisplayJobs} from './pages'

export default function Home() {
  return (
     <>
   <Navbar />
     <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/createaccount" element={<CreateAccount />} />
      <Route path="/ApplicantForm" element={<Applicant />} />
      <Route path="/list" element={<CreateJoblist />} />
      <Route path="/jobs" element={<DisplayJobs />} />
      <Route path="/jobs-details/:id" element={<JobsDetails />} />
     </Routes>
    </>
    )
  
}
