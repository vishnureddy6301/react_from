import React from 'react'

const Signup = () => {
  return (
    <div>
    <h1>The Signup page</h1>
      <>
      <form>
  <label>
    Username:
    <input type="text" placeholder="username" />
  </label><br/>
  <label>
    Password:
    <input type="password" placeholder="password" />
  </label><br/>
  <label>
    Email:
    <input type="email" placeholder="email" />
  </label><br/>
  <label>
    Subject:
    <select>
      <option value="">Select a subject</option>
      <option value="java">Java</option>
      <option value="c">C</option>
      <option value="react">React</option>
    </select><br/>
  </label>
  <label>
    Gender:
    <label>
      Male:
      <input type="radio" name="gender" value="male" />
    </label>
    <label>
      Female:
      <input type="radio" name="gender" value="female" />
    </label>
  </label><br/>
  <label>
    Hobbies:
    <label>
      <input type="checkbox" value="reading" /> cricket
    </label>
    <label>
      <input type="checkbox" value="swimming" /> eating
    </label>
  </label><br/>
  <button type="submit">Submit</button>
</form>

      </>
    </div>
  )
}

export default Signup
