import React, { useState, useEffect } from "react";
import { ProgressBar, Step } from "react-step-progress-bar";

const Steps = ({ total }) => {
  {
    <Step>
      {({ accomplished, index }) => (
        <div
          className={`indexedStep ${
            accomplished ? "accomplished" : "not-accomplished"
          }`}
        >
          {index + 1}
        </div>
      )}
    </Step>;
  }
};

const ProgressBarComponent = ({ pages, index }) => {
  let steps = [];

  const step = (
    <Step>
      {({ accomplished, index }) => (
        <div
          className={`indexedStep ${
            accomplished ? "accomplished" : "not-accomplished"
          }`}
        >
          {index + 1}
        </div>
      )}
    </Step>
  );

  for (let i = 0; i < pages; i++) {
    steps.push(step);
  }

  return (
    <div className="px-4 my-8">
      <ProgressBar percent={((index - 1) * 30) / 2} filledBackground="#fcc425">
        {steps.map((step) => {
          return step;
        })}
      </ProgressBar>
    </div>
  );
};

export default ProgressBarComponent;
