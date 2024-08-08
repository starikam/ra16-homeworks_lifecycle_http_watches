import { WatchProps } from "../../type/WatchProps";

export type ClockComponentProps = WatchProps & {
  onDelete: () => void;
};