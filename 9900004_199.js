/*
 �ű����ܣ������ű�V2��
 */
var a = 0;
var icon = "#fUI/Basic.img/BtMin2/normal/0#";
var iconX = "#fEffect/CharacterEff/1112905/0/1#";
var iconStar = "#fEffect/CharacterEff/1112904/2/1#";
var icon2 = "#fEffect/CharacterEff/1082565/2/0#";
var icon3 = "#fEffect/CharacterEff/1082565/4/0#";
var List = Array(
		
		//У԰����     
		Array(iconStar+"#r#e���ܴ���#n", 0, 1,1530420),
		Array(iconStar+"#r#e���ܷ���#n", 0, 1, 2135017),
		Array(iconStar+"#g#e�����г�#n", 99, 1),
		
		Array(icon3+"#bÿ��ǩ��#k", 7, 2),
        //Array(icon3+"#bÿ������#k", 12, 2), //TODO
        Array(icon3+"#b����ǩ��#k", 502, 2, 9900003), 
		Array(icon3+"#rԪ���һ�#k", 101, 2, 9310144), 
		Array(icon3+"#r�һ����#k", 11, 2, 9900004),
		//Array(icon3+"#b���߽���#k", 608, 2, 9900003),
		
		Array(icon2+"#d�Զ�תְ"+icon2, 4, 3),
		Array(icon2+icon2+icon2+icon2+icon2+icon2+icon2+icon2+icon2, 3, 3, 0),
		Array(icon2+"#d����̳�#k"+icon2,0, 3, 3000021),
	
		Array(icon2+"#dȺ�輼��#k"+icon2, 22, 3),
		Array(icon2+"   #r��ֵ����#k   "+icon2, 8, 3, 9310144),
		Array(icon2+"#dƽ���̳�"+icon2, 0, 3, 1011101),
		
		//Array(icon2+"#d��Ծ���#k"+icon2, 23, 3),
		Array(icon2+"#d��������#k"+icon2, 501, 3),
		Array(icon2+"   #r��ֵ��ַ   "+icon2, 1000, 3, 1),
		//Array(icon2+"#d�������"+icon2, 6, 3, 9310144),
		Array(icon2+"#r���߽���"+icon2,608, 3, 9900003),
		
		Array(icon2+"#dÿ�����"+icon2, 6, 3, 9310144),//TODO
		//Array(icon2+"#d��������"+icon2, 501, 3),//TODO
		Array(icon2+"   #r��������   "+icon2,  17,  3, 9310144),
		//Array(icon2+"#d���ø���"+icon2, 3, 3, 9900004),
		Array(icon2+"#r�ȼ�����"+icon2, 0, 3, 9300011),
		
		
		Array(icon2+"#d��������"+icon2, 500, 3),
		Array(icon2+icon2+icon2+icon2+icon2+icon2+icon2+icon2+icon2, 3, 3, 0),
		Array(icon2+"#d��Ҫ��ǿ"+icon2, 1, 3, 9900004)
);

var text;
//�Ƿ������֣�ģʽ�����

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
			var myRmb = getMyRmb();
			text = "";
            text += "\t#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0# ����Ԫ����#r#e"+myRmb+"#n#k�� #fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0# �������ߣ�#r#e"+cm.getGamePoints()+"#n#k����";
			for (var i = 0; i < 5; i++) {
                ListFor(i);
            }
			text += "\r\n#e#g\t\t  "+icon2+" Chinað�յ�ף����Ϸ��� "+ icon2 +"#n#k\r\n";
            cm.sendSimple(text)
        } else if (a == 1) {
            var mode_ = List[selection][1];
            
			var npcid = 9900003;
			if (List[selection][3] != null)
				npcid = List[selection][3];
			if (npcid == 0) {
				a=-1;
				cm.sendSimple("#r#e��Ӵ,���ᣬ��㵽�˼������ˡ�");
			} else if (npcid == 1) {
				cm.dispose();
				cm.openWeb("http://my1.libaopay.com/buy/?wid=62259");
			} else {
				cm.dispose();
            	cm.openNpc(npcid, mode_);
			}
		}//a
    }//mode
}//f


function ListFor(type) {
    switch (type) {
        case 1://��Ϸ��԰
            text += "\r\n"+iconX+iconX+iconX+iconX+iconX+iconX+iconX+iconX+iconX+iconX+iconX+iconX+iconX+iconX+iconX+iconX+iconX+iconX+iconX+iconX+iconX+iconX+iconX+iconX+iconX+iconX+iconX+iconX+iconX+"#k";
            break;
		case 2:
			text+=  "#n";
			break;
		case 3:
			text+=  "#n";
			break;
    }
    var x = 0;
    for (var i = 0; i < List.length; i++) {
        if (List[i][2] == type) {
			if (List[i][2]==1) 
				text+="  ";
			if (List[i][2]==2)
				y = 3;
			else 
				y = 2;
			if (x==1 && List[i][2]>2) {
				text+=" ";
			}
            if (x == y) {
                text += "#L" + i + "#" + List[i][0] + "#l\r\n";
                x = 0;
            } else {
                text += "#L" + i + "#" + List[i][0] + "#l";
                x++;
            }
			if (x==1 && List[i][2]>2) {
				text+=" ";
			}
        }
    }
	//text+="#e\r\n";
}

function getMyRmb() {
	var myRmb;
	var conn = cm.getConnection();
	var sql = "select rmb from accounts where id = ?;";
	var pstmt = conn.prepareStatement(sql);
	pstmt.setString(1, cm.getPlayer().getAccountID());
	var myRmbSql = pstmt.executeQuery();
	if (myRmbSql.next()) {
		myRmb = myRmbSql.getString("rmb");
	} else {
		myRmb = 0;
	}
	myRmbSql.close();
	pstmt.close();
	return myRmb;
}