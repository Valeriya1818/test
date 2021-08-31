
function test(nums,target) {

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

test(nums,target);