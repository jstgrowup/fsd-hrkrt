import client from "@/db";
async function getUserData() {
  const user = await client.user.findFirst();
  return {
    email: user?.email,
    name: user?.name,
  };
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
