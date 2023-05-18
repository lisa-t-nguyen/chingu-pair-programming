// Alice and Bob each created one problem for HackerRank. A reviewer rates the two challenges, 
// awarding points on a scale from 1 to 100 for three categories: problem clarity, originality, 
// and difficulty.

// The rating for Alice's challenge is the triplet a = (a[0], a[1], a[2]), and the rating for Bob's 
// challenge is the triplet b = (b[0], b[1], b[2]).

// The task is to find their comparison points by comparing 
// a[0] with b[0], a[1] with b[1], and a[2] with b[2].

//Pseudocode
    //Declare 2 different arrays to compare
    //Create conditional statements with different point attributions depending if conditions are met or not
    //Loop through each array

    function compareTriplets(a, b) {
        let array = [];
        let alice = 0;
        let bob = 0;
        for (let i = 0; i < a.length; i++) {
            for (let n = 0; n < b.length; n++) {
                if (a[i] > b[n]) {
                    alice += 1;
                } if (a[i] < b[n]) {
                    bob += 1;
                } if (a[i] = b[n]) {
                    alice += 0;
                    bob += 0;
                }
            }
            array.push(alice);
            array.push(bob);
        }
        return array;
    }