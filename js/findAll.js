
//First, we will fetch the JSON data by using the fetch API. This will return a promise with our JSON data. Then we will append the data dynamically by creating HTML elements on the fly. We will then append our JSON data to those elements.

fetch("http://localhost:3000/parks/")
   .then( (response) => {
      return response.json() })
   .then( (data) => {
      fillTable(data);
   })
   .catch( (err) => {
      console.log(err);
   });


function fillTable(data) {
   // Select the table element where we want to add our data rows
   let tableBody = document.querySelector(".toBeFilled");

   // for each park
   for (let park of data) {
      // create a new row at the end (-1)
      let row = tableBody.insertRow(-1);
      // add one cell for every park detail 
      let cell1 = row.insertCell(0);
      let cell2 = row.insertCell(1);
      let cell3 = row.insertCell(2);
      let cell4 = row.insertCell(3);
      let cell5 = row.insertCell(4);
      let cell6 = row.insertCell(5);
      // fill them up with the information we got from fetch the API (data)
      cell1.innerHTML = park.name;
      cell2.innerHTML = park.city;
      cell3.innerHTML = park.foodAndBeverage === null ? 'None': park.foodAndBeverage;
      cell4.innerHTML = park.parking === true ? 'Yes' : 'No';
      cell5.innerHTML = park.toilets === true ? 'Yes' : 'No';
      cell6.innerHTML = park.disableAccess === true ? 'Yes' : 'No';
   }
}
