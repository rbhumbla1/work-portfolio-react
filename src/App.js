import './App.css';
import MainContainer from "./components/MainContainer";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons'


library.add(fas, faTwitter, faGithubSquare, faLinkedin)


const styles = {
  div: {
    background: 'darkgrey',
  },
};

function App() {
  return (
    <div className="App" style={styles.div}>
      <MainContainer />
    </div>
  );
}

export default App;
