var accuracy = 0;
var fakeMobKillCount = 0;
var score = 0;

function act() {
    var info = rm.getInfoQuest(58507).split(";");
    for (var i = 0; i < info.length; i++) {
        var q = info[i].split("=");
        if (q[0] == "accuracy") {
            accuracy = parseInt(q[1]);
        } else if (q[0] == "fakeMobKillCount") {
            fakeMobKillCount = parseInt(q[1]) + 1;
        } else if (q[0] == "score") {
            score = parseInt(q[1]) + 100;
        }
    }
    rm.updateInfoQuest(58507, "accuracy=" + accuracy + ";fakeMobKillCount=" + fakeMobKillCount + ";score=" + score);
    rm.topMsg("模型巨人" + fakeMobKillCount + "/擊破50個！");
    rm.playerMessage("打倒模型巨人！");
}