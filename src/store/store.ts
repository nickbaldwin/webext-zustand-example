import { create } from 'zustand';
import { includeChromeStore } from 'zustand-chrome-local-storage';

import { wrapStore } from 'webext-zustand';
import { version } from './schema';

// wrapStore: <T>(store: StoreApi<T>) => Promise<void>;

export interface State {
    version: number;
    bears: number;
    increase: (by: number) => void;
    lastMark: string;
}

export const useStore = create<State>()(
    // @ts-expect-error type?
    includeChromeStore((set) => ({
        version,
        bears: 0,
        increase: (by) => set((state) => ({ bears: state.bears + by })),
        lastMark: '',
    }))
);

export const storeReadyPromise = wrapStore(useStore);

export default useStore;
