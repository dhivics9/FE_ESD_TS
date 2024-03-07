import { memberSlice } from "./member";
import { getAllMember } from './action';

export const { setMembers } = memberSlice.actions;
export { getAllMember }

export default memberSlice.reducer;