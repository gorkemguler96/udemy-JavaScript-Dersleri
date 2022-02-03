// document.querySelector('#getEmploye').addEventListener('click',loadEmploye)
//
// function loadEmploye (){
//     const xhr = new XMLHttpRequest();
//     xhr.open('GET','products.json',true);
//
//     xhr.onload = function (){
//         if(this.status === 200) {
//             console.log(this.responseText)
//         }
//     }
//
//     xhr.send()
// }

// bunu böyle kullanan yaşamasın kardeşim


// function getJson(){
//     fetch('products.json')
//         .then(response => {
//             return response.json()
//         }).then(data=>{
//         console.log(data)
//     }).catch(error=>{
//         console.log("amına koyulmus")
//     })
// }
//
// getJson()

document.querySelector('button').addEventListener('click',async ()=>{
    const response = await (await fetch('products.json')).json()
    const mapResponse = response.map((item)=>item.name)
    console.log(mapResponse)
    console.log(response)
    document.querySelector('#employes').innerHTML=`${mapResponse}`


})
