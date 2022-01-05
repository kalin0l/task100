import './App.css'
const style = {
  root: {
    maxWidth: "60rem",
    margin: "2rem auto",
    padding: "1rem",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.25)",
    borderRadius: "14px",
    backgroundColor: "white",
  },
  wrapper:{
    display: "flex",
    justifyContent: "space-between",
    margin: "1rem",
    paddingBottom: "1rem",
    borderBottom: "1px solid #ccc",
  },
  mealHeading:{
    margin: "0 0 0.25rem 0"
  },
  description:{
    fontStyle: "italic"
  },
  price:{
    marginTop: "0.25rem",
    fontWeight: "bold",
    color: "ad5502",
    fontSize: "1.25rem",
  }
};
function App() {
  return (
    <div
      style={style.root} className="App"   >
      <div
        style={style.wrapper}
      >
        <h3 style={style.mealHeading}>Sushi</h3>
        <div style={style.description}>I prefer steak than sushi.</div>
        <div
          style={style.price}
        >
          $9.99
        </div>
      </div>
    </div>
  );
}

export default App;
