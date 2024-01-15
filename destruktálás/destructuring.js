//1. feladat
function Feladat1(){
let car = ['Ford', 'Mustang', 2022, 'blue'];
let [brand, model, year, color]=car;
console.log("1.feladat")
console.log("A car tömb adatai:")
console.log(brand);
console.log(model);
console.log(year);
console.log(color);
let ki="lefut";
document.getElementById("ki1").innerHTML=ki;
}

//Kérdés: Milyen változóneveket lehet használni tömb esetén destrukturálás esetén? A változók sorrendje fontos-e?
//Válasz: A változónevek szabadon választhatóak, de a sorrendjük fontos, mert a tömb elemeinek sorrendje alapján történik a deklarálás.

//2. feladat
function Feladat2(){
    let book = {
        title: 'JavaScript: The Good Parts',
        author: 'Douglas Crockford',
        publicationYear: 2008,
        language: 'English'
        };
    let {title, author, publicationYear, language}=book;
    console.log("2.feladat")
    console.log("A book objektum adatai:")
    console.log(title);
    console.log(author);
    console.log(publicationYear);
    console.log(language);
    let ki="lefut";
    document.getElementById("ki2").innerHTML=ki;
}

//Kérdés: Milyen változóneveket lehet használni objektum esetén destrukturálás esetén? A változók sorrendje fontos-e
//Válasz: A változónevek szabadon választhatóak, de a sorrendjük fontos, mert a tömb elemeinek sorrendje alapján történik a deklarálás.

//3. feladat
function Feladat3(){
    
    function printStudentInfo(){
    console.log("3.feladat")
    console.log("A printStudenInfo függvény studentobjektummal feltölött adatai:")
    let {name, age, grade, subjects}=student;
    console.log(name);
    console.log(age);
    console.log(grade);
    console.log("A subjects tömb adatai:")
    let [Math, English, History]=subjects;
    console.log(Math);
    console.log(English);
    console.log(History);
    }
    let student = {
        name: 'John Doe',
        age: 20,
        grade: 'B',
        subjects: ['Math', 'English', 'History']
        };
    printStudentInfo(student);
    let ki="lefut";
    document.getElementById("ki3").innerHTML=ki;
}
