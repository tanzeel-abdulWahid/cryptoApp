import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoApiHeaders = {
    "x-rapidapi-host": "coinranking1.p.rapidapi.com",
    "x-rapidapi-key": "7dd9092bcamsh0f836b5942ee8f7p1983fejsn0dbede8386ea",
};

const createRequest = (url) => ({url, headers: cryptoApiHeaders})

const baseUrl = "https://coinranking1.p.rapidapi.com";

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery : fetchBaseQuery({baseUrl}),
    endpoints : (builder) => ({
        getCryptos : builder.query({
            query : (count) => createRequest(`/coins?limit=${count}`)
        }),
        getExchanges : builder.query({
            query : () => createRequest("/exchanges")
        }),
        getCryptoDetails : builder.query({
            query : (coindId) => createRequest(`/coin/${coindId}`)
        }),
        getCryptoHistory : builder.query({
            query : ({coinId, timePeriod}) => createRequest(`coin/${coinId}/history/${timePeriod}`),
        })
    }),
})

export const { useGetCryptosQuery,useGetExchangesQuery,useGetCryptoDetailsQuery, useGetCryptoHistoryQuery } = cryptoApi;