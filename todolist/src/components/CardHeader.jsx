import React from "react";
import { observer } from "mobx-react";
import { useStore } from "mobx-store-provider";

import {
  Badge,
  ProgressBar,
} from "react-bootstrap";
import CompletedAlert from "./CompletedAlert";

const Card = () => {
  const { countLabel, progress } = useStore();
  return (
    <>
      <Badge variantColor="green" float="right">{`${countLabel()} `}</Badge>
      <div>
        <div>Today</div>
        <div>{`${progress()}%`}</div>
        <div>Complete</div>
      </div>
      <ProgressBar color="green" value={progress()} />
      {progress() === "100" && <CompletedAlert />}
    </>
  );
};

export default observer(Card);