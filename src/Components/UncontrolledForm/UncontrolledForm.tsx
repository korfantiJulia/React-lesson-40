import { useRef } from "react";
import "./UncontrolledForm.css";

export function UncontrolledForm() {
  const nameRef = useRef<HTMLInputElement>(null);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    const enteredName = nameRef.current?.value;
    console.log("Name:", enteredName);
  };

  return (
    <section>
      <h2>Uncontrolled Form</h2>

      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" ref={nameRef} className="uncontrolledForm" />
        </label>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}
