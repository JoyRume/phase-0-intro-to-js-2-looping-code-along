function  writeCards(names,event){
  
  let message=[]
  for (let i=0; i < names.length; i++)
  {
    message.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
  }
return message
}

names=["Charlie", "Samip", "Ali"]
events= ["birthday"]

result=writeCards(names,events)
console.log(result)


function countDown(num) {
  while (num >= 0) {
    console.log(num);
    num--;
  }
}

countDown(10);
