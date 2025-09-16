import React, { useCallback, useState } from 'react';
import { Page } from 'framework7-react';

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

  const decrementLeft = useCallback(() => {
    setLeftScore((score) => Math.max(0, score - 1));
  }, []);

  const decrementRight = useCallback(() => {
    setRightScore((score) => Math.max(0, score - 1));
  }, []);

  return (
    <Page name="home" className="scoreboard-page">
      <div className="scoreboard-layout">
        <div className="scoreboard-side scoreboard-side--left">
          <button
            type="button"
            className="scoreboard-side__main"
            onClick={incrementLeft}
          >
            <span className="scoreboard-side__score">{leftScore}</span>
          </button>
          <button
            type="button"
            className="scoreboard-side__adjust"
            onClick={decrementLeft}
          >
            -1
          </button>
        </div>
        <div className="scoreboard-controls">
          <button
            type="button"
            className="scoreboard-reset"
            aria-label="Reset scores"
            onClick={resetScores}
          >
            <i className="f7-icons">arrow_counterclockwise</i>
          </button>
        </div>
        <div className="scoreboard-side scoreboard-side--right">
          <button
            type="button"
            className="scoreboard-side__main"
            onClick={incrementRight}
          >
            <span className="scoreboard-side__score">{rightScore}</span>
          </button>
          <button
            type="button"
            className="scoreboard-side__adjust"
            onClick={decrementRight}
          >
            -1
          </button>
        </div>
      </div>
    </Page>
  );
};

export default HomePage;
