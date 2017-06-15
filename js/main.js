//const API='89c02c28a31b133160cee5c25ed82a6e';
const ROOT=`http://api.duckduckgo.com/?format=json`;
//http://api.duckduckgo.com/?format=json&q=facebook
$(document).ready(()=>{
  $('#searchForm').on('submit',(e)=>
  {

  let searchText=$('#searchText').val();
    console.log("You searched for "+searchText);
  getCity(searchText);

  e.preventDefault();
  });
});




function getCity(searchText)
{
  const CITY=searchText;
const url=`${ROOT}&q=${searchText}`;
axios.get(url)


  .then((response)=>{
    console.log("response block");
      console.log(response);
console.log(response.data.Abstract);
console.log(response.data.AbstractURL);
let output1=`<h4>${response.data.Abstract}</h4>`;
let output2=`<h5 style="color:blue">${response.data.AbstractURL}</h5>`;
$('#details1').html(output1);
$('#details2').html(output2);

  })

.catch((err)=>
{console.log("error block");
  console.log(err);
});

}
