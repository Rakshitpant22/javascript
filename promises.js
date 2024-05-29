//! --> Javascript ki most libraries v8 engine pr c++ me liklhi hui hai ex console log was not there in erlier js;

//--> Some tasks  ex (fetch data from database),(cryptography files),(network call)etc. these takes certain time to be executed
// - To deal with this we either use async (mtlb jabtak y kaam nhi ho jata ruke rho)
// - Or use the concept of promise(an object in js which repersent the eventual completion/failure of an asyncronous operation) 

// --> Ye promise pehle js ka part nhi tha pehle libraries thi ex:(BLUEBIRD, Q) ye asyncronous functions ko deal krta tha
//     baad m is libraries ko js me daal diya tha in (ES6);

//promise generate
const promise1 = new Promise(function(resolve,reject){
    // Do an async task , cryptography related ,network call
    let x=Math.floor(parseInt(Math.random()*10)*1000);
    setTimeout(function(){
        console.log("async is generated after " + `${x}`+ " seconds" );
        resolve();
    },x)
})
    // promise create
    promise1.then(function(){
        console.log("promise consumed");
    })
// isse promise generate(async) horha h but promise generate nhi horha kyuki .then s connect krana pdega promise ko
// this is done by calling resolve() method