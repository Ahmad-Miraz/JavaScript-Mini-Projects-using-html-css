// const cards=[
//     {
//         title:"This is title 1",
//         desc:"This is desc 1"
//     },
//     {
//         title:"This is title 2",
//         desc:"This is desc 2"
//     },
//     {
//         title:"This is title 3",
//         desc:"This is desc 3"
//     },
//     {
//         title:"This is title 4",
//         desc:"This is desc 4"
//     }

// ];

//fetch data
const fetchData=async(apiLink)=>{
    try{
        const res=await axios(apiLink);
        return res.data;
    }catch(err){
        throw Error("data is not fetched");
    }
};


/* <div class="cards">
<h3 class="title">Card Title1</h3>
<p class="card-desc">Card Description1</p>
</div> */

const cardElement=document.querySelector(".card-container");
const loadData=async ()=>{
    const cards = await fetchData("https://jsonplaceholder.typicode.com/posts");
    cards.map((card)=>{
       const cardDiv= document.createElement("div");
       cardDiv.classList.add("cards");
       cardDiv.innerHTML=`<h3 class="title">${card.title}</h3>
       <p class="card-desc">${card.body}</p>`
       cardElement.appendChild(cardDiv);
    });
    
};
loadData();

// const cardElement=document.querySelector(".card-container");
// const loadData=()=>{
//     cards.map((card)=>{
//        const cardDiv= document.createElement("div");
//        cardDiv.classList.add("cards");
//        cardDiv.innerHTML=`<h3 class="title">${card.title}</h3>
//        <p class="card-desc">${card.desc}</p>`
//        cardElement.appendChild(cardDiv);
//     });
    
// };
// loadData();