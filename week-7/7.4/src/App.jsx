import { useEffect, useMemo, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
import {
  jobsAtom,
  messagingAtom,
  networkAtom,
  notificationAtom,
  totalNotificationSelector,
} from "./atoms";
import axios from "axios";
function App() {
  return (
    <RecoilRoot>
      <MainApp />
    </RecoilRoot>
  );
}
const MainApp = () => {
  // const networkNotificationCount = useRecoilValue(networkAtom);
  // const jobsNotificationCount = useRecoilValue(jobsAtom);
  const [notificationCount, setNotificationCount] =
    useRecoilState(notificationAtom);
  // const [messagingNotifiationCount, setMessagingNotifiationCount] =
  //   useRecoilState(messagingAtom);
  const totalNotificationCount = useRecoilState(totalNotificationSelector);
  // alternate way using the useMemo
  // const totalNotificationCount = useMemo(() => {
  //   return (
  //     networkNotificationCount +
  //     jobsNotificationCount +
  //     notificationCount +
  //     messagingNotifiationCount
  //   );
  // }, [
  //   networkNotificationCount +
  //     jobsNotificationCount +
  //     notificationCount +
  //     messagingNotifiationCount,
  // ]);

  return (
    <div>
      <button>Home</button>
      <button>My network {notificationCount.network}</button>
      <button>Jobs {notificationCount.jobs}</button>
      <button>Messaging {notificationCount.messaging}</button>
      <button>Notification {notificationCount.notifications}</button>
      <button
      // onClick={() => {
      //   setMessagingNotifiationCount(messagingNotifiationCount + 1);
      // }}
      >
        me {totalNotificationCount}
      </button>
    </div>
  );
};
export default App;
