import axios from "axios";

async function getUserData() {
  await new Promise((r) => setTimeout(r, 4000));
  const response = await axios.get(
    "https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details"
  );
  return response.data;
}
// it will call teh api in the server itself
export default async function Home() {
  const userDetails = await getUserData();
  return (
    <div>
      {userDetails.email}
      {userDetails.name}
    </div>
  );
}
