import {ISoftware} from "../../../../types/softwareTypes";
import useStore from "../../store";
import {Button} from "antd";

const SelectedItem = ({ software, index }: { software: ISoftware; index: number }) => {
    const { removeSoftware } = useStore();

    return (
        <div className="w-40 h-40 border-2 flex flex-col items-center">
            <div className="items-center w-12 mt-8">
                <img className="inline-block w-full" src={software.logo} />
                <p className="py-2 text-center font-light">{software.name}</p>
            </div>
            <Button
                className="font-light text-xs"
                type="text"
                onClick={() => removeSoftware(index)}
            >
                <span className="text-rose-600 mr-1"> X </span> Remove
            </Button>
        </div>
    );
};
export default SelectedItem