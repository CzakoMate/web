function getNumberFromString(s){
    let eredm;
for(let i=0;i<s.length;i++)
{
    if(!(Number(s[i])==isNaN &&(Number(s[i])==undefined)))
    {
        eredm+=s[i];
    }
}
return eredm;
}
console.log("----- 1. feladat -----");
console.log(getNumberFromString("1"), 1);
console.log(getNumberFromString("123"), 123);
console.log(getNumberFromString("this is number: 7"), 7);

function mineLocation(field){
    // kód helye
    let eredmArr=new Array;
    for(let i=0;i<field.length;i++)
    {
        for(let j=0;j<field.length;j++)
        {
            if(field[i][j]==1)
            {
                eredmArr.push[i];
                eredmArr.push[j];
                break;
            }
        }
    }
    return eredmArr;
}

console.log("----- 2. feladat -----");
console.log(mineLocation([ [1, 0], [0, 0] ]), [0, 0]);
console.log(mineLocation([ [1, 0, 0], [0, 0, 0], [0, 0, 0] ]), [0, 0]);
console.log(mineLocation([ [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 1, 0], [0, 0, 0, 0] ]), [2, 2]);

function pairs(ar){
    // kód helye
    let eredm3;
    for(let i=1;i<=ar.length;i++)
    {
        if((ar[i-1]+1)==ar[i])
        {
            eredm3++;
        }
    }
    return eredm3;
}

console.log("----- 3. feladat -----");
console.log(pairs([1,2,5,8,-4,-3,7,6,5]),3);
console.log(pairs([21, 20, 22, 40, 39, -56, 30, -55, 95, 94]),2);
console.log(pairs([81, 44, 80, 26, 12, 27, -34, 37, -35]),0);
console.log(pairs([-55, -56, -7, -6, 56, 55, 63, 62]),4);
console.log(pairs([73, 72, 8, 9, 73, 72]),3);