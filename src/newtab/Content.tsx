import { useBearStore } from '../store/store';

export const Content = () => {
    const bears = useBearStore((state) => state.bears);
    const increase = useBearStore((state) => state.increase);

    return (
        <div>
            Content
            <div>
                <span>Bears: {bears}</span>
                <br />
                <button onClick={() => increase(1)}>Increment +</button>
            </div>
        </div>
    );
};
