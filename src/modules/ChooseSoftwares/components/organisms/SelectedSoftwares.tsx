import useStore, { MAX_SOFTWARE } from '../../store';
import { ISoftware } from '../../../../types/softwareTypes';
import DefaultItem from '../atom/DefaultItem';
import SelectedItem from '../molecules/SelectedItem';
import ProductsAdded from '../molecules/ProductsAdded';

const AllSelectedItems = () => {
  const { softwares } = useStore();
  const items = softwares.map((item: ISoftware, index) => {
    return <SelectedItem key={item.value} index={index} software={item} />;
  });
  return <>{items}</>;
};
const AllRemainingItems = (): JSX.Element => {
  const { softwares } = useStore();
  const remaining = Array(MAX_SOFTWARE - softwares.length).fill('');
  const items = remaining.map((_, index) => {
    return <DefaultItem key={index} />;
  });
  return <>{items}</>;
};
const SelectedSoftwares = () => {
  return (
    <div>
      <div className="grid grid-cols-2 gap-4 place-content-center">
        <AllSelectedItems />
        <AllRemainingItems />
      </div>
      <ProductsAdded />
    </div>
  );
};

export default SelectedSoftwares;
