/* Cygnus revamp
 Noblesse tutorial
 Kimu
 Made by Daenerys
 */
var status = -1;

function start(mode, type, selection) {
    status++;
    if (status == 0) {
        qm.sendNext("這是歡迎新進騎士團的地方。嗯…在哪裡呢？我要介紹一下這位。修練教官奇酷在哪呢？ 這裡人真多，很難找到他…");
    } else if (status == 1) {
        qm.sendNext("請看到畫面左上端。按下小地圖UI右邊的NPC鈕，就會標示出所在地圖上的NPC名稱。請於當中選取並點擊奇酷。那麼就會於地圖中以箭頭標示出奇酷的位置。\r\n找到奇酷並與他打招呼吧。");
    } else if (status == 2) {
        qm.environmentChange("Aran/balloon", 5);
        qm.forceStartQuest();
        qm.dispose();
    }
}
function end(mode, type, selection) {
    if (mode == -1) {
        qm.dispose();
    } else {
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
            qm.sendNext("I wish they'd start sending over some decent sized fighters, but I guess you'll work.");
            qm.dispose();
        }
    }
}