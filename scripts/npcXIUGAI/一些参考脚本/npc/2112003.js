
var status = 0;

var fsName = Array(
"",
"圣人",
"仙人",
"神王",
"终结者"
)

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status == 0 && mode == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (status == 0) {
	var f = getFSdj(cm);
	var selStr = "尊敬的" + ((f==0)?"玩家":"#r"+fsName[f]+":#k") + "#r#h ##k您好,请选择您所需要的功能\r\n" + "#d转生次数：#r" + getZScs(cm) + "\r\n#L1##d我要转生#L2##g我要飞升#L3##k转生及飞升说明";
	cm.sendSimple(selStr);
    } else if(status == 1) {
	if (selection==3){
		cm.sendOk("#r[注意事项]\r\n#d转生后您的等级将为降为1级，并且获取一个#z04032515#\r\n转生需要角色达到200级，骑士团和新手需要角色达到180级\r\n飞升等级分为：圣人》仙人》神王》终结者\r\n\r\n#r[飞升福利]\r\n#k转生前：无任何福利\r\n#d转生后：属性点=转生次数*100点\r\n#r圣人：全属性=5000  属性点=转生次数*20点\r\n仙人：全属性=10000  属性点=转生次数*30点\r\n神王：全属性=15000  属性点=转生次数*50点\r\n终结者：全属性=20000  属性点=转生次数*75点\r\n\r\n[飞升要求]\r\n#k圣人：角色达到50转\r\n仙人：角色达到100转和一个#z04032517##v04032517#\r\n神王：角色达到200转和一个#z04032518##v04032518#\r\n终结者：角色达到400转和一个#z04032519##v04032519#");
		cm.dispose();
	} else {
		cm.dispose();
		cm.openNpc(2112003,selection);
	}
    }
}

//转生次数
function getZScs(cm){
return (cm.itemQuantity(4032515) + cm.itemQuantity(4032516) * 100 + cm.itemQuantity(4032517) * 50 + cm.itemQuantity(4032518) * 100 + cm.itemQuantity(4032519) * 200 + cm.itemQuantity(4032520) * 400);
}

//飞升等级
function getFSdj(cm){
	var f_p = 4032516;
	for (var i = 4;i >= 1;i--){
		if (cm.itemQuantity(f_p + i)!=0) return i;
	}
	return 0;
}
