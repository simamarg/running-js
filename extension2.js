// Extension 2 - Find the missing number in the following shuffled integer array of 1 to 200.
// Assume you get the array below as input and you need to print the missing number. Please propose two solutions.
// Team members: Mazi & Sima

var array = [182, 28, 30, 40, 41, 150, 199, 71, 77, 173, 181, 147, 91, 192, 166, 60, 34, 188, 113, 130, 25, 59, 82,
     170, 79, 11, 112, 92, 104, 69, 42, 2, 125, 99, 39, 29, 160, 131, 178, 159, 121, 21, 200, 15, 194, 14, 54, 138, 
     145, 195, 85, 120, 10, 118, 33, 106, 132, 198, 58, 64, 83, 140, 5, 35, 50, 18, 84, 129, 174, 197, 96, 93, 128, 
     13, 16, 187, 9, 80, 27, 153, 23, 102, 52, 158, 4, 97, 65, 143, 110, 7, 86, 176, 87, 149, 98, 165, 66, 139, 155, 
     161, 6, 74, 196, 48, 144, 185, 88, 177, 68, 72, 116, 37, 142, 127, 180, 154, 61, 141, 191, 63, 136, 22, 32, 186, 
     49, 156, 103, 168, 109, 70, 115, 183, 111, 44, 90, 12, 123, 124, 75, 100, 184, 189, 162, 107, 164, 148, 152, 101, 
     94, 73, 8, 95, 163, 146, 46, 81, 117, 26, 175, 20, 105, 114, 157, 62, 108, 78, 51, 3, 119, 134, 172, 17, 193, 55, 
     126, 169, 135, 179, 45, 89, 47, 151, 43, 171, 19, 36, 167, 67, 56, 76, 24, 57, 38, 122, 53, 1, 137, 31, 133];

function findMissingNums(anArr){
    var missingNums = [];

    for (var currNum = 1; currNum <= 200; currNum++){
        var found = false;
        var countWhile = 0;
        while (!found && countWhile < anArr.length){
            if (currNum === anArr[countWhile]){
                found = true;
            }
            countWhile++;
        }
        if (!found){
            missingNums.push(currNum);
        }
    }
    console.log("missing number solution 1 " + missingNums);
}

function findMissingNumsTake2(anArr){
    var missingNums = [];
    var currArrIndex = 0;
    var modifiedArr = anArr.sort(function(a, b) {return (a - b)});

    for (var i =1; i <= 200; i++){
        if (i !== modifiedArr[currArrIndex]){
            missingNums.push(i);
        }
        else{
            currArrIndex++;
        }
    }
    console.log("missing number solution 2 " + missingNums);
}

findMissingNums(array);
findMissingNumsTake2(array);