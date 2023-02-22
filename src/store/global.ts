import { create } from "zustand";
import { produce } from "immer";

interface ICurrentUser {
  currentUser: Partial<D.User>;

  setCurrentUser: (currentUser: ICurrentUser["currentUser"]) => void;
}

type IGlobal = ICurrentUser;

const useGlobalStore = create<IGlobal>((set, get, api) => ({
  currentUser: {},

  setCurrentUser: (currentUser) =>
    set(
      produce((state) => ({
        ...state,
        currentUser: { ...state.currentUser, ...currentUser },
      }))
    ),
}));

export default useGlobalStore;
