//*  Careless游戏脚本 *//
//* 作者：50009219  * //

var status = 0;
var a = "#fEffect/CharacterEff/1114000/1/0#"; //红色六芒星
var b = "#fEffect/CharacterEff/1003271/0/0#";
var c = "#fEffect/CharacterEff/1112905/0/0#"; //篮心
var d = "#fEffect/CharacterEff/1002667/0/0#"; //黄星
var e = "#fEffect/CharacterEff/1003252/1/0#"; //音乐
var g = "#fEffect/CharacterEff/1082565/0/0#"; //饼干兔子
var h = "#fUI/Basic/BtHide3/mouseOver/0#";
var f = "#fEffect/CharacterEff/1112904/2/1#";//彩色五角星

var ca = java.util.Calendar.getInstance();
var year = ca.get(java.util.Calendar.YEAR); //获得年份
var month = ca.get(java.util.Calendar.MONTH) + 1; //获得月份
var day = ca.get(java.util.Calendar.DATE);//获取日
var hour = ca.get(java.util.Calendar.HOUR_OF_DAY); //获得小时
var minute = ca.get(java.util.Calendar.MINUTE);//获得分钟
var second = ca.get(java.util.Calendar.SECOND); //获得秒
var weekday = ca.get(java.util.Calendar.DAY_OF_WEEK); //获得星期
var time = new Date();
var sjr = time.getDay();
var typed = 1;
switch (sjr) {
    case 0:
        var xq = "星期日";
        break;
    case 1:
        var xq = "星期一";
        break;
    case 2:
        var xq = "星期二";
        break;
    case 3:
        var xq = "星期三";
        break;
    case 4:
        var xq = "星期四";
        break;
    case 5:
        var xq = "星期五";
        break;
    case 6:
        var xq = "星期六";
        break;
    default:
}
if (hour > 12) {
    hour -= 12;
    var apm = "下午好";
} else {
    var apm = "上午好";
}
function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status == 0 && mode == 0) {
        //im.sendOk("#e#r　本商铺欢迎您的再次光临!我们竭诚为你服务!!");
        im.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (im.getMapId() == 180000001) {
        im.sendOk("很遗憾，您因为违反用户守则被禁止游戏活动，如有异议请联系管理员.")
        im.dispose();
    } else if (status == 0) {
        var txt = "\r\n#d┏━━━━━━━━━━21 点疯狂档━━━━━━━━━┓#k\r\n\r\n";
        txt += "#d　 布鲁斯的神奇效果 等待你的光临 且参与并使用#k\r\n";
        txt += "#d　 布鲁斯的神奇效果 等待你的光临 且参与并使用#k\r\n";
        txt += "#d　 布鲁斯的神奇效果 等待你的光临 且参与并使用#k\r\n";
        txt += "#r　 布鲁斯的神奇效果 等待你的光临 且参与并使用#k\r\n\r\n";
        txt += "　　　　　　　#L0##r#e" + c + " 强强强强强 " + c  +"#l#k\r\n";
        txt += "#d\r\n\r\n┗━━━━━━━━━━━━━━━━━━━━━━━━━┛#k\r\n\r\n";
        txt += "\t\t　#r更多精彩福利　※　尽在乐游冒险岛\r\n";
        im.sendSimple(txt);
    } else if (status == 1) {
        if (hour ==00 && (minute >= 00&& minute <=60 )) {
            if (selection == 0) {
               if (im.getEventCount("布鲁斯-破攻") < 1) {
                    var Random = Math.floor(Math.random() * 5999999);
                    //if (im.changeLimitBreak(800000+Random)) {
                        im.sendOkS("#e#d恭喜玩家 -破攻完毕\r\n\r\n追加伤害数值：#r" + Random + " #d\r\n当前伤害数值：" + im.getLimitBreak() + "\r\n\r\n　感谢您对乐游冒险岛的大力支持", 2);
                        im.setEventCount("布鲁斯-破攻");
                        im.worldSpouseMessage(0x20, "[ 布鲁斯黑暗效果 ] 玩家 " + im.getChar().getName() + " 使用 随机破攻将武器增加了 " + Random + " 伤害值");
                        im.dispose();
                    }
                } else {
                    im.sendOk("\r\n\r\n#r\t\t不好意思!本活动只可参与一回!请下回光临");
					im.gainItem(2431675,-1);
                    im.dispose();
                }
            } else if (selection == 1) {
                if (im.getEventCount("21点还原福利") >= 1) {
                    im.sendOk("\r\n\r\n#r\t\t不好意思!本活动只可参与一回!请下回光临");
					im.gainItem(2431675,-1);
                    im.dispose();
                    return;
                }
                typed = 2;
                item = im.getInventory(1).getItem(1);
                if (item == null) {
                    im.sendOk("你确认你包裹的第一栏有装备存在？");
                    im.dispose();
                    return;
                }
                if (item.getOwner().indexOf("★") >= 0) {
                    im.sendOk("提升过品级的装备无法还原。");
                    im.dispose();
                    return;
                }
                var text = "21时疯狂档为你的装备进行还原，还原前请注意以下几点：\r\n\r\n#r1.请确认需要还原的装备已经放置在装备栏的第一格\r\n2.还原是个不可逆的操作，无法进行恢复\r\n3.玩家所造成的失误不予以赔偿\r\n\r\n#k#b是否继续？";
                im.sendYesNo(text);
            }
        } else {
            im.sendOk("\r\n\r\n#r\t\t#e活动结束");
            im.dispose();
        }
    } else if (status == 2) {
        if (im.isCash(item.getItemId())) {
            im.sendOk("只有非现金道具才能进行还原");
            im.dispose();
            return;
        }
        var deleteQuantity = item.getQuantity();
        var ii = im.getItemInfo();
        var toDrop = ii.randomizeStats(ii.getEquipById(item.getItemId())).copy(); // 生成一个Equip类
        toDrop.setPotential1(item.getPotential1());
        toDrop.setPotential2(item.getPotential2());
        toDrop.setPotential3(item.getPotential3());
        toDrop.setPotential4(item.getPotential4());
        toDrop.setPotential5(item.getPotential5());
        toDrop.setPotential6(item.getPotential6());
        toDrop.setExpiration(item.getExpiration());
        im.removeSlot(1, 1, deleteQuantity);
        im.addFromDrop(im.getC(), toDrop, false);
        im.sendOk("还原成功了。");
        im.setEventCount("21点还原福利");
        im.worldSpouseMessage(0x20, "[ 21点疯狂档 ] 玩家 " + im.getChar().getName() + " 使用 装备还原 还原了一件神装大家恭喜Ta吧 ");
        im.dispose();
    }
}