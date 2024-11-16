// async keyword:==  promise  kaarta hai   sync data ko async  banata hai 

// const getdata = async () => {
//     let data = "hello world";     /// x main data bhej raha hai
//     return data;
// };


//    1st method :=Promise ko handle karta hai  

// getdata().then((x) => {        // x main data aa raha hai 
//     console.log(x);
// })

// await keyword  :- promish ka wait karta hai
// 2st method :=Promise ko handle karta hai  

const getdata = async () => {
    let y = await "hello world";
    console.log(y);
};

getdata();