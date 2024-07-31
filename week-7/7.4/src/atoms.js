import { atom, atomFamily, selector, selectorFamily } from "recoil";
export const networkAtom = atom({ key: "networkAtom", default: 10 });
export const jobsAtom = atom({ key: "jobsAtom", default: 10 });
// export const notificationAtom = atom({
//   key: "notificationAtom",
//   default: { network: 4, jobs: 6, messaging: 3, notifications: 3 },
// });
export const notificationAtom = atom({
  key: "notificationAtom",
  default: selector({
    key: "networkAtomSelector",
    get: async () => {
      const res = axios.get("https://sum-server.100xdevs.com/notifications");
      return res.data;
    },
  }),
});
export const todosAtomFamily = atomFamily({
  key: "todosAtomFamily",
  default: selectorFamily({
    key: "todosAtomSelectorFamily",
    get:
      (id) =>
      async ({ get }) => {
        const res = axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`);
        return res.data;
      },
  }),
});
export const messagingAtom = atom({ key: "messagingAtom", default: 10 });
// export const totalNotificationSelector = selector({
//   key: "totalNotificationSelector",
//   get: ({ get }) => {
//     const networkNotificationCount = get(networkAtom);
//     const jobsNotificationCount = get(jobsAtom);
//     const notificationCount = get(notificationAtom);
//     const messagingCount = get(messagingAtom);
//     return (
//       networkNotificationCount +
//       jobsNotificationCount +
//       notificationCount +
//       messagingCount
//     );
//   },
// });
export const totalNotificationSelector = selector({
  key: "totalNotificationSelector",
  get: ({ get }) => {
    const allNotifications = get(notificationAtom);
    return (
      allNotifications.network +
      allNotifications.jobs +
      allNotifications.messaging +
      allNotifications.notifications
    );
  },
});
