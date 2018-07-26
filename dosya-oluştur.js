
// dosya oluşturma ve yazdırma işlemi
const fs = require('fs')
fs.appendFile('deneme.txt', 'Deneme 123', (error)=> {
    if(error)
        throw error;


        console.log("Dosyaya Ekleme Yapıldı");
});
