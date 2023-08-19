type WatchButtonProps = {
    text: string;
    color: string;
    onClick: () => void;
};

const WatchButton = ({text, color, onClick}: WatchButtonProps) => (
        <button onClick={onClick} type="button" className="text-black style-none" style={{backgroundColor: color}}>
            {text}
        </button>
);

export default WatchButton;
 