import axios from "axios";

async function getUserData() {
  await new Promise((r) => setTimeout(r, 4000));
  const response = await axios.get("http://localhost:3000/api/user");
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
