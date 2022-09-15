// 15. Calculate the slope, x-intercept and y-intercept of y = 2x -2

function getSlopeAngle(s1,s2) {
   let s= ((s2[1] - s1[1]) / (s2[0] - s1[0])) ;
   let b = s1[1] - s * s1[0]
   return b
}
  
console.log(getSlopeAngle([2,2],[6,10]));
                        // s1[0] s1[1] s2[0] s2[1]
                        // x1     y1    x2   y2