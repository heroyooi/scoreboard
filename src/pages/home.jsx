import React, { useCallback, useState } from 'react';
import {
  Page,
  Navbar,
  NavTitle,
  NavRight,
  Link,
} from 'framework7-react';

const HomePage = () => {
  const [leftScore, setLeftScore] = useState(0);
  const [rightScore, setRightScore] = useState(0);

  const incrementLeft = useCallback(() => {
    setLeftScore((score) => score + 1);
  }, []);

  const incrementRight = useCallback(() => {
    setRightScore((score) => score + 1);
  }, []);

  const resetScores = useCallback(() => {
    setLeftScore(0);
    setRightScore(0);
  }, []);

  return (
    <Page name="home" className="scoreboard-page">
      <Navbar>
        <NavTitle>동광태권도 점수판</NavTitle>
        <NavRight>
          <Link iconF7="arrow_counterclockwise" aria-label="Reset scores" onClick={resetScores} />
        </NavRight>
      </Navbar>
      <div className="scoreboard-layout">
        <button
          type="button"
          className="scoreboard-side scoreboard-side--left"
          onClick={incrementLeft}
        >
          <span className="scoreboard-side__score">{leftScore}</span>
          <span className="scoreboard-side__label">LEFT</span>
        </button>
        <button
          type="button"
          className="scoreboard-side scoreboard-side--right"
          onClick={incrementRight}
        >
          <span className="scoreboard-side__score">{rightScore}</span>
          <span className="scoreboard-side__label">RIGHT</span>
        </button>
      </div>
    </Page>
  );
};

export default HomePage;
