import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const goodsApi = createApi({
    reducerPath:'goodsApi',
    baseQuery:fetchBaseQuery({baseUrl:'http://localhost:5000/'}),
    endpoints:(build)=>({
        getGoods : build.query({
            query:()=> `/api/goods_list`,
        })
    })
});

export const {useGetGoodsQuery} = goodsApi;