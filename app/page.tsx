import Image from "next/image";
import axios from "axios";
import { useEffect } from "react";

const getUserDetails = async () => {
  await new Promise((r) => setTimeout(r, 1000));
  const response = await axios.get("http://localhost:3000/api/user");
  return response.data;
};

export default async function Home() {
  const userDetails = await getUserDetails();
  return (
    <div className="flex flex-col justify-center h-screen">
      <div className="flex justify-center">
        <div className="border p-8 rounded">
          <div>Name: {userDetails?.name}</div>
          Emial : {userDetails?.email}
        </div>
      </div>
    </div>
  );
}
