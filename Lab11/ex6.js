function isNonNegInt(string_check, returnErrors = false) {
    errors = []; // assume no errors at first
    if(Number(string_check) != string_check) errors.push('Not a number!'); // Check if string is a number value
    if(string_check < 0) errors.push('Negative value!'); // Check if it is non-negative
    if(parseInt(string_check) != string_check) errors.push('Not an integer!'); // Check that it is an integer
    return returnErrors ? errors: (errors.length==0);
    }

age = "21"
name = "Max"

parts = attributes.split(';')
attributes = name + ";" + age + ";" + (age +0.5) + ";" + (age - 0.5);
pieces = attributes.split(';');
for(i in parts){
    parts[i] = `${typeof parts[i]}${parts[i]}`;
}

function checkIt(part, i) { 
    console.log(`part ${index} is ${(isNonNegInt(item)?'a':'not a')} quantity`);
}

pices.forEach((item,index)=>{
    console.log(`part ${index} is ${isNonNegInt(item)? 'a':'not a')} quantity`)
})
console.log(parts.join(","))