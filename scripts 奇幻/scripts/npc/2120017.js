/*
 闪耀点装
 */

var a = 0;
var icon = "#fUI/Basic.img/BtMin2/normal/0#";
var iconEvent = "#fUI/UIToolTip.img/Item/Equip/Star/Star#";
var ttt4 ="#fUI/UIWindow/Quest/icon5/1#";//"+ttt4+"//美化New
var icon2 = "#fEffect/CharacterEff/1082565/2/0#";

var List = Array(
		//福利项目

		Array(iconEvent + " #r死亡之刃#k", 1, 1, 2120017),
		Array(iconEvent + " #r蝴蝶之恋#k", 2, 1, 2120017),
		Array(iconEvent + " #r快乐旋律#k", 3, 1, 2120017),
		Array(iconEvent + " #r可爱巴尼#k", 4, 1, 2120017),
		Array(iconEvent + " #r派对日记#k", 5, 1, 2120017),
		Array(iconEvent + " #r购物狂套#k", 6, 1, 2120017),
        Array(iconEvent + " #r彩糖套装#k", 7, 1, 2120017),
		Array(iconEvent + " #r棒棒糖套#k", 8, 1, 2120017),
		Array(iconEvent + " #r蓝色雪糕#k", 9, 1, 2120017),
		Array(iconEvent + " #r波比魔法#k", 10, 1, 2120017),
		Array(iconEvent + " #r血腥套装#k", 11, 1, 2120017),
		Array(iconEvent + " #r夏日海洋#k", 12, 1, 2120017),
		Array(iconEvent + " #r明星熊仔#k", 13, 1, 2120017),
		Array(iconEvent + " #r蜜蜂套装#k", 14, 1, 2120017),
        Array(iconEvent + " #r高尔夫套#k", 15, 1, 2120017),
		Array(iconEvent + " #r阿拉丁套#k", 16, 1, 2120017),
		Array(iconEvent + " #r黑暗光芒#k", 17, 1, 2120017),
		Array(iconEvent + " #r蝴蝶套装#k", 18, 1, 2120017),
		Array(iconEvent + " #r巧克力套#k", 19, 1, 2120017),
		Array(iconEvent + " #r凉爽夏日#k", 20, 1, 2120017),
		Array(iconEvent + " #r女仆执事#k", 21, 1, 2120017),
		Array(iconEvent + " #r露西亚套#k", 22, 1, 2120017)
		
		
		//Array(icon2+"#b时装觉醒"+icon2, 0, 2, 9000069),
		//Array(icon2+"#d飞升洗髓"+icon2, 1, 2, 9000174),
		 //Array(icon2+"#b武器破功"+icon2, 1000, 2),
		//Array(icon2+"#b蜡笔潜能"+icon2, 1001, 2)
		//Array(iconEvent + " #r暖男女神#k", 777, 1, 9310144)
)
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
            for (var i = 0; i < 5; i++) {
                ListFor(i);
            }
			
            cm.sendSimple(text)
        } else if (a == 1) {
            var mode_ = List[selection][1];
            cm.dispose();
			var npcid = 2122217;
			if (List[selection][3] != null)
				npcid = List[selection][3];
            cm.openNpc(npcid, mode_);
        }//a
    }//mode
}//f


function ListFor(type) {
    switch (type) {
        case 1://便民服务
            text += "#e#d\t\t\t   "+icon2+"  闪耀点装  "+ icon2 +"#n#k\r\n";
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
