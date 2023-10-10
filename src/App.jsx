import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import Banner from "./components/Banner";
import CourseList from "./components/CourseList";
import 'bootstrap/dist/css/bootstrap.min.css';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useJsonQuery } from './utilities/fetch';

import TermSelector from './components/TermSelector'; // Assuming you have the TermSelector component as described earlier


/*
const schedule = {
  "title": "CS Courses for 2018-2019",
  "courses": {
    "F101" : {
      "term": "Fall",
      "number": "101",
      "meets" : "MWF 11:00-11:50",
      "title" : "Computer Science: Concepts, Philosophy, and Connections"
    },
    "F110" : {
      "term": "Fall",
      "number": "110",
      "meets" : "MWF 10:00-10:50",
      "title" : "Intro Programming for non-majors"
    },
    "S313" : {
      "term": "Spring",
      "number": "313",
      "meets" : "TuTh 15:30-16:50",
      "title" : "Tangible Interaction Design and Learning"
    },
    "S314" : {
      "term": "Spring",
      "number": "314",
      "meets" : "TuTh 9:30-10:50",
      "title" : "Tech & Human Interaction"
    }
  }
};
*/
const Main = () => {
  const [data, isLoading, error] = useJsonQuery('https://courses.cs.northwestern.edu/394/guides/data/cs-courses.php');
  const [selectedTerm, setSelectedTerm] = useState('Fall');

  const handleTermChange = (term) => {
    setSelectedTerm(term);
  };

  if (error) return <h1>Error loading classes: {`${error}`}</h1>;
  if (isLoading) return <h1>Loading CS classes..</h1>;
  if (!data) return <h1>No data found</h1>;

  return (

    <div>
    <Banner banner = {data.title} />
    <div className="col-md-3">
      <label htmlFor="termSelector">Term</label>
      <TermSelector selectedTerm={selectedTerm} onSelectTerm={handleTermChange} />
    </div>
    
    <CourseList course = {data} selectedTerm = {selectedTerm}/>
  </div>

  )
}

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <div className="App">
      <Main />
    </div>
  </QueryClientProvider>
);


export default App;
