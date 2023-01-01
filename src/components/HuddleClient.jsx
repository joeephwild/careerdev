import React from "react";
import { getHuddleClient, HuddleClientProvider } from "@huddle01/huddle01-client";

import PeerVideoAudioElem from "./PeerVideoAudioElem";
import MeVideoElem from "./MeVideoElem";
import { useStateContext } from "../context";

const HuddleClient = () => {
  const huddleClient = getHuddleClient(
    "e5f348aa5626aaa775a09e9515f224933d25b7c40792bbf886a5e74c83827720"
  );
  const {
    handleJoin,
    peersKeys,
    lobbyPeers,
    roomState,
    recordingState,
    recordings,
  } = useStateContext();
  return (
    <div className="mt-11">
      <HuddleClientProvider value={huddleClient}>
        <button onClick={() => huddleClient.enableWebcam()}>Enable webcam</button>
        <MeVideoElem />
      </HuddleClientProvider>
    </div>
  );
};

export default HuddleClient;