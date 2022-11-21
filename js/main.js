

function addQuote(){
  var quotes=[{quote:"So many books, so little time.",author:" Frank Zappa"},
  {quote:"You know you're in love when you can't fall asleep because reality is finally better than your dreams.",author:"Dr. Seuss"},
  {quote:"Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",author:"Albert Einstein"},
  {quote:"You know you're in love when you can't fall asleep because reality is finally better than your dreams.",author:"Dr. Seuss"},
  {quote:"You've gotta dance like there's nobody watching,Love like you'll never be hurt, Sing like there's nobody listening,And live like it's heaven on earth.",author:"William W. Purkey"},
  ]
  var index= Math.floor(Math.random()*quotes.length)

  document.getElementById("quote").innerHTML=quotes[index].quote
  document.getElementById("author").innerHTML=quotes[index].author
}