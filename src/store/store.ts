import { create } from 'zustand';
import { includeChromeStore } from 'zustand-chrome-local-storage';

import { wrapStore } from 'webext-zustand';

// wrapStore: <T>(store: StoreApi<T>) => Promise<void>;

export interface BearState {
    bears: number;
    increase: (by: number) => void;
}

export const useBearStore = create<BearState>()(
    // @ts-expect-error type?
    includeChromeStore((set) => ({
        bears: 0,
        increase: (by) => set((state) => ({ bears: state.bears + by })),
    }))
);

export const storeReadyPromise = wrapStore(useBearStore);

export default useBearStore;
