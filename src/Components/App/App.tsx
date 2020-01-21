import React from 'react';
import classes from './App.module.scss';
import Gallery from '../Gallery/Gallery';

const App: React.FC = () => {
  return (
    <div className={classes.app}>
      <header className={classes.header}>
        Just another sample gallery
      </header>
      <main className={classes.main}>
        <Gallery/>
      </main>
      <footer className={classes.footer}>
        <span className={classes.technologies}>(React [Hooks], TypeScript, Redux, Material-UI)</span>
        <a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/piotr-wi%C4%99caszek-9836b864/">Peter</a>
      </footer>
    </div>
  );
}

export default App;
