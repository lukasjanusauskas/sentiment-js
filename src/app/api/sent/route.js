var Sentiment = require('sentiment');

var sentiment = new Sentiment();

export async function GET(request) {
  const text_input = request.nextUrl.searchParams.get('body')

  console.log(request.nextUrl.searchParams)
  var result = sentiment.analyze(text_input);
  var value = result.comparative;
  
  var output; 

  if(value > 0.5)
    output = "Positive"
  else if (value < -0.5)
    output = "Negative"
  else
    output = "Neutral"

  return Response.json({
    label: output,
    value: value
  })
}