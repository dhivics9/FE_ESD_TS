import { Link, Navigate } from "react-router-dom";
import LogoNameEsd from "../../components/ui/LogoEsd/LogoNameESD";
import LoginForm from "../../components/forms/LoginForm";
import { useTypedSelector } from "../../store";

const Login = () => {
  const { user } = useTypedSelector((state) => state.user);

  if (user?.token) {
    return <Navigate to="/dashboard" />;
  }
  return (
    <div className="absolute top-0 grid h-screen w-full place-items-center bg-[--gray-50]">
      <div className="card w-full max-w-[500px] rounded-xl bg-base-100 shadow-xl">
        <div className="card-body p-6">
          <div className="py-6">
            <LogoNameEsd />
          </div>

          <LoginForm />

          <div className="text-center text-xs">
            <Link to="/" className="text-primary">
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
