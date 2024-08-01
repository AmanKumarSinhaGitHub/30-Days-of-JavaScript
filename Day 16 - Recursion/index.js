// Task 1

// Base case = fact(0) = 1, fact(1) = 1
function fact(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * fact(n - 1);
}

console.log(fact(5)); // 120 : 5X4X3X2X1



/*
                    DRY RUN


                 fact(5) = 120 (answer)
                    /
                   /
                  /
            5 X fact(4) = (5X24) = 120 (return 120)
                    /
                   /
                  /
            4 X fact(3) = (4X6) = 24 (return 24)
                  /
                 /
                /
            3 X fact(2) = (3X2) = 6 (return 6)
                  /
                 /
                /
            2 X fact(1)  = (2X1) = 2 (return 2)
                /
               /
              /
          return (1)
*/






// Task 2

// Base case: fib(0) = 0, fib(1) = 1
// 0 1 1 2 3 5 8 13
// Here 6th fibonacci number is 8

function fib(n) {
    if (n <= 1) {
        return n;
    }
    return fib(n - 1) + fib(n - 2);
}


console.log(fib(6)); // 8



/*                                               DRY RUN 

                                                  fib(6) (answer = 5 + 3 = 8)
                                                    /\
                                                   /  \
                                                  /    \
                                                 /      \
                                                /        \
                                               /          \
                                              /            \
                       (return 3 + 2 = 5)   fib(5)        fib(4)  (return 3)
                                             /\             
                                            /  \
                                           /    \
                                          /      \
                                         /        \
                                        /          \
               (return 2 + 1 = 3)   fib(4)      fib(3)  (return 2)
                                     /\
                                    /  \
                                   /    \
                                  /      \
                                 /        \
                                /          \
         (return 1 + 1 = 2)  fib(3)        fib(2) (return 1)
                              /\
                             /  \
                            /    \
                           /      \
                          /        \
                         /          \
 (return 1 + 0 = 1)   fib(2)       fib(1)  (return 1)
                       /\
                      /  \
                     /    \ 
                    /      \
                   /        \
                  /          \      
               fib(1)      fib(0)   =
                 |            |
                 |            |
                 |            |
             (return 1)    (return 0)
*/


