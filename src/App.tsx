import WorldWatches from "./components/WorldWatches";
/**
 * Renders the App component.
 *
 * @return {JSX.Element} The rendered JSX element
 */
function App() {
  return (
    <>
      <div className="app">
        <h1>Мировые часы</h1>
        <WorldWatches />
      </div>
    </>
  );
}

export default App;