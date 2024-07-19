function generaterandompassword(length, includelowercase, includeUppercase, includeNumbers, includeSpecialCharacters) {

    let password = '';
    let allowedchar = '';

    lowercasechars = 'abcedfghijklmnopqrstuvwxyz';
    Uppercasechars = 'ABCEDFGHIJKLMNOPQRSTUVWXYZ';
    numbers = '1234567890';
    specialcharacters = '!@#$%^&*()_+';

    allowedchar += includelowercase ? lowercasechars : ''; 
    allowedchar += includeUppercase ? Uppercasechars : ''; 
    allowedchar += includeNumbers ? numbers : ''; 
    allowedchar += includeSpecialCharacters ? specialcharacters : ''; 

    for(let i=0;i<length;i++){

        const random = Math.floor(Math.random() * allowedchar.length);
        password += allowedchar[random];
    }
    return password;
}
    password = generaterandompassword(12, true, true, true, true);
    console.log(`Generated Password: ${password}`);    