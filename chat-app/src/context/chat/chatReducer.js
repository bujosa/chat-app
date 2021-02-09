import { types } from "../../types/types";

export const chatReducer = (state, action) => {
  switch (action.type) {
    case types.usersLoaded:
      return {
        ...state,
        users: [...action.payload],
      };

    case types.activateChat:
      if (state.activeChat === action.payload) return state;
      return {
        ...state,
        activeChat: action.payload,
        messages: [],
      };

    case types.newMessage:
      if (
        state.activeChat === action.payload.from ||
        state.activeChat === action.payload.to
      ) {
        return {
          ...state,
          messages: [...state.messages, action.payload],
        };
      } else {
        return state;
      }

    case types.loadChat:
      return {
        ...state,
        messages: [...action.payload],
      };

    case types.closeSection:
      return {
        uid: "",
        activeChat: null,
        users: [],
        messages: [],
      };

    default:
      return state;
  }
};
