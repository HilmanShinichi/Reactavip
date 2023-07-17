import toolkit from "@reduxjs/toolkit";

const { configureStore, createSlice } = toolkit;

const CartSlice = createSlice({
  name: "Cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      state.push(action.payload);
    },
  },
});

const loginSlice = createSlice({
    name: "login",
    initialState: ({ status: false}),
    reducers: {
      createLogin: (state, action) => {
        state.status = true;
      },
    },
  });

const store = configureStore({
  reducer: {
    login: loginSlice.reducer,
    Cart: CartSlice.reducer,
  },
});

console.log("oncreate store : ", store.getState());

store.subscribe(() => {
  console.log("STORE_CHANGE : ", store.getState());
});

store.dispatch(CartSlice.actions.addToCart({ id: 2, qty: 20 }));
store.dispatch(loginSlice.actions.createLogin());