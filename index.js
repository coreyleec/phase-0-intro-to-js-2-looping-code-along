const names = [ "Lisa", "Kaitlin", "Jan" ];

    function writeCards(names) {
        // for (let i = 0; i < 10; i++)
        // console.log(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
    let i = 0; 
    while (i < names.length) {
        console.log(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
        i++;
    }
    return names;
}

writeCards(names)
   