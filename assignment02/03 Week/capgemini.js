import fetch from 'node-fetch';
function getResults(){
    
    // setTimeout(()=>{
    //     console.log("a");
    // },1000)
   
    
    async function get1(){
        const data = await fetch("https://jsonplaceholder.typicode.com/users");
        const d1 =await data.json()
        console.log(d1,"data 1")    
    }
    get1();
    
    async function get2(){
        const data1 = await fetch("https://jsonplaceholder.typicode.com/users");
        const d2 = await data1.json()
        console.log(d2,"data 2")
    }
    get2();
}
getResults();