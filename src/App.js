import './App.css';
import Header from './Header';
import WorkCard from './WorkCard';
import EducationCard from './EducationCard';
import TechnologyCard from './TechnologyCard';
function App() {
  return (
    <div className="App">
      <Header name="Naomy Marumo Tung"/> 
      <main class="container">
          <div class="row mt-3">
              <div class="col-md">
                <WorkCard /> 
              </div>
              <div class="col-md">
                <EducationCard /> 
              </div>
          </div>
          <div class="row mt-3">
              <div class="col-md mb-5">
                <TechnologyCard /> 
              </div>
          </div>
      </main>
    </div>
  );
}

export default App;
