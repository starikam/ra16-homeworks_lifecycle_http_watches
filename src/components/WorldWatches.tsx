import { FC, ReactNode, useState } from "react";
import Clock from "./clock/Clock";
import WatchesForm from "./form/WatchesForm";
import { WatchProps } from "./type/WatchProps";
import "./css/WorldWatches.css";
/**
 * WorldWatches component that displays and manages a list of watches.
 *
 * @return {ReactNode} The rendered WorldWatches component
 */
const WorldWatches: FC = (): ReactNode => {

  const [watches, setWatches] = useState<WatchProps[]>([]);


  const addWatch = (watch: WatchProps) => {
    console.log("Adding watch:", watch);
    setWatches([...watches, { ...watch }]);
  };

  const handleDelete = (id: string) => {
    console.log("Deleting clock with id:", id);
    setWatches(watches.filter((watch) => watch.id !== id));
  };

  return (
    <>
      <WatchesForm onAddWatch={addWatch} />
      <div className="clock-wrapper-container">
        {watches.map((watch) => (
          <Clock
            key={watch.id}
            city={watch.city}
            timeZone={watch.timeZone}
            onDelete={() => handleDelete(watch.id)}
            id={""}
          />
        ))}
      </div>
    </>
  );
};

export default WorldWatches;