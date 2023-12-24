
//for (let age=30; age < 40 ; age++){
  //console.log(`I'm ${age} years old.Happy birthday to me`)
  //debugger;
//}
  
//const gifts=["teddy bear", "drone", "doll"]

//function wrapGifts(gifts){
  //for (let i =0;i < gifts.length; i++){
    //console.log(`Wrapped ${gifts[i]} and added a bow!`);
    //debugger;
  //}
  //return gifts
//}

//wrapGifts(gifts)


//function writeCards(names,events){
  //const cards=[]

  //for(i=0; i < names.length; i++){
    //const message= `Thank you ${names} for the wonderful ${events} gift!`
     //cards.push(message)

  //}
//return cards

//}



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
