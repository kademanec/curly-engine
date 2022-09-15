//- Use reduce to concatenate all the countries and to produce this 
//sentence: Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries

const countries = ['Estonia','Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand'];
const str = countries.reduce(function (val,ind){
        
        return val+ ","+ind;
});

console.log(str +" are north European countries");