import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const withAuth = (WrappedComponent) => {
  return (props) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const router = useRouter();

    useEffect(() => {
      const user = sessionStorage.getItem("user");

      if (!user) {
        router.push("/student/auth"); // Redirect to login if no session key
      } else {
        setIsAuthenticated(true);
      }
    }, []);

    if (!isAuthenticated) {
      return null; // Prevent page from rendering until authentication is checked
    }

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
