/* 点卷商店 */

var status = 0;
var z = "#fEffect/ItemEff/1112811/0/0#";//"+z+"//美化
var aaa = "#fEffect/CharacterEff/1003393/2/0#"; //蓝五角星
function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status == 0 && mode == 0) {
        cm.dispose();
        //cm.openNpc(2490002,700);
        return;
    } 
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (status == 0) {
        var selStr = "#r" + z + z + z + z + z + z + z + z + z + z + z + z + z + z + z + z + z + z + z + "\r\n\r\n#e#d　　　　　　　  　珍品豪华点卷商铺\r\n" + "　#L0#" + aaa + "#r帽子" + aaa + "#l" + " #L1#" + aaa + "衣服" + aaa + "#l" + " #L2#" + aaa + "裤裙" + aaa + "#l" + " #L3#" + aaa + "武器" + aaa + "#l\r\n" + "　#L4#" + aaa + "#r套装" + aaa + "#l" + " #L5#" + aaa + "戒指" + aaa + "#l" + " #L6#" + aaa + "效果" + aaa + "#l" + " #L7#" + aaa + "披风" + aaa + "#l\r\n" + "　#L8#" + aaa + "#r道具" + aaa + "#l" + " #L9#" + aaa + "卷轴" + aaa + "#l" + " #L11#" + aaa + "椅子" + aaa + "#l\r\n\r\n\r\n#d#e #L12##i4310066#珍品商铺通用货币 [#r#z4310066##d]#i4310066##l" + z + z + z + z + z + z + z + z + z + z + z + z + z + z + z + z + z + z + z + "";  //\r\n#d#e #L12##i4310066#珍品商铺通用货币 [#r#z4310066##d]#i4310066##l
        cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
            case 0:
                cm.dispose();
                cm.openShop(9201354);
                //cm.openNpc(2490002, 701); //帽子
                break;
            case 1:
                cm.dispose();
                cm.openShop(9201355);
                //cm.openNpc(2490002, 704); //衣服
                break;
            case 2:
                cm.dispose();
                cm.openShop(9201358);
                //cm.openNpc(2490002, 703); //裤裙
                break;
            case 3:
                cm.dispose();
                cm.openShop(9201359);
               // cm.openNpc(2490002, 702); //武器
                break;
            case 4:
                cm.openShop(9201360); //套装
              //  cm.sendOk("#r#e功能待添加!!请谅解", 1033210);
                cm.dispose();
                break;
            case 5:
                cm.dispose();
                cm.openShop(9201361);
                //cm.openNpc(2490002, 705); //戒指
                break;
            case 6:
              cm.openShop(9201362);//效果
              //  cm.sendOk("#r#e功能待添加!!请谅解", 1033210);
                cm.dispose();
                break;
            case 7:
               cm.openShop(9201363);//披风
               // cm.sendOk("#r#e功能待添加!!请谅解", 1033210);
                cm.dispose();
                break;
            case 8: //道具
                cm.dispose();
                //cm.openNpc(2490002, 708); //道具
               cm.sendOk("#r#e功能待添加!!请谅解", 1033210);
                break;
            case 9:
                // cm.openShop(9201365);//卷轴
              cm.sendOk("#r#e功能待添加!!请谅解", 1033210);//卷轴
                cm.dispose();
                break;
            case 10:
                cm.dispose();
                cm.openNpc(2490002, "shanhaipifu"); //皮肤
            // cm.sendOk("#r#e功能待添加!!请谅解", 1033210);
                break;
            case 11:
                cm.dispose();
               cm.openShop(9201364);//椅子
                //cm.sendOk("#r#e功能待添加!!请谅解", 1033210);
                break;
            case 12:
                cm.dispose();
                cm.openNpc(2490002, "zpb"); //珍品币购买
                break;
        }
    } 
}