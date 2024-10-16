import Searchbox from "./components/Searchbox";

export default function Main() 
{
  return (
    <>
    <main className="flex min-h-[100vh] flex-col items-center justify-evenly p-24">
      <h1 className="text-[10rem] text-purple-600 font-bold tracking-widest">OPF</h1>
      <div className="w-[50%] flex flex-col justify-evenly items-center">
        <Searchbox placeholder="Enter the product name here..."/>
        <button className="p-2 bg-theme w-[10rem] m-8 rounded-xl text-2xl hover:scale-[103%] transition-all duration-259 text-white"  >
          {/* {isLoading ? 'Loading...' : 'Submit'} */}
          {"Submit"}
        </button>
      </div>
    </main>
    </>
  );
}
