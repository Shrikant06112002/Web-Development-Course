const mongoose = require('mongoose');
const validator= require('validator');

mongoose.connect('mongodb://127.0.0.1:27017/Company')
.then(()=> console.log("connection successfull"))
.catch((err)=>console.log(err));

//schema
const EmployeeSchema=new mongoose.Schema({
    name :{ 
        type:String,
        required:true
    },
    sex: String,
    year:Number ,
    active:Boolean,
    date:{
        type:Date,
        default:Date.now
    }

})
// const Employee= new mongoose.model("Employee",EmployeeSchema);



// //schema with defualt validation
const EmployeeSchema=new mongoose.Schema({
    name :{ 
        type:String,
        required:true,
        unique: true ,   //unique is not validator
        lowercase:true,
        // uppercase:true,
        trim:true,//space remover stating and ending of senentence
        minlength:[2,"minimum 2 letters"],
        maxlength:[30,"maximum 30 letters"],
    },
    sex:{
        type: String,
        enum:["male","female","other"],
    },
    year:Number ,
    email:{
        type:String,
    },
    active:Boolean,
    date:{
        type:Date,
        default:Date.now
    }

})
const Employee= new mongoose.model("Employee",EmployeeSchema);



// //schema with custom validation
// const EmployeeSchema=new mongoose.Schema({
//     name :{ 
//         type:String,
//         required:true,
//         unique: true ,   //unique is not validator
//     },
//     sex:{
//         type: String,
//     },
//     year:{
//         type:Number,
//         validate(value){
//             if (value<0) {
//                 throw new  Error("The Year should not be negative");
//             }
             
//         }
//     },
//     email: {
//         type: String,
//         trim: true,
//         unique: true,
//         required: 'Email address is required',
//         validateEmail(email) {
//             var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//             return re.test(email)
//         },
//         match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
//     },
//     active:Boolean,
//     date:{
//         type:Date,
//         default:Date.now
//     }

// })
// const Employee= new mongoose.model("Employee",EmployeeSchema);


//schema with validation with npm pkg
const EmployeeSchema=new mongoose.Schema({
    name :{ 
        type:String,
        required:true,
        unique: true ,   //unique is not validator
    },
    sex:{
        type: String,
    },
    year:{
        type:Number,
    },
    email: {
        type: String,
        unique:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Email is invalid");
            }
        }
    },
    active:Boolean,
    date:{
        type:Date,
        default:Date.now
    }

})
const Employee= new mongoose.model("Employee",EmployeeSchema);
//for insert element
const createDocument = async ()=>{
    try {
        const FirstEmployee =new Employee({
            name :"shreya",
            sex: "female",
            year: 3,
            email:"shrikat@gmail.com",
            active:true,
          
        })

        // const secondEmployee =new Employee({
        //     name :"Shreya",
        //     sex: "female",
        //     year: 2,
        //     active:true,
          
        // })
        // const thirdEmployee =new Employee({
        //     name :"sahil",
        //     sex: "male",
        //     year: 1,
        //     active:true,
          
        // })
        const result = await Employee.insertMany([FirstEmployee]);
        console.log(result);
    } catch (error) {
        console.log(error)
    }
   
    

}
createDocument();

//getDoument finding operation
const getDoument= async ()=>{
    const result = await Employee.find({sex:"male"})
    .select({name:1}).limit(1);
    console.log(result);
}
// getDoument();

//comparison operator
const getDoumentCom= async ()=>{
    // const result = await Employee.find({year : {$gt:1}})
    // .select({name:1});
        // const result = await Employee.find({name : {$in:["shrikant","shri"]}})
        const result = await Employee.find({name : {$nin:["shrikant","shri"]}})

    .select({name:1})
    console.log(result);
}
// getDoumentCom();

//logical operator
const getDoumentlogic= async ()=>{
    // const result = await Employee.find({$or:[{male:"male"},{year:2}]}).select({name:1});
    const result = await Employee.find({$and:[{male:"male"},{year:2}]}).select({name:1});
    console.log(result);
}
// getDoumentlogic();

//counting
const getDoumentCount= async ()=>{
    // const result = await Employee.find({year : {$gt:1}})
    // .select({name:1});
        // const result = await Employee.find({name : {$in:["shrikant","shri"]}})
        const result = await Employee.find({name : {$in:["shrikant","shri"]}})

    .select({name:1}).countDocuments();
    console.log(result);
}
// getDoumentCount();

//sorting--
const getDoumentSort= async ()=>{
    // const result = await Employee.find()
    // .select({name:1}).sort({name : 1});//ascending
       const result = await Employee.find()
    .select({name:1}).sort({name : -1});//desending
    console.log(result);
}
// getDoumentSort();

//update the doc
const upadateDocument = async(id)=>{
    const result = await Employee.findByIdAndUpdate({_id:id},{$set:{
        name:"SSSSSSShrikant"

    }});
    console.log(result);
}
// upadateDocument("64631ef9bc9079cb60e1a333");

//delete
const deleteDocument = async (_id)=>{
    const result = await Employee.findByIdAndDelete({_id});
    console.log(result);
}
// deleteDocument("646320c1d158206fc7cfe1b8");