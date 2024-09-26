import Input from "../ui/Input";

interface RadiusSelectorProps {
    radius: number;
    setRadius: React.Dispatch<React.SetStateAction<number>>;
}

const RadiusSelector = ({
    radius,
    setRadius,
}: RadiusSelectorProps) => {
    const onHandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value !== '' ? event.target.value : '1';
        setRadius(Math.min(100, Number.parseInt(value, 10)));
    };

    return (
        <div className="flex flex-col justify-center">
            <label htmlFor="radius">Radius (km)</label>
            <Input type="number" id="radius" name="radius" min="1" max="100" value={radius} onChange={onHandleChange} />
        </div>
    );
};

export default RadiusSelector;