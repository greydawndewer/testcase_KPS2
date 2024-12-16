import React, { useState } from 'react';
import '../assets/style.css';
import Login from './login';

function App() {
  const [selectedClass, setSelectedClass] = useState('');
  const [selectedSection, setSelectedSection] = useState('');
  const [rollNo, setRollNo] = useState('');
  const [president, setPresident] = useState('');
  const [vp, setVp] = useState('');

  const submitVote = async (e) => {
    e.preventDefault(); // Prevent default form submission

    // Submit votes
    try {
      await fetch('http://localhost:3000/vote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ category: 'President', candidate: president }),
      });

      await fetch('http://localhost:3000/vote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ category: 'Vice President', candidate: vp }),
      });

      alert('Vote submitted successfully!');
      // Optionally, reset the form or redirect
      // location.reload(); // Uncomment if you want to reload the page
    } catch (error) {
      console.error('Error submitting vote:', error);
      alert('There was an error submitting your vote. Please try again.');
    }
  };

  const redirectToTeacherLogin = () => {
    window.location.href = <Login />; // Adjust this if using React Router
  };

  return (

    <div className="main-content">
    <div class="sidebar">
      <ul>
        <li><a href="#">Settings</a></li>
        <li><button onclick="redirectToTeacherLogin()">Teacher Login</button></li> 
      </ul>
    </div>
      <div className="img-container">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJNCA1lSIQVxe5WVw6W2hrOCRvu69xl4x_iw&s" alt="Kps Kadma" width="100" />
        <h1>Student Cabinet Elections</h1>
      </div>
      <section>
        <span className="class">
          <label htmlFor="class">Class</label>
          <select id="class" value={selectedClass} onChange={(e) => setSelectedClass(e.target.value)} required>
            <option value="" disabled>Select Your Class</option>
            <option value="VII">VII</option>
            <option value="IX">IX</option>
            <option value="X">X</option>
            <option value="XI">XI</option>
            <option value="XII">XII</option>
          </select>
        </span>

        <span className="sec">
          <label htmlFor="sec">Section</label>
          <select id="sec" value={selectedSection} onChange={(e) => setSelectedSection(e.target.value)} required>
            <option value="" disabled>Select Your Section</option>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="D">D</option>
            <option value="E">E</option>
          </select>
        </span>

        <span>
          <label htmlFor="roll">Roll No.</label>
          <input 
            id="roll" 
            type="number" 
            placeholder="Enter Your Roll" 
            value={rollNo} 
            onChange={(e) => setRollNo(e.target.value)} 
            required 
          />
        </span>

        <h2>Vote for President</h2>
        <div className="candidate-group">
          <div className="candidate">
            <input 
              type="radio" 
              id="president1" 
              name="president" 
              value="Candidate 1" 
              onChange={(e) => setPresident(e.target.value)} 
              required 
            />
            <label htmlFor="president1">Candidate 1</label>
          </div>

          <div className="candidate">
            <input 
              type="radio" 
              id="president2" name="president" 
              value="Candidate 2" 
              onChange={(e) => setPresident(e.target.value)} 
              required 
            />
            <label htmlFor="president2">Candidate 2</label>
          </div>
          <div className="candidate">
            <input 
              type="radio" 
              id="president3" 
              name="president" 
              value="Candidate 3" 
              onChange={(e) => setPresident(e.target.value)} 
              required 
            />
            <label htmlFor="president3">Candidate 3</label>
          </div>
        </div>
      </section>

      <section>
        <h2>Vote for Vice President</h2>
        <div className="candidate-group">
          <div className="candidate">
            <input 
              type="radio" 
              id="vp1" 
              name="vp" 
              value="Candidate 1" 
              onChange={(e) => setVp(e.target.value)} 
              required 
            />
            <label htmlFor="vp1">Candidate 1</label>
          </div>
          <div className="candidate">
            <input 
              type="radio" 
              id="vp2" 
              name="vp" 
              value="Candidate 2" 
              onChange={(e) => setVp(e.target.value)} 
              required 
            />
            <label htmlFor="vp2">Candidate 2</label>
          </div>
          <div className="candidate">
            <input 
              type="radio" 
              id="vp3" 
              name="vp" 
              value="Candidate 3" 
              onChange={(e) => setVp(e.target.value)} 
              required 
            />
            <label htmlFor="vp3">Candidate 3</label>
          </div>
        </div>
      </section>

      <form onSubmit={submitVote}> 
        <button type="submit">Submit Vote</button>
      </form>

      <footer>
        <p>© 2023 KPS KADMA</p>
      </footer>
    </div>
  );
}

export default App;