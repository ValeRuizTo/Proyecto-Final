import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import AuthProvider, { AuthIsNotSignedIn, AuthIsSignedIn} from "./contexts/AuthContext";
import { Home, Login, Signin, Other, Success, Tweets, My, New} from './pages';
import './App.css';

function App() {
  return (

  <AuthProvider>
    <AuthIsSignedIn>
      <Router>
        <Routes>
            <Route path="/" element={<Navigate replace to={"/tweets"} />} />
            <Route path="/login" element={<Navigate replace to={"/tweets"} />} />
            <Route path="/signin" element={<Navigate replace to={"/tweets"} />} />
            <Route path="/success" element={<Success />} />
            <Route path="/tweets" element={<Tweets />} />
            <Route path="/my" element={<My />} />
            <Route path="/new" element={<New />} />
            <Route path="*" element={<Other />} />
        </Routes>
      </Router>
    </AuthIsSignedIn>
    <AuthIsNotSignedIn>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path={"/login"} element={<Login />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/success" element={<Success />} />
          <Route path="/tweets" element={<Navigate replace to={"/"} />} />
          <Route path="/my" element={<Navigate replace to={"/"} />} />
          <Route path="/new" element={<Navigate replace to={"/"} />} />
          <Route path="*" element={<Other />} />
        </Routes>
      </Router>
    </AuthIsNotSignedIn>
  </AuthProvider>
  );
}

export default App;