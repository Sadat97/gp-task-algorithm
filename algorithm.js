var dp = [];
var b = [];
var up = [];
var arr = [];
var N = 0,
  T = 0;
var ans = [];
function solve(i, n, s) {
  if (n < 0 || s < 0) return 0;
  if (!n) return !s;
  if (i == arr.length) return 0;

  if (dp[i][n][s] != -1) return dp[i][n][s];

  for (var j = 0; j <= up[i]; j++) {
    if (solve(i + 1, n - j, s - j * arr[i])) {
      b[i][n][s] = j;
      dp[i][n][s] = 1;
      return dp[i][n][s];
    }
  }
  dp[i][n][s] = 0;
  return dp[i][n][s];
}

function print(i, n, s) {
  if (!n) return;

  for (var j = 0; j < b[i][n][s]; j++) ans.push(arr[i]);

  print(i + 1, n - b[i][n][s], s - b[i][n][s] * arr[i]);
}
module.exports = {
  RUN: function(m, n, t) {
    N = n;
    arr = m;
    T = t;
    for (var i = 0; i <= N; i++) {
      dp[i] = [];
      b[i] = [];
      for (var j = 0; j <= N; j++) {
        dp[i][j] = [];
        b[i][j] = [];
        for (var k = 0; k <= 10000; k++) {
          dp[i][j][k] = -1;
          b[i][j][k] = 0;
        }
      }
    }

    for (var i = 0; i < arr.length; i++)
      up[i] = arr[i] > 0 ? (N * T) / arr[i] : N;
    
        var result = ans;
        ans = [];
    if (solve(0, N, N * T)) {
      print(0, N, N * T);
      return result;
    } else return [-1];
        
  }
};
//Write the test case
//RUN(/The array   /,/ the size of the resulted array  /,the target    )
//eg.RUN([1,2,3],6,2)
// console.log(module.exports.RUN([1,2,4,5], 3, 3));
