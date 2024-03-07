import { setMembers } from ".";
import { AppThunk } from "..";
import MemberService from "../../services/member";
import { setLoading } from "../ui";

export function getAllMember(): AppThunk {
  return async (dispatch, getState) => {
    const { token } = getState().user.user;
    dispatch(setLoading(true));
    try {
      const { data, status } = await MemberService.getAllMembers(token);
      switch (status) {
        case 200:
          dispatch(setMembers(data.data));
          break;
        default:
          throw new Error('Error');
      }
    } catch (err) {
      dispatch
      console.log(err)
    }
    dispatch(setLoading(false));
  }
}