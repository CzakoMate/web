const fs = require('fs');
if (!fs.existsSync('./versek')) {
    fs.mkdir('./versek', err => {
      if (err) {
        console.log(err);
      }
      console.log('mappa létrehozva');
    });
  }
  fs.writeFile('./versek/vers.txt', 'Őszből tavaszba lép a lélek, Virágok szirmai szárnyalnak, A nap sugarai ébrednek, Életet hozva, szívünkbe találnak. A fák lombjai zöldbe öltöznek, Madarak dalolnak a reggeli fényben, A szél halkan susog, szabadon száll, És a tavasz illata betölti a teret. Egy új kezdet, egy új remény, A természet ébredése boldogságot hoz, Légy részese ennek a csodának, És hagyd, hogy a tavasz szívedbe költözzön.', () => {
    console.log('fájl megírva');
  });

  fs.readFile('./versek/vers.txt', (err, data) => {
    if (err) {
      console.log(err);
    }  
    console.log(data.toString());
  });
