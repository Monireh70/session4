const customerBuys: any = []

function add_to_cart (item: string){
    customerBuys.push(item);
    for( let i=0; customerBuys.length ;i++){
        console.log(customerBuys[i]);
    }
    //Another way to print an array:
    const stringOfValues : string = customerBuys.toString();
    console.log(stringOfValues)


}

add_to_cart("tea") ;
add_to_cart("soap") ;