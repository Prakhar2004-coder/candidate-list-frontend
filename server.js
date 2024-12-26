const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

// Hardcoded list of candidates
const candidates = [
    { id: 1, name: 'Alice Johnson', skills: 'JavaScript, React', yearsOfExperience: 5 },
    { id: 2, name: 'Bob Smith', skills: 'Java, Spring', yearsOfExperience: 3 },
    { id: 3, name: 'Charlie Brown', skills: 'Python, Django', yearsOfExperience: 4 },
    { id: 4, name: 'David Wilson', skills: 'C#, .NET', yearsOfExperience: 6 },
    { id: 5, name: 'Eva Green', skills: 'JavaScript, Node.js', yearsOfExperience: 2 },
    { id: 6, name: 'Frank White', skills: 'Ruby, Rails', yearsOfExperience: 7 },
    { id: 7, name: 'Grace Lee', skills: 'PHP, Laravel', yearsOfExperience: 4 },
    { id: 8, name: 'Hank Pym', skills: 'Go, Kubernetes', yearsOfExperience: 5 },
    { id: 9, name: 'Ivy Adams', skills: 'Swift, iOS', yearsOfExperience: 3 },
    { id: 10, name: 'Jack Daniels', skills: 'C++, Qt', yearsOfExperience: 8 },
];

app.get('/api/candidates', (req, res) => {
    res.json(candidates);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});