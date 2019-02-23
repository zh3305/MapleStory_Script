var itemid=0;
var sl=0;
var kkk ="#fEffect/CharacterEff/1051296/1/0#";
var eff = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var eff2 = "#fUI/UIWindowBT.img/WorldMap/BtNext/mouseOver/0#";
var eff1 = "#fEffect/CharacterEff/1112905/0/1#";
var eff4 = "#fUI/Basic/BtHide3/mouseOver/0#";
function start() 
{
	status = -1;
	action(1, 0, 0);
	
}
function action(mode, type, selection) 
{
	if (mode == 1) 
		{
			status++
		}
	else
		{
			cm.dispose();
			return;
		}
	if (status == 0)
		{
			panduan();
			cm.sendGetNumber("" + eff1+ "" + eff1+ "" + eff1+ "" + eff1+ "" + eff1+ "" + eff1+ "" + eff1+ "" + eff1+ "" + eff1+ "#e#r 兔花花刷道具NPC " + eff1+ "" + eff1+ "" + eff1+ "" + eff1+ "" + eff1+ "" + eff1+ "" + eff1+ "" + eff1+ "" + eff1+ "\r\n#b亲爱的#r#h ##b您好,我可以为你刷取任何道具#r[任何]\r\n\r\n         #e#d请输入物品代码",0,1000000,5999999)
		}
	else if (status==1)
		{
			itemid=selection;
			cm.sendGetNumber("#i"+itemid+"##t"+itemid+"#\r\n#r数量小于1000即获取,#k#r等#r#k\r\n输入数量:#k",1,1,1000)
		}
	else if (status==2)
		{
			sl=selection
			if(sl==100 && cm.haveItem(itemid))
				{
					sl=sl*2088
					cm.sendYesNo("确定要丢弃所有#i"+itemid+"##t"+itemid+"#?")
				}
				else
				{
					cm.gainItem(itemid,sl)
                                        //cm.setLock(toDrop); //锁定装备
					cm.dispose();
				}
		}
	else if(status==3)
		{
	cm.gainItem(itemid,-sl)
	cm.dispose();
		}

}

function panduan()
{
	if(cm.haveItem(2430693)==false)
		{
			cm.gainItem(2430693,1);
		}
	if(cm.haveItem(2430267)==false)
		{
			cm.gainItem(2430267,1);
		}
	if(cm.haveItem(2430481)==false)
		{
			cm.gainItem(2430481,1);
		}

}