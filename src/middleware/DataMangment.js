import countryList from '../data/Country.json';
    
// COUNTY CODE - COUNTRY NAME
export const  getcountryName = (code) => {
    if (code !== undefined) {
        var country = countryList.filter(function(data) {
            return data.alphaTwo === code;
        });
        if (country.length > 0) {
            return country[0].name;
        } else {
            return 'undefined';
        }
    }
}