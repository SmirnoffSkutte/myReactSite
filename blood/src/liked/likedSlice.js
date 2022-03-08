import {createSlice} from '@reduxjs/toolkit'

const initialState={
    likedItems: localStorage.getItem("favorites")
    ? JSON.parse(localStorage.getItem("favorites"))
    : [],
}

const likedSlice = createSlice({
    name:'liked',
    initialState,
    reducers:{
        addToLiked(state,action){
            const itemStatus = state.likedItems.findIndex(
                (item)=> item._id === action.payload._id
            );
            if (itemStatus >=0 ){
                const nextLikedItems = state.likedItems.filter(
                    (item) => item._id !== action.payload._id
                  );
                state.likedItems = nextLikedItems;
            } else {
                const tempGood = {...action.payload};
                state.likedItems.push(tempGood);
            }
            localStorage.setItem("favorites", JSON.stringify(state.likedItems));
        }
    }

})

export const {addToLiked}=likedSlice.actions;
export default likedSlice.reducer;