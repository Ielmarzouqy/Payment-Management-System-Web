
import { apiSlice } from "../../../app/api/apiSlice";

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    
    register: builder.mutation({
      query: (userData) => ({
        url: "/user/register",
        method: "POST",
        body: userData,
      }),
    }),

    // getUserById: builder.query({
    //   query: (userId) => `/user/user/${userId}`,
    // }),

    login: builder.mutation({
      query: (loginData) => ({
        url: `/user/login`,
        method: "POST",
        body: loginData,
      }),
    }),

  
  }),
});

export const {
 useLoginMutation,
 useRegisterMutation,
} = userApiSlice;


