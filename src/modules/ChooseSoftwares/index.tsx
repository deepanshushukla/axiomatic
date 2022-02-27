import ChooseSoftware from './components/organisms/ChooseSoftware';
import SelectedSoftwares from './components/organisms/SelectedSoftwares';

function ChooseSoftwares() {
  return (
    <div className="flex items-center justify-center h-screen bg-white w-screen">
      <div className="flex w-9/12 justify-around">
        <SelectedSoftwares />
        <ChooseSoftware />
      </div>
    </div>
  );
}

export default ChooseSoftwares;
