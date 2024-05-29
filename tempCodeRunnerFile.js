const promise6= new Promise(function(resolve,reject){
    setTimeout(function(){
      let error=false;
          if(!error){
              resolve({username: "JAVASCRIPT ",mob:"91"});
          }
          else{
              reject("ERROR: JS went wrong");
          }
    },1000)
  })

async function consumepromise6(){
    try{
        const y= await promise6
        console.log(y);
    }
    catch(error){
        console.log(error);
    }
}
consumepromise6();