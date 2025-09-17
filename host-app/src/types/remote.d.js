import Button from "remote_app/Button";
import Header from "remote_app/Header";

export default function App() {
  return (
    <div>
      <Header />
      <Button text="Click Me" onClick={() => alert("Button clicked!")} />
    </div>
  );
}
