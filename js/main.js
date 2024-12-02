$(function () {
  init();
  console.log("Main Init Called");
});

function InitFileRankBrd() {
  var index = 0;
  var file = FILES.FILE_A;
  var rank = RANKS.RANK_1;
  var sq = SQUARES.A1;


for (index = 0; index < BRD_SQ_NUM; index++) {
  FILESBrd[index] = SQUARES.OFFBOARD;
  RANKSBrd[index] = SQUARES.OFFBOARD;
}

for (rank = RANKS.RANK_1; rank <= RANKS.RANK_8; ++rank) {
  for (file = FILES.FILE_A; file <= FILES.FILE_H; ++file) {
    sq = FR2SQ(file, rank);
    FILESBrd[sq] = file;
    RANKSBrd[sq] = rank;
  }
}

console.log("FileBrd[0]:" + FILESBrd[0] + "RANKSBrd[0]:" + RANKSBrd[0]); // Corrected here
console.log(
  "FilesBrd[SQUARES.A1]:" +
    FILESBrd[SQUARES.A1] +
    "RANKSBrd[SQUARES.A1]:" + 
    RANKSBrd[SQUARES.A1]
);
console.log(
  "FilesBrd[SQUARES.E8]:" +
    FILESBrd[SQUARES.E8] +
    "RANKSBrd[SQUARES.E8]:" + 
    RANKSBrd[SQUARES.E8]
);
}

function init() {
    console.log("init() called");
    InitFileRankBrd(); 
}
