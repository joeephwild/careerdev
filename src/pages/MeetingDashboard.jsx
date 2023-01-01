import { useEffect, useState } from "react";
import { huddleIframeApp, HuddleIframe } from "@huddle01/huddle01-iframe";

const MeetingDashboard = () => {
  const iframeConfig = {
    roomUrl: "https://iframe.huddle01.com/test-room",
    height: "100%",
    width: "100%",
  };
  const reactions = [
    "😂",
    "😢",
    "😦",
    "😍",
    "🤔",
    "👀",
    "🙌",
    "👍",
    "👎",
    "🔥",
    "🍻",
    "🚀",
    "🎉",
    "❤️",
    "💯",
  ];

  useEffect(() => {
    huddleIframeApp.on("peer-join", (data) =>
      console.log({ iframeData: data })
    );
    huddleIframeApp.on("peer-left", (data) =>
      console.log({ iframeData: data })
    );
  }, []);
  return (
    <div className="mt-9">
      <div className="container">
        <div>
          <br />
        </div>
        <div className="flex justify-center w-screen h-screen items-center">
          <HuddleIframe config={iframeConfig} />
        </div>
        <div className="flex space-x-3">
        {Object.keys(huddleIframeApp.methods)
          .filter((key) => !["sendReaction", "connectWallet"].includes(key))
          .map((key) => (
            <button
            className="bg-green-500 rounded-lg text-wite px-4 text-xs py-2"
              key={key}
              onClick={() => {
                huddleIframeApp.methods[key]();
              }}
            >
              {key}
            </button>
          ))}
        </div>

        <br />
        {reactions.map((reaction) => (
          <button
            key={reaction}
            onClick={() => huddleIframeApp.methods.sendReaction(reaction)}
          >
            {reaction}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MeetingDashboard;
