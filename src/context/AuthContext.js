import { jwtDecode } from "jwt-decode";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();
export default AuthContext;

export const AuthProvider = ({ children }) => {
  const [email, setEmail] = useState("");
  const [password, setPassoword] = useState("");

  const [totals, setTotals] = useState([]);
  const [allUsers, setAllUsers] = useState([]);
  const [allMerchants, setAllMerchants] = useState([]);
  const [approvableMerchants, setApprovableMerchants] = useState([]);

  const [authTokens, setAuthTokens] = useState(() =>
    localStorage.getItem("authTokens")
      ? JSON.parse(localStorage.getItem("authTokens"))
      : null
  );
  const [user, setUser] = useState(() =>
    localStorage.getItem("authTokens")
      ? jwtDecode(localStorage.getItem("authTokens"))
      : null
  );

  const navigate = useNavigate();

  const loginUser = async (e) => {
    e.preventDefault();
  };

  const logoutUser = () => {
    setAuthTokens(null);
    setUser(null);
    localStorage.removeItem("authTokens");
    navigate("/signin");
  };

  const getTotals = async () => {};

  const getUnApprovedMerchants = async () => {};

  const getUsers = async () => {};

  const getMerchants = async () => {};

  return (
    <AuthContext.Provider
      value={{
        authTokens,
        user,
        loginUser,
        logoutUser,
        setEmail,
        setPassoword,
        totals,
        getTotals,
        allUsers,
        getUsers,
        allMerchants,
        approvableMerchants,
        getUnApprovedMerchants,
        getMerchants,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
