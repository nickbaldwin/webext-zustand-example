import { useStore } from '../store/store';

export const Content = () => {
    const bears = useStore((state) => state.bears);
    const increase = useStore((state) => state.increase);

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
