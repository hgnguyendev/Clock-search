import { Search } from "./component/Search";
import { Time } from "./component/Time";
function App() {
  return (
    <div
      style={{
        height: "100vh",
        minWidth: "100%",
        backgroundColor: "black",
        color: "white",
      }}
    >
      <div
        style={{
          width: "500px",
          minWidth: "100%",
          display: "flex",
          justifyContent: "center",
          paddingTop: "100px",
        }}
      >
        <Time />
      </div>
      <div
        style={{
          width: "500px",
          minWidth: "100%",
          display: "flex",
          justifyContent: "center",
          paddingTop: "100px",
        }}
      >
        {" "}
        <Search />
      </div>
    </div>
  );
}

export default App;
