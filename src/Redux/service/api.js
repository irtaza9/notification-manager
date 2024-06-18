import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const manageEndpointslxd = createApi({
  reducerPath: "path",
  baseQuery: fetchBaseQuery({
    // baseUrl: BASEURL,
  }),
  endpoints: (builder) => ({
    ApiClient: builder.mutation({
      query: (payload) => ({
        url: "{endpoint}",
        method: "POST",
        body: payload,
      }),
    }),
  }),
});

export const { useApiClientMutation } = manageEndpointslxd;
