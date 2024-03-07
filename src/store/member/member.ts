import { createSlice } from "@reduxjs/toolkit"

interface MemberState {
  member: Member[]
}

const initialState: MemberState = {
  member: []
}

export const memberSlice = createSlice({
  name: 'member',
  initialState,
  reducers: {
    setMembers: (state, { payload }) => {
      state.member = payload
    },
  }
})
