const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

//books.map(elem => elem.price);


const titleCased = () => {
  return tutorials.map(titling);
}

//const titleCased = tutorials.map(elem=>titling(elem))



function titling(title){
  let retitled = '';
  retitled+=replaceAt(0,title.charAt(0),title);

  let index=1;
  
  let test =index<title.length;

  //look at using indexOf() to search for next space. then change
  

  while(test){
    
   
    if(retitled.charAt(index)===(' ')){
      
      retitled = replaceAt(index+1,retitled.charAt(index+1),retitled)
    }
    
    index++;
    test =index<title.length;
  }
  
  return retitled;
}

function replaceAt(index,letter,title){

  return title.substr(0,index)+letter.toUpperCase()+title.substr(index+1);
}