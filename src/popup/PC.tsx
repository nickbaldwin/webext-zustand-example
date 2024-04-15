import React from 'react';
import { State, useStore } from '../store/store';
import { parseUrl } from '../helpers/domain';

export const PC: () => React.JSX.Element = () => {
    const bears = useStore((state: State) => state.bears);
    const increase = useStore((state: State) => state.increase);
    const addMark = useStore((state: State) => state.addMark);

    const [tabInfo, setTabInfo] = React.useState('');

    const addTab = async (): Promise<void> => {
        const [tab] = await chrome.tabs.query({
            active: true,
            currentWindow: true,
        });
        const { url = '', title = '', favIconUrl = '' } = tab;

        // todo - deal with url errors
        const domain = parseUrl(url) || '';
        console.log(url, title, favIconUrl, domain);

        setTabInfo(title);

        addMark({ url, originalTitle: title, originalDescription: title });
    };

    return (
        <div>
            Popup
            <div>
                <span>Bears: {bears}</span>
                <br />
                <button onClick={() => increase(1)}>Increment +</button>

                <br />

                <br />
                <button onClick={addTab}>get tab info +</button>
                <span>tabinfo?: {tabInfo}</span>
            </div>
        </div>
    );
};
