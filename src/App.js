import './App.css'
const style = {
  // root: {
  //   maxWidth: "60rem",
  //   margin: "2rem auto",
  //   padding: "1rem",
  //   boxShadow: "0 2px 8px rgba(0, 0, 0, 0.25)",
  //   borderRadius: "14px",
  //   backgroundColor: "white",
  // },
  wrapper: {
    display: "flex",
    justifyContent: "space-between",
    margin: "1rem",
    paddingBottom: "1rem",
    borderBottom: "1px solid #ccc",
  },
  mealHeading: {
    margin: "0 0 0.25rem 0"
  },
  description: {
    fontStyle: "italic"
  },
  price: {
    marginTop: "0.25rem",
    fontWeight: "bold",
    color: "ad5502",
    fontSize: "1.25rem",
  }
};
function App() {
  return (
    <div
      className="App"   >
      <div
        style={{display: "flex",
        justifyContent: "space-between",
        margin: "1rem",
        paddingBottom: "1rem",
        borderBottom: "1px solid #ccc",}}
      >
        <h3 style={{margin: "0 0 0.25rem 0"}}>Sushi</h3>
        <div style={{fontStyle: "italic"}}>I prefer steak than sushi.</div>
        <div
          style={{marginTop: "0.25rem",
          fontWeight: "bold",
          color: "ad5502",
          fontSize: "1.25rem",}}
        >
          $9.99
        </div>
      </div>
    </div>
  );
}

export default App;
