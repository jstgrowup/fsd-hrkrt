import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
import {
  jobsAtom,
  messagingAtom,
  networkAtom,
  notificationAtom,
} from "./atoms";

function App() {
  return (
    <RecoilRoot>
      <MainApp />
    </RecoilRoot>
  );
}
const MainApp = () => {
  const networkNotificationCount = useRecoilValue(networkAtom);
  const jobsNotificationCount = useRecoilValue(jobsAtom);
  const notificationCount = useRecoilValue(notificationAtom);
  const [messagingNotifiationCount, setMessagingNotifiationCount] =
    useRecoilState(messagingAtom);
  return (
    <div>
      <button>Home</button>
      <button>My network()</button>
      <button>Jobs()</button>
      <button>Messaging()</button>
      <button>Notification()</button>
      <button
        onClick={() => {
          setMessagingNotifiationCount(messagingNotifiationCount + 1);
        }}
      >
        me {messagingNotifiationCount}
      </button>
    </div>
  );
};
export default App;
