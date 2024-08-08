import { ReactNode, useState } from "react";
import { WatchesFormProps } from "./type/type WatchesFormProps";
/**
 * Renders a form for adding watches, including city and time zone inputs.
 *
 * @param {WatchesFormProps} onAddWatch - function to handle adding a watch
 * @return {ReactNode} JSX element representing the watches form
 */
const WatchesForm = ({ onAddWatch }: WatchesFormProps): ReactNode => {
  const [city, setCity] = useState<string>("");
  const [timeZone, setTimeZone] = useState<number | string>("");

  const handleCity = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setCity(value);
  };

  const handleTimeZone = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (!isNaN(+value)) {
      setTimeZone(parseInt(value));
    } else {
      setTimeZone("");
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!city || !timeZone) {
      alert("Заполните все поля");
      return;
    }
    const id: string = Math.random().toString(36).substr(2, 9);
    onAddWatch({
      city,
      timeZone: typeof timeZone === "number" ? timeZone : parseInt(timeZone),
      id,
    });

    setCity("");
    setTimeZone("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="watch-city-input">Название</label>
        <input
          type="text"
          id="watch-city-input"
          placeholder="Название города"
          onChange={handleCity}
          value={city}
        />
        <label htmlFor="watch-gmt-input">Временная зона</label>
        <input
          type="number"
          id="watch-gmt-input"
          placeholder="GMT"
          onChange={handleTimeZone}
          value={typeof timeZone === "number" ? timeZone : ""}
        />
        <button type="submit">Добавить</button>
      </form>
    </>
  );
};
export default WatchesForm;