
// dosya silme işlemi

const fs = require('fs');

fs.unlink('deneme.txt', (err)=> {

    if(err)
    {
      console.log("Böyle Bir Dosya Bulunmamaktadır");
      setTimeout(() => {throw err; }, 3500); // setTimeout komutu belirnenen süre bittiğinde komutu çalıştırır
       // 3500 = 3500 milisaniye = 3.5 saniye =================================^
    }

    if(!err)
      console.log("Dosyanız Başarıyla Silindi");
});