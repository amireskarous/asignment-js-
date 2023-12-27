var qoute = [

  {'quote':"“Be yourself; everyone else is already taken.”",
  'author':"― Oscar Wilde"
  },
  {'quote':"“So many books, so little time.”",
  'author':"― Frank Zappa"
  },
  {'quote':"“You only live once, but if you do it right, once is enough.”",
  'author':"― Mae West"
  },
  {'quote':"“Be the change that you wish to see in the world.”",
  'author':"― Mahatma Gandhi"
  },
  
  ]
  
  function generateQuote(){
    var num = Math.floor(Math.random() * qoute.length)
    console.log(num);
    document.getElementById("quote").innerHTML= qoute[num] .quote;
    document.getElementById("author").innerHTML= qoute[num] .author;
  }