//  const data=[
//     {
//         title:"Meeting",
//         date:"01/06/2022",
//         priority:"High",
//         category:"Meeting"

//     },
//     {
//         title:"Interview",
//         date:"01/06/2022",
//         priority:"High",
//         category:"Meeting"

//     },
//     {
//         title:"Lunch",
//         date:"01/06/2022",
//         priority:"High",
//         category:"Meeting"

//     }



// ]
const data=()=>{
    const localData=localStorage.getItem("toDoData");
    if(localData){
      return JSON.parse(localData);
    }
    else{
      return [];
    }
  }

export default data;