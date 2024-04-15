import { v4 as uuid } from 'uuid';

export const version = 1;

export interface UrlInfo {
    url: string;
    originalTitle: string;
    originalDescription: string;
}

export class Mark {
    id: string;
    url: string;
    originalTitle: string;
    originalDescription: string;

    constructor(urlInfo: UrlInfo) {
        this.id = uuid();
        this.url = urlInfo.url;
        this.originalTitle = urlInfo.originalTitle;
        this.originalDescription = urlInfo.originalDescription;
    }
}

/*



export interface CommonInfo {
    id: string;
    version: number;
    createdAt: number;
    updatedAt: number;
    title: string;
    description: string;
}



export interface MarkInfo {
    domain: string;
    originalDomain: string;
    favIconUrl: string;
    imageUrl: string;
    bgColor: string;
}

export interface List {
    list: Array<string>;
}

export interface Collection {
    id: string;
}

export interface Folder {
    id: string;
}

export interface MarksMap {
    [key: string]: Mark;
}

export interface CollectionsMap {
    [key: string]: Collection;
}

export interface FoldersMap {
    [key: string]: Folder;
}

export type MarksList = Array<string>;

export type CollectionsList = Array<string>;

export type FoldersList = Array<string>;

export interface Data {}

interface State {
    bears: number;
    increase: (by: number) => void;

    results: string[];
    updateResults: (add: string) => void;

    marksList: MarksList;
    marksMap: MarksMap;
    addMark: (add: UrlInfo) => void;
    removeMark: (id: string) => void;

    collectionsList: CollectionsList;
    collectionsMap: CollectionsMap;
    addCollections: (add: Collection) => void;

    foldersList: FoldersList;
    foldersMap: FoldersMap;
    addFolders: (add: Folder) => void;
}

 */
