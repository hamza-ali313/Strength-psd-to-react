import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [
    {
      id: 1,
      name: "Grumpy",
      description: "Everyone's favorite cat who loves to hate",
      image: "/images/12.png",
      price: 15,
    },
    {
      id: 2,
      name: "Stretch",
      description:
        "He bends! He stretches! He even ties in knots, but always returns to his original shape!",
      image: "/images/11.png",

      price: 20,
    },
    {
      id: 3,
      name: "Hungry",
      description:
        "It's a race, it's a chase, hurry up and feed their face! Who will win? No one knows! Feed the hungry hip-ip-pos!",
      image: "/images/10.png",
      price: 30,
    },
    {
      id: 4,
      name: "Crossfire",
      description: "You'll get caught up in the crossfire!",
      image: "/images/9.png",
      price: 35,
    },
  ],
};
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
  
    addToCart: (state, action) => {
      state.value = [
        ...state.value,
        {
          id: state.value.length + 1,
          name: action.payload.name,
          description: action.payload.desc,
          image: action.payload.image,
        },
      ];
    },
    deleteItem: (state, action) => {
      console.log(action.payload);
      let leftover = [
        ...state.value.filter((item) => item.id !== action.payload),
      ];
      state.value = leftover;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, deleteItem } = cartSlice.actions;

export default cartSlice.reducer;
