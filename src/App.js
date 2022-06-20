import React from "react";
import './App.css';


const App = () =>(<PersonList />);

const PersonList = () =>{
  const people = [
    {
      img:11,  
      name:"john",
      job:"developer"
    },
    {
      img:18,
      name:"bob",
      job:"designer"
    },
    {
      img:51,
      name:"Peter", 
      job:"artist"
    }
  ];
  return (
   <section>
   <Person person={people[0]} />;
   <Person person={people[1]}>
   Prepare for an exciting career in graphic design in the creative capital of
    the United States—New York City!</Person>;
   <Person person={people[2]} />;
  </section>
  ) ;
};
const Person = props => {
  const {img, name, job} = props.person; 
  const {children} = props;
  const url =`https://randomuser.me/api/portraits/men/${img}.jpg`;

  return (
  <div className="person"> 
  <img src={url} alt=""/>
  <div>
    <h4>{name}</h4>
    <h4>{job}</h4>
    {children}
  </div>
  </div>
  );
};

export default App;