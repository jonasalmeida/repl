//repl = function(){}

get = async function (url='http://localhost:3000',format='text'){
    return (await fetch(url))[format]()
}

post = async function (url='http://localhost:3000',data={hello:'world!',at:Date()},format='text'){
    return (await fetch(url,{
        method:"POST",
        body:JSON.stringify(data)
    }))[format]()
}

makeTokens = function(n){
  return [...Array(n)].
  map(_=>Math.random().toString().slice(2))
}

// more