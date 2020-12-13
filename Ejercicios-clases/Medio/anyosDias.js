alert('Introduce los años para pasarlo a días');
let year = prompt();
let days = calgAge(year);
alert(days);

function calgAge(years){
    return years * 365;