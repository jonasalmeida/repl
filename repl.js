repl = function(){}

repl.get = async function (url='http://localhost:3000',format='text'){
    return (await fetch(url))[format]()
}

repl.post = async function (url='http://localhost:3000',data={hello:'world!',at:Date()},format='text'){
    return (await fetch(url,{
        method:"POST",
        body:JSON.stringify(data)
    }))[format]()
}