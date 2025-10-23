import { create } from 'zustand';

type person = 'المدير' | 'المورد' | 'العميل' | string;

interface PersonState {
    person: person;
    setPerson: (state: person) => void;
}
export const usePersonState = create<PersonState>((set) => ({
    person: 'المدير',
    setPerson: (state: person) => set({ person: state }),
}));
