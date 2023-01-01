
import { Route, Routes} from 'react-router-dom'
import Navbar from "./components/Navbar";
import {HomePage, CreateAccount, Applicant, CreateJoblist, JobsDetails, DisplayJobs, ProfileDisplay, MeetingDashboard, Meetings} from './pages'

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
      <Route path="/profile" element={<ProfileDisplay />} />
      <Route path="/meet" element={<MeetingDashboard />} />
      <Route path="/meets" element={<Meetings />} />
     </Routes>
    </>
    )
  
}
