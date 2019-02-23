   //-----------------//
  //　Careless 制作  //
 // qq 50009219     //
//-----------------//
var status = 0;
var random = java.lang.Math.floor(Math.random() * 4);
var a = "#fEffect/CharacterEff/1082565/0/0#";  //饼干兔子
var b = "#fEffect/CharacterEff/1112904/0/0#"; //彩色星星
var c = "#fEffect/CharacterEff/1003271/0/0#";  //红色心心
var d = "#fEffect/CharacterEff/1112946/4/1#";  //钻石
var e = "#fEffect/CharacterEff/1082229/0/0#";  //红心
var f = "#fUI/Basic/LevelNo/0#"; //[1]+1
var j = "#fUI/Basic/LevelNo/1#"; //[1]+1
var h = "#fUI/Basic/LevelNo/2#"; //[1]+1
var i1 = "#fUI/Basic/LevelNo/3#"; //[1]+1
var g = "#fUI/Basic/LevelNo/4#"; //[1]+1
var k = "#fUI/Basic/LevelNo/5#"; //[1]+1
var l1 = "#fUI/Basic/LevelNo/6#"; //[1]+1
var xbydn = "";
function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (cm.getEventCount("西班牙斗牛") == 0) {
        xbydn = "#d0#k";
    } else {
        xbydn = "#r" + cm.getEventCount("西班牙斗牛") + "#k";
    }
    if (status == 0 && mode == 0) {
        cm.dispose();
        //cm.openNpc(2470018);
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (cm.getMapId() == 180000001) {
        cm.sendOk("很遗憾，您因为违反用户守则被禁止游戏活动，如有异议请联系管理员.")
        cm.dispose();
    } else if (status == 0) {
        var selStr = "#e#d斗牛进行时 ∏　气势汹汹的牛牛已经迫不及待冲出围栏\r\n[#r#h ##d]　勇士 快来挑战阻止这头牛牛吧！\r\n";
        selStr += "#L0#" + j + " 进入斗牛殿堂　　　　　　　已驱赶：[#r" + xbydn + "#d]#l\r\n";
        selStr += "#L1#" + h + " 土豪点卷进入　　　　　　　已驱赶：[#r" + xbydn + "#d]#l\r\n";
        selStr += "#L2#" + i1 + " 斗牛丰厚奖品　　　　　　　已驱赶：[#r" + xbydn + "#d]#l\r\n\r\n" + e + e + e + e + e + e + e + e + e + e + e + e + e + e + e + e + e + e + e + e + e + e + e + e + e + e + e + e + e + "\r\n";
        selStr += "#b#L3#" + g + " 什么是激情的斗牛节？#l\r\n";
        selStr += "#b#L4#" + k + " 福袋里都装了些什么？#l\r\n";
        selStr += "#r#L5#" + l1 + " 我想离开这里 牛牛太阔怕了#l#n#k\r\n";

        cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
            case 0://进入斗牛
                cm.dispose();
                cm.openNpc(9390474, "doun1");
                break;
            case 1://点卷进入斗牛
                cm.dispose();
                cm.sendOk("#e#d尊敬的玩家 [ #h # ]\r\n\r\n#r#L8#确认消耗点卷进入[ 斗牛挑战殿堂 ]#l#k#n");
                break;
            case 2://丰厚奖品
                cm.dispose();
                cm.openNpc(9390474, "doun2");
                
                break
            case 3://什么是斗牛节
                cm.sendOk("#d斗牛节是西班牙的传统节日，进入斗牛场后，气势汹汹的牛牛已经迫不及待地要冲出围栏，牛牛非常强大！避开牛牛等时间结束即可通关！当然如果您有实力，可以直接消灭牛牛通关，不过历史上消灭过牛牛的人微乎其微！！");
                status = -1;
                break;
            case 4://福袋里的奖品
                cm.sendOk("#i2450078##i2020047##i2431515##i2431514##i2431516##i2003566##i2003568##i2450023##i2450021##i2049018##i2049005##i2101131##i2340000##i2049119##i2049129##i2046054##i2046055##i2046056##i2046057##i2046058##i2046059##i2046139##i2046393##i2046394##i2046395##i2046396##i2046511##i2046512##i2046513##i20465142048043##i2048044##i2046913##i2046914##i2046173##i2046577##i2046766##i2046765##i2046764##i2046763##i2046580##i2046579##i2046578##i1112915##i4001473##i2431798##i2430072##i2430056##i2430080#");
                status = -1;
                break;
            case 5://离开地图
                cm.dispose();
                cm.warp(910000000, 0);
                cm.sendOk("#b您已退出斗牛场！等你强大了 我们很期待你回归！！");
                break;
        }
    } 
}