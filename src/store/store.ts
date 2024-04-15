import { create } from 'zustand';
import { includeChromeStore } from 'zustand-chrome-local-storage';

import { wrapStore } from 'webext-zustand';
import {
    version,
    Mark,
    MarksList,
    MarksMap,
    Collection,
    CollectionsList,
    CollectionsMap,
    Folder,
    FoldersList,
    FoldersMap,
    UrlInfo,
} from './schema';

// wrapStore: <T>(store: StoreApi<T>) => Promise<void>;

export interface State {
    version: number;

    bears: number;
    increase: (by: number) => void;
    lastMark: string;

    marksList: MarksList;
    marksMap: MarksMap;
    addMark: (add: UrlInfo) => void;
    removeMark: (id: string) => void;

    collectionsList: CollectionsList;
    collectionsMap: CollectionsMap;
    addCollection: (add: Collection) => void;
    removeCollection: (add: Collection) => void;

    foldersList: FoldersList;
    foldersMap: FoldersMap;
    addFolder: (add: Folder) => void;
    removeFolder: (add: Folder) => void;
}

export const useStore = create<State>()(
    // @ts-expect-error type?
    includeChromeStore((set) => ({
        version,
        bears: 0,
        increase: (by) => set((state) => ({ bears: state.bears + by })),
        lastMark: '',

        marksList: [],
        marksMap: {},

        addMark: (add: UrlInfo) => {
            const mark = new Mark(add);
            set((state: { marksList: string[]; marksMap: MarksMap }) => ({
                marksList: [...state.marksList, mark.id],
                marksMap: {
                    ...state.marksMap,
                    [mark.id]: mark,
                },
            }));
        },

        removeMark: (id: string) => {
            set((state: { marksList: string[]; marksMap: MarksMap }) => {
                if (!state.marksMap[id]) {
                    return state;
                } else {
                    const i = state.marksList.indexOf(id);
                    const list = [...state.marksList];
                    if (i > -1) {
                        list.splice(i, 1);
                    }
                    const map = { ...state.marksMap };
                    delete map[id];
                    return {
                        marksList: list,
                        marksMap: map,
                    };
                }
            });
        },

        collectionsList: [],
        collectionsMap: {},
        addCollection: (add: Collection) => {
            console.log('addCollection', add);
        },
        removeCollection: (id: Collection) => {
            console.log('removeCollection', id);
        },

        foldersList: [],
        foldersMap: {},
        addFolder: (add: Folder) => {
            console.log('addFolder', add);
        },
        removeFolder: (id: Folder) => {
            console.log('removeFolder', id);
        },
    }))
);

export const storeReadyPromise = wrapStore(useStore);

export default useStore;
