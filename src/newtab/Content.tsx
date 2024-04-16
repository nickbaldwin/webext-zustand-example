import { useStore } from '../store/store';
import {
    CollectionsList,
    CollectionsMap,
    MarksList,
    MarksMap,
} from '../store/schema';

import './Content.css';
import { useState } from 'react';

export const Content = () => {
    const collectionsList: CollectionsList = useStore(
        (state) => state.collectionsList
    );
    const collections: CollectionsMap = useStore(
        (state) => state.collectionsMap
    );
    const addCollection = useStore((state) => state.addCollection);
    const removeCollection = useStore((state) => state.removeCollection);

    const marksList: MarksList = useStore((state) => state.marksList);
    const marks: MarksMap = useStore((state) => state.marksMap);
    const addMark = useStore((state) => state.addMark);
    const removeMark = useStore((state) => state.removeMark);

    const bears = useStore((state) => state.bears);
    const inc = useStore((state) => state.increase);

    const [collectionName, setCollectionName] = useState('');
    return (
        <>
            <h2>Marks - the useful bookmark manager</h2>
            <div className="container">
                <p>collections</p>
                {collectionsList.map((id: string, _i: number) => (
                    <div key={_i} className="card">
                        {collections[id].title}
                        <br />
                        &nbsp;
                        <button onClick={() => removeCollection(id)}>
                            remove
                        </button>
                    </div>
                ))}
                <br />
                <input
                    type="text"
                    value={collectionName}
                    onChange={(e) => setCollectionName(e.target.value)}
                />
                <button
                    disabled={!collectionName}
                    onClick={() => {
                        addCollection({
                            title: collectionName,
                            description: 'testing',
                        });
                        setCollectionName('');
                    }}
                >
                    add new collection
                </button>
            </div>

            <div className="container">
                {marksList.map((id: string, _i: number) => (
                    <div key={_i} className="card">
                        {marks[id].id}
                        <br />
                        {marks[id].originalTitle}
                        <br />
                        &nbsp;
                        <br />
                        <a href={marks[id].url}>{marks[id].url}</a>
                        <br />
                        <button onClick={() => removeMark(id)}>remove</button>
                    </div>
                ))}
                <button
                    onClick={() =>
                        addMark({
                            originalTitle: 'Google',
                            originalDescription: 'Search engine',
                            url: 'https://www.google.com',
                        })
                    }
                >
                    add mark
                </button>
            </div>
            <p>bears: {bears}</p>
            <button onClick={() => inc(1)}>increase</button>
        </>
    );
};
