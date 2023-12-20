// navbar.js
'use client'
import { useState } from "react";
import { useRouter } from "next/navigation";
import { getAuth, signOut } from "firebase/auth";
import { auth } from "@/firebase/firebase"; // Update the path
import { toast } from "sonner";

const Navbar = () => {
  const router = useRouter();
  const [error, setError] = useState(null);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      toast.success('You have been signed out');
      router.push("/"); // Redirect to the desired page after logout
    } catch (error:any) {
      setError(error.message);
      toast.error(error.message);
    }
  };

  return (
    <nav className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <a href="/home" className="text-2xl font-bold">
        Your App Name
      </a>
      {auth.currentUser &&  <button
        onClick={handleLogout}
        className="bg-red-500 text-white px-4 py-2 rounded"
      >
        Logout
      </button> }
     
      {error && <p className="text-red-500">{error}</p>}
    </nav>
  );
};

export default Navbar;
