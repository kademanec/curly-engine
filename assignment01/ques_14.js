// 14. Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)

function getSlopeAngle(s1,s2) {
    return ((s2[1] - s1[1]) / (s2[0] - s1[0])) ;
}
  
console.log(getSlopeAngle([2,2],[6,10]));