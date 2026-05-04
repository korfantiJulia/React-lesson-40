import { useState } from "react";
import "./ControlledForm.css";

export function ControlledForm() {
  const [language, setLanguage] = useState<string>("uk");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Selected language:", language);
  };

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(event.target.value);
  };

  return (
    <section>
      <h2>Controlled Form</h2>

      <form onSubmit={handleSubmit}>
        <label htmlFor="lang">Choose your language: </label>
        <select
          id="lang"
          className="form"
          value={language}
          onChange={handleChange}
        >
          <option value="uk">Ukrainian</option>
          <option value="eng">English</option>
          <option value="es">Spanish</option>
          <option value="ita">Italian</option>
        </select>

        <button type="submit">Submit</button>
      </form>
    </section>
  );
}
