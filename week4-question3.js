const xhr = new XMLHttpRequest();
xhr.open("GET", "https://restcountries.eu/rest/v2/all");
xhr.onload = () => {
  let data = JSON.parse(xhr.response);
  for (let index = 0; index < data.length; index++) {
    console.log("Name : " + data[index].name);
    console.log("Region : " + data[index].region);
    console.log("Sub-region : " + data[index].subregion);
    console.log("population : " + data[index].population);
    console.log("=====================================");
    // console.log(country.name,' ',country.flag);
  }
};
xhr.onerror = function () {
  console.log("Error", this.statusText);
};
xhr.send();

//output
// Name : Afghanistan
// Region : Asia
// Sub-region : Southern Asia
// population : 27657145
// =====================================
// Name : Åland Islands
// Region : Europe
// Sub-region : Northern Europe
// population : 28875
// =====================================
// Name : Albania
// Region : Europe
// Sub-region : Southern Europe
// population : 2886026
// =====================================
