import useStore from '../../store';

const ProductsAdded = () => {
  const { softwares } = useStore();

  return (
    <div className="text-center p-4 font-light">
      {softwares.length} Products added
    </div>
  );
};
export default ProductsAdded
