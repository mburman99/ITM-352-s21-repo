day = 27;
month = 'may';
year = 1999;

if(month=='jan' | month=='feb') {
    step1=year-1
} else{
    step1=year
}

step2 = Math.floor(step1/4) + step1;
step3 = step2 - Math.floor(step1/100);
step4 = Math.floor(step1/400) + step3;
step5 = day + step4;
var monthKey = {
    'jan' :0,
    'feb' :3,
    'mar' :2,
    'apr' :5,
    'may' :0,
    'jun' :3,
    'jul' :5,
    'aug' :1,
    'sep' :4,
    'oct' :6,
    'nov' :2,
    'dec' :4
}

step6 = monthKey[month] + step5;
step7 = step6 % 7;

var dow = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
]

console.log(`${month} ${day}, ${year} was a ${dow[step7]}`)