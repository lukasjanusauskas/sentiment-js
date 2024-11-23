'use client';

var Sentiment = require('sentiment');

var sentiment = new Sentiment();
import Form from 'next/form'

export default function Home() {
  async function callSentimentApi(event){
    const formData = new FormData(event.currentTarget)

    var result = sentiment.analyze(formData.get('body'));
    var value = result.comparative;
    
    var output;
  
    if(value > 0.5)
      output = "Positive"
    else if (value < -0.5)
      output = "Negative"
    else
      output = "Neutral"

    console.log(output)
  }

  return (
    <div >
      <Form className = "w-3/4 m-auto my-20 flex flex-row gap-10"
            onSubmit={callSentimentApi}>
      <textarea rows="20" className="block p-2.5 w-2/3 text-md font-mono rounded-lg border bg-zinc-800 border-gray-300 placeholder-gray-400 text-white"
                name="body" placeholder="Write and we will analyze"></textarea>
      <div className="w-1/4 flex flex-col gap-10 text-center font-sans font-light content-center py-5">
        <div className="">
          <button className="text-xl hover:bg-white hover:text-zinc-950 bg-zinc-700 rounded-xl px-24" type='submit'>Evaluate</button>
        </div>

        <p className="mt-10 text-5xl">Sentiment:</p>
        <p className="text-4xl font-mono font-bold">Neutral</p>
        <button className="text-2xl hover:bg-white hover:text-zinc-950 w-fit mx-auto underline">Save text</button>
      </div>

      </Form>
    </div>
  );
}
