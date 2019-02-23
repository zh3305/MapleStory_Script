/* Joyce
	Event NPC
*/

var status = -1;
var maps = Array(
    910001000, //隐藏地图 - 专业技术村庄&lt;匠人街>
    230000000, //水下世界 - 水下世界
    260000000, //火焰之路 - 阿里安特
    101000000, //魔法密林 - 魔法密林
    211000000, //神秘岛 - 冰峰雪域
    120030000, //黄金海滩 - 海边瓜棚
    130000200, //女皇之路 - 圣地岔路
    100000000, //射手村 - 射手村
    103000000, //废弃都市 - 废弃都市
    222000000, //时间静止之湖 - 童话村
    240000000, //神木村 - 神木村
    104000000, //明珠港 - 明珠港
    220000000, //玩具城 - 玩具城
    802000101, //逆奥之城 - 卡姆那 （内部）
    120000000, //诺特勒斯 - 诺特勒斯码头
    221000000, //时间静止之湖 - 地球防御本部
    200000000, //神秘岛 - 天空之城
    102000000, //勇士部落 - 勇士部落
    300000000, //艾琳森林 - 阿尔泰营地
    801000000, //昭和村 - 昭和村
    540000000, //新加坡 - 中心商务区
    541000000, //新加坡 - 驳船码头城
    250000000, //武陵 - 武陵
    251000000, //百草堂 - 百草堂
    551000000, //马来西亚 - 甘榜村
    550000000, //马来西亚 - 吉隆大都市 
    261000000, //莎翁小镇 - 玛加提亚
    541020000, //新加坡 - 乌鲁城入口
    270000000, //时间神殿 - 三个门
    682000000, //隐藏地图 - 闹鬼宅邸外部
    140000000, //冰雪之岛 - 里恩
    970010000, //隐藏地图 - 枫树山丘
    103040000, //废都广场 - 废都广场大厅
    555000000, //M我 - 白色圣诞山丘
    310000000, //黑色之翼领地 - 埃德尔斯坦
    200100000, //天空中的克里塞 - 克里塞入口
    211060000, //狮子王之城 - 沉寂原野
    310040300, //干路 - 岩石路
    701000000);//上海外滩
var pqMaps = Array(
    101020100,
    102030000,
    102030400,
    551000200,
    600020300,
    240020400,
    240030000,
    541020000,
    541020200,
    541020500,
    220060000,
    240040510,
    541000300, //新加坡 - 神秘通道 3 等级：85-100
    220050300, //玩具城 - 时间通道
    229000020, //闹鬼宅邸 - 客房2
    230040200, //水下世界 - 危海峡谷1
    541010010, //新加坡 - 幽灵船 2
    551030100, //马来西亚 - 阴森世界入口
    240040500, //神木村 - 龙之巢穴入口
    800020110, //江戶村 - 林野的松林
    105030500, //被诅咒的寺院 - 禁忌祭坛
    102040200, //遗迹发掘地 - 遗迹发掘团营地
    105100100, //蝙蝠怪神殿 - 寺院地下
    211041100, //死亡森林
    270030500); //忘却之路5

var selectedMap = -1;
var selectedArea = -1;


var dsa = "";

var mmd = "";


function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status >= 2 || status == 0) {
            cm.dispose();
            return;
        }
        status--;
        cm.dispose();
    }

    if (status == 0) {

        mmd = "#r ┈┈┈━═☆#i4251202##r   快捷传送   #i4251202# #r☆═━┈┈┈ \r\n\r\n";

       dsa += "#r ┈┈┈━═☆#i4251202##r   快捷传送   #i4251202# #r☆═━┈┈┈ \r\n\r\n#r请选择您需要的传送服务:\r\n#b#L0#城镇传送#l\r\n#L1#特殊传送#l\r\n#L2#次元传送#l#k";
       var name = cm.getVipname();
       var dsas = dsa;

        if (cm.getVip() > 0 || cm.getChar().getAccountID()==1) {

               dsa += "\r\n#L4#VIP网吧地图#l"; //\r\n#L3#网吧地图#l

       }

            dsas += "\r\n\#r#L10#传送到练级圣地---怪物公园#l\r\n  \r\n";

            cm.sendSimple(dsas); //\r\n#L3#网吧地图#l
       




    } else if (status == 1) {
        var selStr = "请选择您的目的地: #b";
        if (selection == 0) {
            for (var i = 0; i < maps.length; i++) {
                selStr += "\r\n#L" + i + "##m" + maps[i] + "# #l";
            }
      } else if (selection == 1) {
            for (var i = 0; i < pqMaps.length; i++) {
                selStr += "\r\n#L" + i + "##m" + pqMaps[i] + "# #l";
            }
        } else if (selection == 2) {
            cm.dispose();
            cm.openNpc(9010022);
            return;
        } else if (selection == 3) {
            cm.dispose();
            cm.openNpc(9070007);
            return;
        } else if (selection == 4) {
            for (var i = 0; i < pqMaps.length; i++) {
                selStr += "\r\n#L" + i + "##m" + pqMaps[i] + "# #l";
            }
        } else if (selection == 10) {
           cm.warp(951000000);

           selStr = mmd + "我已经将您传送到了怪物公园！";
           cm.dispose();
        }


        selectedArea = selection;
        cm.sendSimple(selStr);
    } else if (status == 2) {
        cm.sendYesNo(mmd + "#d您确定要移动到   #r#m" + (selectedArea == 0 ? maps[selection] : pqMaps[selection]) + "#  #d吗？");
        selectedMap = selection;
    } else if (status == 3) {
        if (selectedMap >= 0) {
            cm.warp(selectedArea == 0 ? maps[selectedMap] : pqMaps[selectedMap], 0);
        }
        cm.dispose();
    } else if (status == 6) {
        if (selection == 1) {
            if (cm.getPlayer().getSkillLevel(8) > 0 || cm.getPlayer().getSkillLevel(10000018) > 0 || cm.getPlayer().getSkillLevel(20000024) > 0 || cm.getPlayer().getSkillLevel(20011024) > 0) {
                cm.sendOk("您已经学习过这个技能。");
            } else {
                if (cm.getJob() == 2001 || (cm.getJob() >= 2200 && cm.getJob() <= 2218)) {
                    cm.teachSkill(20011024, 1, 0); // 龙神 - 群宠
                } else if (cm.getJob() == 2000 || (cm.getJob() >= 2100 && cm.getJob() <= 2112)) {
                    cm.teachSkill(20000024, 1, 0); // 战神 - 群宠
                } else if (cm.getJob() >= 1000 && cm.getJob() <= 1512) {
                    cm.teachSkill(10000018, 1, 0); // 骑士团 - 群宠
                } else {
                    cm.teachSkill(8, 1, 0); // 冒险家 - 群宠
                }
                cm.sendOk("恭喜您学习技能成功。");
            }
            cm.dispose();
        } else if (selection == 4) {
            if (cm.getPlayer().getSkillLevel(80001000) > 0) {
                cm.sendOk("您已经学习过这个技能。");
            } else {
                if (cm.getJob() >= 3000) {
                    cm.sendOk("对不起！该职业暂时无法学习这个技能。");
                    cm.dispose();
                    return;
                }
                cm.teachSkill(80001000 ,  1, 1);
                cm.sendOk("恭喜您学习技能成功。");
            }
            cm.dispose();
        } else if (selection == 5) {
            cm.openShop(2060003);
            cm.dispose();
        }
    }
}