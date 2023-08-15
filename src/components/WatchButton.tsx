type WatchButtonProps = {
    text: string;
    color: string;
    onClick: () => void;
};

const WatchButton = ({text, color, onClick}: WatchButtonProps) => (
        <button onClick={onClick} type="button" className={`bg-${color}-500 hover:bg-${color}-500 rounded-none`}>
            <span className="text-xl text-black">{text}</span>
        </button>
);

export default WatchButton;
 