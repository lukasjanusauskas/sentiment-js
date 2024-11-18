
export default function Home() {
  let text;
  return (
    <div className = "w-3/4 m-auto my-20 flex flex-row gap-10">
      <textarea rows="20" className="block p-2.5 w-2/3 text-md font-mono rounded-lg border bg-zinc-800 border-gray-300 placeholder-gray-400 text-white"
                placeholder="Write and we will analyze"
                value={text}></textarea>
      <div className="w-1/4 text-center font-sans font-light content-center pb-5">
        <p className="text-5xl">Sentiment:</p>
        <p className="text-4xl py-10 font-mono font-bold">Neutral</p>
        <button className="text-2xl hover:bg-white hover:text-zinc-950 underline">Save text</button>
      </div>
    </div>
  );
}
