function test2(num) {
    var lookup = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1},roman = '',i;
    for ( i in lookup ) {
        while ( num >= lookup[i] ) {
            roman += i;
            num -= lookup[i];
        }
    }
    console.log(roman);
}

function test1(nums,target) {

    let result = [];

    for (let z=0;nums.length>z;z++) {

        for (let i=0;nums.length>i;i++) {

            if (z!==i && target === nums[z]+nums[i]) {

                result = [z,i];

            }
        }

    }


    console.log(result);
}

let nums = [3,2,6,8,10],
    target = 12;

console.log('TEST-1. \'nums\' is '+JSON.stringify(nums)+' and \'target\' is '+target+', result will be: ');
test1(nums,target);
console.log('TEST-2. \'target\' is '+target+', result will be: ');
test2(12);