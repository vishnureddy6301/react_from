import React, { useState } from "react";

const Form = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [subject, setSubject] = useState("");
  const [gender, setGender] = useState("");
  const [hobbies, setHobbies] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted!", {
      username,
      email,
      password,
      subject,
      gender,
      hobbies,
    });
    setEmail("")
    setGender("")
    setHobbies("")
    setPassword("")
    setSubject(" ")
    setUsername("")
  };

  const handleHobbyChange = (e) => {
    const hobby = e.target.value;
    if (hobbies.includes(hobby)) {
      setHobbies(hobbies.filter((h) => h !== hobby));
    } else {
      setHobbies([...hobbies, hobby]);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username:</label>
      <input
        type="text"
        id="username"
        name="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      /><br/>

      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      /><br/>

      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      /><br/>

      <label htmlFor="subject">Select Subject:</label>
      <select id="subject" name="subject" value={subject} onChange={(e) => setSubject(e.target.value)}>
        <option value="">Select a subject</option>
        <option value="c">C</option>
        <option value="java">Java</option>
        <option value="react">React</option>
      </select><br/>

      <label>Gender:</label>
      <label htmlFor="male">
        <input
          type="radio"
          id="male"
          name="gender"
          value="male"
          checked={gender === "male"}
          onChange={(e) => setGender(e.target.value)}
        />
        Male
      </label>
      <label htmlFor="female">
        <input
          type="radio"
          id="female"
          name="gender"
          value="female"
          checked={gender === "female"}
          onChange={(e) => setGender(e.target.value)}
        />
        Female
      </label><br/>

      <label>Hobbies:</label>
      <label htmlFor="eating">
        <input
          type="checkbox"
          id="eating"
          name="hobbies"
          value="eating"
          checked={hobbies.includes("eating")}
          onChange={handleHobbyChange}
        />
        Eating
      </label>
      <label htmlFor=" cricket">
        <input
          type="checkbox"
          id=" cricket"
          name="hobbies"
          value=" cricket"
          checked={hobbies.includes(" cricket")}
          onChange={handleHobbyChange}
        />
        Cricket
      </label><br/>

      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;

