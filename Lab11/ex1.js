function isNonNegInt(string_check, returnErrors = false) {
errors = []; // assume no errors at first
if(Number(string_check) != string_check) errors.push('Not a number!'); // Check if string is a number value
if(string_check < 0) errors.push('Negative value!'); // Check if it is non-negative
if(parseInt(string_check) != string_check) errors.push('Not an integer!'); // Check that it is an integer
return returnErrors ? errors: (errors.length==0);
}

attributes = 'Max;21;MIS'
parts = attributes.split(';');
for(parts of parts){
    consoe.log(isNonNegInt(parts));
}


