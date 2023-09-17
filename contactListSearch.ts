const contactList :any = [] ;

const eachContact :object = {
    name:'',
    phoneNumber:'',
};

//--------------------------Add-------------------------------
function addEachContact(newName: string,newPhoneNumber:string)
{   
    const newContact = Object.create(eachContact);
    newContact.name = newName;
    newContact.phoneNumber= newPhoneNumber;

    //add to array:
    contactList.push(newContact);

}
//--------------------------Print-------------------------------
// function printContactList(contactList){
//     for(let i=1; contactList.length ;i++)
//     {
//         console.log(contactList[i])
//     }
// }
addEachContact("Monir","123456"); 
// printContactList(contactList);
console.log(contactList)
 
//--------------------------Search-------------------------------
// function searchContact(specificName:string){
//     let flag :boolean= true;
//     let i:number=0 ;
//     while(flag){
//         if(contactList[i].name =!specificName){
//             i++;
//         }
//         flag=false;
//         console.log('I have Found!')
//         console.log(contactList[i].name,contactList[i].phoneNumber)
//     }
    
// }
