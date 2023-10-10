import { useState } from 'react';
import TermSelector from './TermSelector';
import CourseList from './CourseList';

const TermPage = () => {
  const [selectedTerm, setSelectedTerm] = useState('Fall');

  const handleTermChange = (term) => {
    setSelectedTerm(term);
  };

  return (
    <div>
      <h2>Select a Term:</h2>
      <TermSelector selectedTerm={selectedTerm} onSelectTerm={handleTermChange} />
      <h2>Course List for {selectedTerm}:</h2>
      <CourseList selectedTerm={selectedTerm} />
    </div>
  );
};

export default TermPage;
