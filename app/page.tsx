'use client';

import Image from "next/image";
import Navbar from "./components/Navbar";
import Searchbox from "./components/Searchbox";
import { useState } from "react";
import { FormEvent } from "react";

export default function Main() {
  const [isLoading, setIsLoading] = useState<boolean>();

  const [error, setError] = useState<string | null>(null)
 
  async function onSubmit() {
    setIsLoading(true)
    setError(null) // Clear previous errors when a new request starts
 
    try {
      const response = await fetch('/api/submit', {
        method: 'POST',
      })

      alert("Submittted");
 
      if (!response.ok) {
        throw new Error('Failed to submit the data. Please try again.')
      }
 
      // Handle response if necessary
      const data = await response.json()
      // ...
    } catch (error : any) {
      // Capture the error message to display to the user
      setError(error.message)
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }
 
  return (
    <>
    <Navbar />
    <main className="flex min-h-[100vh] flex-col items-center justify-evenly p-24">
      <div className="w-[50%] flex flex-col justify-evenly items-center">
        <Searchbox placeholder="Enter the product name here..."/>
        <button className="p-4 bg-theme w-[10rem] m-8 rounded-xl text-2xl hover:scale-[110%] transition-all duration-259" onClick={(e)=>onSubmit()} >
          {isLoading ? 'Loading...' : 'Submit'}
        </button>
      </div>
      <h1 className="text-[10rem] text-purple-600 font-bold tracking-widest">OPF</h1>
    </main>
    </>
  );
}
