import useStore, {MAX_SOFTWARE} from "../../store";
import {addDoc, collection} from "firebase/firestore";
import {db} from "../../../../firebase-config";
import {Button, message} from "antd";

const NextButton = () => {
    const { softwares, clearStore } = useStore();
    const softwareCollectionref = collection(db, 'softwares');

    const saveData = async () => {
        try {
            await addDoc(softwareCollectionref, { data: softwares });
            message.success(`Successfully saved`);
            clearStore();
        } catch (e) {
            message.error(`Some Error`);
        }
    };
    return (
        <Button
            onClick={saveData}
            disabled={softwares.length < MAX_SOFTWARE}
            className="w-72 bg-indigo-600 block text-white my-10"
        >
            Next
        </Button>
    );
};
export default NextButton