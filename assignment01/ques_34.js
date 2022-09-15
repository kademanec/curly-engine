// 34. Linear equation is calculated as follows: ax + by + c = 0. 
// Write a function which calculates value of a linear equation, solveLinEquation.

function solution(a, b, n)
{
    for (let i = 0; i * a <= n; i++)
    {
        if ((n - (i * a)) % b == 0)
        {
            console.log("x = " + i +
                               ", y = " +
                               (n - (i * a)) / b);
               
            return ;
        }
    }
}


let a = 2, b = 3, n = 7;
solution(a, b, n);