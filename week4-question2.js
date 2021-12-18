const xhr = new XMLHttpRequest();

//api to get all the countries related data
xhr.open("GET", "https://restcountries.eu/rest/v2/all");

//onloading the reponse is loaded to console
xhr.onload = () => {
  let data = JSON.parse(xhr.response);
  for (let index = 0; index < data.length; index++) {
    console.log(data[index].name, " : ", data[index].flag);
  }
};

xhr.send();

//output:
// Afghanistan  :  https://restcountries.eu/data/afg.svg
// Åland Islands  :  https://restcountries.eu/data/ala.svg
// Albania  :  https://restcountries.eu/data/alb.svg
// Algeria  :  https://restcountries.eu/data/dza.svg
// American Samoa  :  https://restcountries.eu/data/asm.svg
// Andorra  :  https://restcountries.eu/data/and.svg
// Angola  :  https://restcountries.eu/data/ago.svg
// Anguilla  :  https://restcountries.eu/data/aia.svg
// Antarctica  :  https://restcountries.eu/data/ata.svg
// Antigua and Barbuda  :  https://restcountries.eu/data/atg.svg
// Argentina  :  https://restcountries.eu/data/arg.svg
// Armenia  :  https://restcountries.eu/data/arm.svg
// Aruba  :  https://restcountries.eu/data/abw.svg
// Australia  :  https://restcountries.eu/data/aus.svg
// Austria  :  https://restcountries.eu/data/aut.svg
//  Azerbaijan  :  https://restcountries.eu/data/aze.svg
// Bahamas  :  https://restcountries.eu/data/bhs.svg
// Bahrain  :  https://restcountries.eu/data/bhr.svg
//...
