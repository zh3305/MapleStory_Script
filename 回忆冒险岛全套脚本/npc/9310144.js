/*
 脚本功能：市场管理员
 */

var a = 0;
var icon = "#fUI/Basic.img/BtMin2/normal/0#";
var iconEvent = "#fUI/UIToolTip.img/Item/Equip/Star/Star#";
var ttt4 ="#fUI/UIWindow/Quest/icon5/1#";//"+ttt4+"//美化New
var icon2 = "#fEffect/CharacterEff/1082565/2/0#";

var List = Array(
    //福利项目
    //Array(iconEvent + " #r在线奖励#k", 608, 1, 9900003),
    Array(iconEvent + " #r充值奖励#k", 8, 1, 9310144),
    Array(iconEvent + " #r活动奖励#k", 1, 1, 9310144),
    //Array(iconEvent + " #r新人福利#k", 1, 1, 9201116),
    Array(iconEvent + " #r美食福利#k", 1, 1, 1012102),
    //Array(iconEvent + " #r竞技积分#k", 501, 1),//TODO
    Array(iconEvent + " #r每日签到#k", 7, 1),
    Array(iconEvent + " #r连续签到#k", 502, 1),
    Array(iconEvent + " #r重置副本", 3, 1, 9900004),
    Array(iconEvent + " #r宠物进化#k", 0, 1, 1032102),
    //Array(iconEvent + " #r福利字母#k", 888, 1, 9310144),
    //Array(iconEvent + " #r解锁密码#k", 111, 1),
    //Array(iconEvent + " #r猜拳游戏#k", 300, 1, 9900004),
    Array(iconEvent + " #r尖兵导弹#k", 333, 1, 9310144),
    //Array(iconEvent + " #r在线奖励", 608, 1, 9900003),
    Array(iconEvent+" #r竞技积分#k", 501, 1),//TODO
    Array(iconEvent + " #r物品查询", 100, 1, 9310144),
    Array(iconEvent+" #r银行管理#k", 14, 1),
    Array(iconEvent + " #r购买会员#k", 17, 1, 9310144)
    //Array(iconEvent + " #b超值福袋#k", 666, 2, 9310144)

    //Array(iconEvent + " #d爆率查询#k", 5, 3),
    //Array(iconEvent + " #d物品查询", 100, 3, 9310144)
    //Array(iconEvent + " #d银行管理", 14, 3),

    //Array(iconEvent + " #d装备制作", 24, 3),
    //Array(iconEvent + " #d装备还原", 1111, 3, 9000069),
    //Array(iconEvent + " #d装备分解#k", 503, 3)


    //Array(icon2+"#b时装觉醒"+icon2, 0, 2, 9000069),
    //Array(icon2+"#d飞升洗髓"+icon2, 1, 2, 9000174),
     //Array(icon2+"#b武器破功"+icon2, 1000, 2),
    //Array(icon2+"#b蜡笔潜能"+icon2, 1001, 2)
    //Array(iconEvent + " #r暖男女神#k", 777, 1, 9310144)
)
var isDone = false;
var text;
//是否活动，名字，模式，类别

function start() {
    a = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 1)
            a++;
        else
            a--;
        if (a == -1) {
            cm.dispose();
        } else if (a == 0) {
            text = "";
      if (!isDone && havePower()){
        isDone = true;
        List.push(Array(iconEvent + " #d时装管理#k", 1, 3, 9010017));
      }
            for (var i = 0; i < 5; i++) {
                ListFor(i);
            }

            cm.sendSimple(text)
        } else if (a == 1) {
            var mode_ = List[selection][1];
            cm.dispose();
      var npcid = 9900003;
      if (List[selection][3] != null)
        npcid = List[selection][3];
            cm.openNpc(npcid, mode_);
        }//a
    }//mode
}//f

function havePower() {
  var names = Array(
    "栀七七",
    "管理员小白",
    "管理员回忆",
    "回忆助理02",
    "回忆助理01",
    "回忆助理03"
  );
  for (var key in names) {
    if (names[key]==cm.getPlayer().getName()) {
      return true;
    }
  }
  return false;
}

function ListFor(type) {
    switch (type) {
        case 1://便民服务
            text += "#e#d\t\t\t  "+icon2+" 回忆服务中心 "+ icon2 +"#n#k\r\n";
            break;
    default:
      text+="\r\n";
    }
    var x = 0;
    for (var i = 0; i < List.length; i++) {
        if (List[i][2] == type) {
            if (x == 2) {
        if (List[i+1]!=null && List[i+1][2]!=type)
                  text += "  #L" + i + "#" + List[i][0] + "#l";
        else
          text += "  #L" + i + "#" + List[i][0] + "#l\r\n";
                x = 0;
            } else {
                text += "  #L" + i + "#" + List[i][0] + "#l";
                x++;
            }
        }
    }
}
