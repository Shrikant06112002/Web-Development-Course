console.log("this is mod page");
function avergae(arr){
    let sum=0;
    arr.forEach(element => {
       sum+=element; 
    });

    return sum/arr.length;
}

module.exports = {
    avg :avergae,
    name :"shrikant",
    repo : "gihub",
}