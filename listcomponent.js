import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css'; // Optional: You can add your own styles here

const App = () => {
    const [candidates, setCandidates] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [sortOrder, setSortOrder] = useState('asc');

    useEffect(() => {
        const fetchCandidates = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/candidates');
                setCandidates(response.data);
            } catch (error) {
                console.error('Error fetching candidates:', error);
            }
        };
        fetchCandidates();
    }, []);

    const filteredCandidates = candidates.filter(candidate =>
        candidate.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        candidate.skills.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const sortedCandidates = [...filteredCandidates].sort((a, b) => {
        return sortOrder === 'asc' ? a.yearsOfExperience - b.yearsOfExperience : b.yearsOfExperience - a.yearsOfExperience;
    });

    return (
        <div>
            <h1>Candidate List</h1>
            <input
                type="text"
                placeholder="Search by Name or Skills"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}>
                Sort by Years of Experience ({sortOrder === 'asc' ? 'Ascending' : 'Descending'})
            </button>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Skills</th>
                        <th>Years of Experience</th>
                    </tr>
                </thead>
                <tbody>
                    {sortedCandidates.map(candidate => (
                        <tr key={candidate.id}>
                            <td>{candidate.name}</td>
                            <td>{candidate.skills}</td>
                            <td>{candidate.yearsOfExperience}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default App;