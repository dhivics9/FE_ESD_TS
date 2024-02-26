import { Link, useNavigate } from "react-router-dom";
import LogoNameEsd from "../../components/ui/LogoEsd/LogoNameESD";
import LoginForm from "../../components/forms/LoginForm";
import { useTypedDispatch, useTypedSelector } from "../../store";
import { login } from "../../store/user";
import { FormLogin } from "../../store/user/action";
import { useEffect } from "react";
import { getUser } from "../../utils/storage";

const Login = () => {
  const dispatch = useTypedDispatch();
  const navigate = useNavigate();

  // const { dark } = useTypedSelector((s) => s.ui);

  const handleSubmit = (form: FormLogin) => {
    dispatch(login(navigate, form));
  };

  useEffect(() => {
    if (getUser()) {
      navigate("/dashboard");
    }
  }, [navigate]);

  return (
    <div className="absolute top-0 grid h-screen w-full place-items-center bg-[--gray-50]">
      <div className="card w-full max-w-[500px] rounded-xl bg-base-100 shadow-xl">
        <div className="card-body p-6">
          <div className="py-6">
            <LogoNameEsd />
          </div>

          <LoginForm onSubmit={handleSubmit} />

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
