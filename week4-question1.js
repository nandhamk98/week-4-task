let jsonObj1 = { name: "Person 1", age:5 };
let jsonObj2 = { age:5, name: "Person 1" };
//declaring flag to hold property
let flag = 0;

//Travsering through json object
for(let keys in jsonObj1) {
    //checking the contents are same
    if(jsonObj1[keys] !== jsonObj2[keys]) {
        flag = 1;
     }
}

//Using flag to get the answer
if(flag) {
    console.log('Properties and values are not same');
}else{ 
    console.log('Properties and values are same');
}
