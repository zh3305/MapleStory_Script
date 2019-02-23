var Petlist = new Array(); //用于存储已装或者说已放出来的宠物对象。为 MaplePet类数据。
var petname;
function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.sendOk("好的。下次再见！");
		cm.dispose();
	} else {
		if (mode == 0) {
			cm.sendOk("好的。下次再见！");
			cm.dispose();
			return;
		}
		if (mode == 1) {
			status++;
		}
		else {
			status--;
		}
		if (status == 0) {					
			cm.sendOk("#r"+cm.mxdmz()+"冒险岛#k,我可以为你提供的是宠物改名.\r\n\r\n#b提示:#k\r\n1.#b修改宠物名字每次消耗1000点修炼点.#k\r\n2.#b修改前请将您的宠物召唤出来#k.#b否则无法修改#k.\r\n3.#b请勿使用非法符号.以及辱骂词语.若违反封号处理.#k");			
		}else if (status == 1){
			for(i = 0; i < 3; i++){
				if(cm.getChar().getPet(i) != null){
					Petlist.push(cm.getChar().getPet(i)); //循环检查角色装备栏三个宠物位置，如果有装备宠物，就把该宠物对象压入 Petlist对象
				}				
			}
			if(Petlist.length > 0){
				if(Petlist.length > 1){  //判断Petlist的长度。也就是说放出来的宠物的数量
					cm.sendOk("#r只有放出一只宠物时才能正确被识别!");
					cm.dispose();
				}else{
					var petid = Petlist[0].getItemId();					
					var text = "#r您将要为 #v" + petid + "# 改名字。 "
					text += "#r现在名字是：#r" +  Petlist[0].getName() + "#k\r\n\r\n";				
					text += "#r您确定要更改它的名字吗？";
					cm.sendYesNo(text);										
				}
			}else{
				cm.sendOk("#r请把要进化的宠物放出来!");
				cm.dispose();
			}			
		}else if (status == 2){			
			cm.sendGetText("#r请输入新的宠物名字：\r\n#r注意：为了避免出错,请尽量不要使用复杂的符号、火星文等\r\n ");
		}else if (status == 3){
			petname = cm.getText().trim();
			if(petname.getBytes("GBK").length > 12 || petname.getBytes("GBK").length < 2){			
				cm.sendOk("#r您输入的宠物名字必须是2-10个字符之间,一个汉字算两个字符!");
				cm.dispose();
			}else{			
				if(checktext(petname) == false){
					
					cm.sendOk("#r对不起,您的宠物不能使用这个名字!");
					cm.dispose();
				}else{
					cm.sendYesNo("#r此次宠物改名需要收取1000修炼点手续费\r\n#r确定要将#r " + Petlist[0].getName() + " #k改成#r " + petname + " #k吗?");
				}							
			}
		}else if (status == 4){	
			if(cm.getRw15() >= 1000){
				cm.gainRw15(-1000);			
				Petlist[0].setName(petname);			
				cm.getC().getSession().write(net.sf.odinms.tools.MaplePacketCreator.changePetName(cm.getChar(),petname,0));			
				cm.getC().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePet(Petlist[0],true));
				Petlist[0].saveToDb();
				cm.sendOk("宠物改名成功!");
			}else{
				cm.sendOk("对不起,您没有足够的修炼点交纳手续费,我不能帮您的宠物改名字。");
			}
			cm.dispose();
		}
	}
}	

function checktext(text){    //字符串过虑功能
    var gl = new Array("你麻痹","g-m","傻B","GM","gm","5元","5元的","管理","管理员","你妈","操","SB");
    for(i=0; i<gl.length; i++){
	if(text.indexOf(gl[i]) >= 0){		
		return false;
		break;    
	}
    }    
    return true;    
}  


