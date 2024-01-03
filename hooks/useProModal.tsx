import {create} from 'zustand';

type TUserProModelStore ={
    isOpen: boolean;
    onOpenPro: () => void;
    onClosePro: () => void;
}

export const useProModel = create<TUserProModelStore>((set) => ({
    isOpen: false,
    onOpenPro: () => set({isOpen: true}),
    onClosePro: () => set({isOpen: false}),
}))