import { useContext } from "react";
import { AuthContext } from "../providers/FirebaseAuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Loader from "../components/Loaders/Loader";
import PropTypes from "prop-types";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return <Loader />;
  }
  if (user) {
    return children;
  }
  return <Navigate state={location?.pathname} to={"/login"} />;
};
PrivateRoute.propTypes = {
  children: PropTypes.node,
};
export default PrivateRoute;
