
import './App.css';
import SignIn from './pages/SignIn';
import { BrowserRouter as Router, Route, Routes,useLocation } from 'react-router-dom';
import Signup from './pages/Signup';
import PageOne from './pages/PageOne';
import PageTwo from './pages/PageTwo';
import PageThree from './pages/PageThree';
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify';
import ProgressBar from './pages/ProgressBar';
import Submission from './pages/Submission';
function App() {
  return (
     <Router>
      <ToastContainer/>
         <Routes>
              <Route path="/" element={<SignIn/>}/> 
              <Route path="/signin" element={<SignIn/>}/> 
              <Route path="/signup" element={<Signup/>}/>
              <Route path="/submissions" element={<Submission/>}/>
              <Route path="/pageone" element={<PageWrapper component={PageOne} progress={33} />} />
              <Route path="/pagetwo" element={<PageWrapper component={PageTwo} progress={66} />} />
              <Route path="/pagethree" element={<PageWrapper component={PageThree} progress={100} />} />
         </Routes>
     </Router>
  );
}

function PageWrapper({ component: Component, progress }) {
  const location = useLocation();

  return (
    <>
      <ProgressBar progress={progress} />
      <Component />
    </>
  );
}
export default App;
