import { userSlice } from "./user";
import { login } from "./action";

export const { setUser } = userSlice.actions;
export { login }

export default userSlice.reducer;