// var name="anu"
// console.log(name,"Name here")

// anu Name here answer


console.log(name,"Name here")
var name="anu"
// undefined Name here answer


// var
// let
// const
//hoisting
//closure

 var  sname;            //declaration
 sname="anu";          //asign
console.log(sname);

// var  sname; 
// sname="anu"; 
// console.log(sname);

// let lname;
// lname="Let"
// console.log(lname);

// const cname=""
// cname="cname";
// console.log(cname);


//let -reassign the value,hosting not applicable,redeclaration is not poosible
//const - cant reassign the value,hosting not applicable,redeclaration is not poosible
//var-reassign the value,hoisting applicable,redeclaration is poossible







// cocnsole.log(sname);
// let iname="let";
// let Iname="Let"
// console.log(lname);
// const awdizkey="bvvb";
// cname="cname";
// console.log(cname);

// // let reassign value
// // const cant reassign

// // var   reassign

 // closure innerfunction can access uter function,its remember  scope of parents too
function outerFunction(){
    var myName ="Awdiz";
    // console.log(myName)

    function innerFunction(){
        // var mySurname="Institue";
        console.log(myName)
    
    }
    return innerFunction;
}
var myFunc = outerFunction; //{function:innerfunction} //var is also return with function
console.log(myFunc());
