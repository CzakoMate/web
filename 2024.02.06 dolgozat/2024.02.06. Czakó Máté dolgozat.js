// All or Nothing
function possiblyPerfect(key,answers) {
    let szamlalo=0;
    for(let i=0;i<key.length;i++)
    {
        if(key[i]===answers[i]||key[i]==='_')
        {
            szamlalo++;
        }
    }
    if(szamlalo==key.length)
    {
        return true;
    }
    else{
        return false;
    }
}

console.log(possiblyPerfect([..."A_C_B"],[..."ADCEB"]) + " >> true ");
console.log( possiblyPerfect([..."B_B"],[..."BDC"]) + " >> false ");
console.log( possiblyPerfect([..."T_FFF"],[..."FFTTT"]) + " >> true ");
console.log( possiblyPerfect([..."BA__"],[..."BACC"]) + " >> true ");
console.log( possiblyPerfect([..."ABA_"],[..."BACC"]) + " >> true ");
console.log( possiblyPerfect([..."ABC_"],[..."BACC"]) + " >> false ");
console.log( possiblyPerfect([..."B_"],[..."CA"]) + " >> true ");
console.log( possiblyPerfect([..."BA"],[..."CA"]) + " >> false ");
console.log( possiblyPerfect([..."B"],[..."B"]) + " >> true ");
console.log( possiblyPerfect([..."_T__"],[..."TFFF"]) + " >> true ");
console.log( possiblyPerfect([..."_T__"],[..."TTFT"]) + " >> true ");
console.log( possiblyPerfect([..."_TTT"],[..."TTFT"]) + " >> false ");
console.log( possiblyPerfect([..."_TTT"],[..."TTTT"]) + " >> true ");
console.log( possiblyPerfect([..."_TTT"],[..."FFFF"]) + " >> true ");
console.log( possiblyPerfect([..."____"],[..."FFFF"]) + " >> true ");



// Mean vs. Median
function meanVsMedian(numbers) {
    let avg=0;
    for(let i=0;i<numbers.length;i++)
    {
        avg+=numbers[i];
    }
    avg/=numbers.length;
    let median;
    let index=Math.floor(numbers.length/2-1);
    median=numbers[index];
    if(avg>median)
    {
        return 'mean';
    }
    else if(median>avg)
    {
        return 'median'
    }
    else{
        return 'same'
    }
}

console.log(meanVsMedian([1, 1, 1]), ' >> same');
console.log(meanVsMedian([1, 2, 37]), ' >> mean');
console.log(meanVsMedian([7, 14, -70]), ' >> median');



// Swap the head and the tail
function swapHeadAndTail(arr) {
    
    if(arr.length%2==0 && arr.length!==0)
    {
        let masolat=arr;
        let middle=arr.length/2-1
        let head=[];
        head=masolat.slice(0,arr.length/2);
        let tail=[];
        tail=masolat.slice(middle,arr.length/2);
        let swap=[];
        for(let i=0;i<tail.length;i++)
        {
            swap[i]=tail[i];
        }
        for(let i=middle+1;i<arr.length;i++)
        {
            swap[i]=head[i];
        }
        return swap;
    }
    else if(arr.length%2==1)
    {
        let masolat=arr;
        let middle=(arr.length-1)/2
        let head=[];
        head=masolat.slice((0,arr.length-1)/2);
        let tail=[];
        tail=masolat.slice(middle,(arr.length-1)/2);
        let swap=[];
        for(let i=0;i<tail.length;i++)
        {
            swap[i]=tail[i];
        }
        masolat[middle]=arr.middle;
        for(let i=middle+1;i<arr.length;i++)
        {
            swap[i]=head[i];
        }
        return swap;
    }
}

console.log(swapHeadAndTail([ 1, 2, 3, 4, 5 ]), [ 4, 5, 3, 1, 2 ]);
console.log(swapHeadAndTail([ -1, 2 ]), [ 2, -1 ]);
console.log(swapHeadAndTail([ 1, 2, -3, 4, 5, 6, -7, 8 ]), [ 5, 6, -7, 8, 1, 2, -3, 4 ]);