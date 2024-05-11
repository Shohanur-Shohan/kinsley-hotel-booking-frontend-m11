import { Helmet } from "react-helmet-async";
import SignUp from "../../components/SignUp";

const Register = () => {
  return (
    <>
      <Helmet>
        <title>Kinsley-Hotel | Register</title>
      </Helmet>
      <SignUp />
    </>
  );
};

export default Register;
