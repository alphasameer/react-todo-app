
function Random(){
   
let num = Math.random()*1000;
    return <h2 style={{"background":"yellow"}}>The random number is: {Math.round(num)} </h2>
    
}

export default Random;