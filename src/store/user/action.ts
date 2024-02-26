import { NavigateFunction } from "react-router-dom";
import { setUser } from ".";
import { AppThunk } from "..";
import { AuthService } from "../../services/auth";
import { setLoading } from "../ui";
import { saveUser } from "../../utils/storage";

export interface FormLogin {
  email: string;
  password: string;
  remember: boolean;
}

export function login(navigate: NavigateFunction, form: FormLogin): AppThunk {
  const { email, password, remember } = form;

  return async (dispatch) => {
    dispatch(setLoading(true));
    try {
      const { data, status } = await AuthService.login(email, password);
      console.log(status)
      if (status === 200) {
        dispatch(setUser(data.data));
        navigate('/dashboard');
        if (remember) {
          saveUser(data.data);
        }
      } else {
        throw new Error('Invalid credentials');

      }

      dispatch(setLoading(false));


      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      if (error.response != null && error.response.data != null && error.response.data.message != null) {
        // dispatch(setMessage({ message: error.response.data.message }));
      } else {
        // dispatch(setMessage({ message: error.message, intent: 'danger' }));
      }
      dispatch(setLoading(false));
    }
  }
}