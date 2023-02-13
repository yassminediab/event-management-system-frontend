import {Route, Routes} from 'react-router-dom';
import MainNavigation from "./components/layouts/mainNavigation";
import 'react-toastify/dist/ReactToastify.css';
import RegisterPage from "./pages/register";
import LoginPage from "./pages/login";
import RegisterCompanyPage from "./pages/register-company";
import CompaniesPage from "./pages/companies";
import LogoutPage from "./pages/logout";
import EventsPageList from "./pages/events";
import MyEventsPageList from "./pages/my-events";
import CreateEventPage from "./pages/create-event";
import EditEventPage from "./pages/edit-event";
import DeleteEventPage from "./pages/delete-event";
import CompanyEventsPageList from "./pages/company-events";
import UserEventsPageList from "./pages/user-events";
import UsersPageList from "./pages/rsvp";
import Profile from "./pages/profile";
import CompanyProfile from "./pages/company-profile";
import EventFeedbackForm from "./components/events/event-feedback";
import EventFeedbackPage from "./pages/event-feedback";


function App() {
  return (

      <div>
        <MainNavigation/>
        <Routes>
          <Route path='/register' element={<RegisterPage/>}>
          </Route>
          <Route path='/register/company' element={<RegisterCompanyPage/>}>
          </Route>
            <Route path='/login' element={<LoginPage/>}>
            </Route>
            <Route path='/companies' element={<CompaniesPage/>}>
            </Route>
            <Route path='/logout' element={<LogoutPage/>}>
            </Route>
            <Route path='/events' element={<EventsPageList/>}>
            </Route>
            <Route path='/companyEvents' element={<MyEventsPageList/>}>
            </Route>
            <Route path='/events/create' element={<CreateEventPage/>}>
            </Route>
          <Route path='/events/:id/edit' element={<EditEventPage/>}>
          </Route>
          <Route path='/events/:id/delete' element={<DeleteEventPage/>}>
          </Route>
          <Route path='/companies/:id/events' element={<CompanyEventsPageList/>}>
          </Route>
          <Route path='/userEvents' element={<UserEventsPageList/>}>
          </Route>
          <Route path='/events/:id/rsvp' element={<UsersPageList/>}>
        </Route>
          <Route path='/profile' element={<Profile/>}>
        </Route>
          <Route path='/company/profile' element={<CompanyProfile/>}>
          </Route>
          <Route path='/events/:id/feedback' element={<EventFeedbackPage/>}>
          </Route>

        </Routes>
      </div>

  );
}

export default App;
