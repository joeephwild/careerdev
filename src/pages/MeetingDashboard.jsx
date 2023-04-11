import { useEffect } from "react";
import { huddleIframeApp, HuddleIframe } from "@huddle01/huddle01-iframe";
import { useHuddleStore } from "@huddle01/huddle01-client/store";

const MeetingDashboard = () => {
  const roomId = useHuddleStore(state => state.roomState.roomId);
  const iframeConfig = {
    roomUrl: `https://iframe.huddle01.com/${roomId}`,
    height: "95%",
    width: "100%",
  };

  useEffect(() => {
    huddleIframeApp.on("peer-join", (data) =>
      console.log({ iframeData: data })
    );
    huddleIframeApp.on("peer-left", (data) =>
      console.log({ iframeData: data })
    );
  }, []);
  return (
    <div className="mt-9 overflow-hidden">
      <div className="container">
        <div className="flex justify-center w-screen  h-screen items-center">
          <HuddleIframe   config={iframeConfig} />
        </div>
      </div>
    </div>
  );
};

export default MeetingDashboard;
