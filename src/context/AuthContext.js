import { jwtDecode } from "jwt-decode";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const AuthContext = createContext();
export default AuthContext;

export const AuthProvider = ({ children }) => {
  const [email, setEmail] = useState("");
  const [password, setPassoword] = useState("");
  const [loading, setLoading] = useState(false);

  const [totals, setTotals] = useState([]);
  const [allParents, setAllParents] = useState([]);
  const [allTutors, setAllTutors] = useState([]);
  const [approvableTutors, setApprovableTutors] = useState([]);
  const [classes, setClasses] = useState([]);
  const [pendingPayment, setPendingPayment] = useState([]);

  const [authTokens, setAuthTokens] = useState(() =>
    localStorage.getItem("Tokens")
      ? JSON.parse(localStorage.getItem("Tokens"))
      : null
  );
  const [user, setUser] = useState(() =>
    localStorage.getItem("Tokens")
      ? jwtDecode(localStorage.getItem("Tokens"))
      : null
  );

  const navigate = useNavigate();

  const loginUser = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      let response = await fetch("https://welearnapi.fun/api/token/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });
      const data = await response.json();
      console.log(data);

      if (response.status === 200) {
        const decode = jwtDecode(data.access);

        if (decode.user_type === "Admin") {
          setAuthTokens(data);
          setUser(decode);
          localStorage.setItem("Tokens", JSON.stringify(data));
          navigate("/dashboard");
        } else {
          toast.error("User is not an Admin!!", {
            duration: 3000,
            position: "top-center",
            style: {
              backgroundColor: "#FFCCCC",
              fontFamily: "Poppins, sans-serif",
              fontWeight: "bolder",
              fontSize: "0.9rem",
            },
          });
        }
      } else {
        toast.error(data.detail, {
          duration: 4000,
          position: "top-center",
        });
        console.log(data);
      }
    } catch (error) {
      console.log("Error", error);
    } finally {
      setLoading(false);
    }
  };

  const logoutUser = () => {
    setAuthTokens(null);
    setUser(null);
    localStorage.removeItem("Tokens");
    navigate("/login");
  };

  const getTotals = async () => {};

  const getUnApprovedTutors = async () => {
    try {
      let response = await fetch(
        "https://welearnapi.fun/api/instructor-profiles/",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${authTokens.access}`,
          },
        }
      );

      const data = await response.json();
      console.log(data);
      if (response.ok) {
        const unapprovedTutors = data.filter(
          (tutor) => tutor.is_verified === false
        );

        setApprovableTutors(unapprovedTutors);
      } else {
        toast.error(`Failed to fetch pending tutors ${response.statusText}`, {
          duration: 4000,
          position: "top-center",
          style: {
            backgroundColor: "#FFCCCC",
            fontFamily: "Poppins, sans-serif",
            fontWeight: "bolder",
            fontSize: "0.9rem",
          },
        });
        console.log("Failed to fetch pending tutors:", response.statusText);
      }
    } catch (error) {
      console.log("Error fetching pending tutors:", error);
    }
  };

  const getParents = async () => {
    try {
      let response = await fetch(
        "https://welearnapi.fun/api/student-profiles/",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${authTokens.access}`,
          },
        }
      );

      const data = await response.json();

      if (response.ok) {
        setAllParents(data);
      } else {
        toast.error(`Failed to fetch parents ${response.statusText}`, {
          duration: 4000,
          position: "top-center",
          style: {
            backgroundColor: "#FFCCCC",
            fontFamily: "Poppins, sans-serif",
            fontWeight: "bolder",
            fontSize: "0.9rem",
          },
        });
        console.log("Failed to fetch parents", response.statusText);
      }
    } catch (error) {
      console.error("Failed to fetch parents", error);
    }
  };

  const getTutors = async () => {
    try {
      let response = await fetch(
        "https://welearnapi.fun/api/instructor-profiles/",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${authTokens.access}`,
          },
        }
      );

      const data = await response.json();

      if (response.ok) {
        const approvedTutors = data.filter(
          (tutor) => tutor.is_verified === true
        );
        setAllTutors(approvedTutors);
      } else {
        toast.error(`Failed to fetch tutors ${response.statusText}`, {
          duration: 4000,
          position: "top-center",
          style: {
            backgroundColor: "#FFCCCC",
            fontFamily: "Poppins, sans-serif",
            fontWeight: "bolder",
            fontSize: "0.9rem",
          },
        });
        console.log("Failed to fetch tutors", response.statusText);
      }
    } catch (error) {
      console.error("Failed to fetch tutors", error);
    }
  };

  const getClasses = async () => {
    try {
      let response = await fetch("https://welearnapi.fun/api/classes/", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authTokens.access}`,
        },
      });

      const data = await response.json();

      if (response.ok) {
        setClasses(data);
      } else {
        toast.error(`Failed to fetch classes ${response.statusText}`, {
          duration: 4000,
          position: "top-center",
          style: {
            backgroundColor: "#FFCCCC",
            fontFamily: "Poppins, sans-serif",
            fontWeight: "bolder",
            fontSize: "0.9rem",
          },
        });
        console.log("Failed to fetch classes", response.statusText);
      }
    } catch (error) {
      console.error("Failed to fetch classes", error);
    }
  };

  const getPendingPayments = async () => {
    try {
      let response = await fetch("https://welearnapi.fun/api/class-bookings/", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authTokens.access}`,
        },
      });

      const data = await response.json();

      if (response.ok) {
        const pending = data.filter((pay) => pay.isPayed === null);
        setPendingPayment(pending);
      } else {
        toast.error(`Failed to fetch pending payments ${response.statusText}`, {
          duration: 4000,
          position: "top-center",
          style: {
            backgroundColor: "#FFCCCC",
            fontFamily: "Poppins, sans-serif",
            fontWeight: "bolder",
            fontSize: "0.9rem",
          },
        });
        console.log("Failed to pending payments", response.statusText);
      }
    } catch (error) {
      console.error("Failed to pending payments", error);
    }
  };

  const updateToken = async () => {
    console.log("Token Updated");
    let response = await fetch("https://welearnapi.fun/api/token/refresh/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ refresh: authTokens?.refresh }),
    });
    const data = await response.json();

    if (response.status === 200) {
      setAuthTokens(data);
      setUser(jwtDecode(data.access));
      localStorage.setItem("Tokens", JSON.stringify(data));
    } else {
      logoutUser();
    }
  };

  useEffect(() => {
    const mins = 1000 * 60 * 10;
    const interval = setInterval(() => {
      if (authTokens) {
        updateToken();
      }
    }, mins);
    return () => clearInterval(interval);
  }, [authTokens]);

  return (
    <AuthContext.Provider
      value={{
        authTokens,
        user,
        loginUser,
        logoutUser,

        email,
        password,
        setEmail,
        setPassoword,
        loading,
        setLoading,

        totals,
        getTotals,
        allParents,
        getParents,
        allTutors,
        approvableTutors,
        getUnApprovedTutors,
        getTutors,
        getClasses,
        classes,
        pendingPayment,
        getPendingPayments,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
