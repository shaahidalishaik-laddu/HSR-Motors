import { createSlice } from '@reduxjs/toolkit';
const leadSlice = createSlice({ name: 'leads', initialState: { list: [], status: 'idle' }, reducers: { setLeads: (state, action) => { state.list = action.payload; } }});
export const { setLeads } = leadSlice.actions;
export default leadSlice.reducer;