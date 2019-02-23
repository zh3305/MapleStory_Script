importPackage(Packages.client.inventory);


var status = 0;
var choose = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1) status++;
        if (status == 0) {


            var text = "请选择你需要兑换的：\r\n";
           text += "#b#L0##v4001266##z4001266# #r兑换物品#l\r\n";
           text += "#b#L1##v4031454##z4031454# #r兑换物品#l\r\n";
			
            cm.sendSimple(text);

        } else if (status == 1) {
           
			switch(selection){
				case 0:
			        cm.dispose();
			        cm.openNpc(2040034,"wanju2");	
                                break;
				case 1:
			        cm.dispose();
			        cm.openNpc(2040034,"wanju3");	
                                break;
				case 2:
			        cm.dispose();
			        cm.warp(951000000, 1);		
                                break;
				case 3:
                                cm.dispose();
                                cm.warp(925020000, 1);		
                                break;
				case 4:
			        cm.dispose();
			        cm.openNpc(9010017,"kf");	
                                break;
				case 5:
			        cm.dispose();
			        cm.openNpc(9010017,"leijisong");
                      // cm.sendOk("#d注意：1个物品占一个格子，有足够空间在领取！");
                                break;
				case 10:
			        cm.dispose();
			        cm.openNpc(9010017,"zuduirenwu");
                      // cm.sendOk("#d注意：1个物品占一个格子，有足够空间在领取！");
                                break;

			}
		}
    }
}