import { ParallaxProvider } from "react-scroll-parallax";
import styles from "./App.module.scss";
import ParallaxComponent from "./components/ParallaxComponent";

const App = () => {

  return (
    <ParallaxProvider>
      <div className={styles.container}>
        <ParallaxComponent />
      </div>
    </ParallaxProvider>
  );
}

export default App;
