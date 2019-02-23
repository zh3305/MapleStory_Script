var myDate = new Date(); // 实例化一个Date类的变量。。 
var status = 0;
function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (mode == 0 && status == 0) {
		
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
 
	
  	
 var text = "#fUI/UIWindow.img/QuestIcon/3/0#\r\n\r\n"
  text += "#L0# 我要用10个#v2430112# 换取#v2049400# \r\n#L1# 我要用10个#v2430481#换取#v2049300# \r\n";   
                       
cm.sendSimple(text);


    


			
		} else if (status == 1) {
			if (selection == 0){


 if(cm.haveItem(2430112,10)==true ){
					
					cm.sendOk("恭喜，兑换成功。"); 
					cm.gainItem(2430112,-10);
                                      cm.gainItem(2049400,1);
					cm.dispose();
				}else{
					cm.sendOk("兑换失败，物品不足"); 
					cm.dispose();
				}

 
		} else if (selection == 1){



if(cm.haveItem(2430481,10)==true){
					
					cm.sendOk("恭喜，兑换成功。"); 
                             cm.gainItem(2430481,-10);
					cm.gainItem(2049300,1);
					cm.dispose();
				}else{
					cm.sendOk("兑换失败，物品不足"); 
					cm.dispose();
				}


 } else if (selection == 2){






 }

     }else if (status == 2) {
 if(selection == 0){

    if(cm.getChar().getMapId() >=910000000 && cm.getChar().getMapId() <=910000022) {
	         		   cm.sendOk("你已经在自由市场,无需传送!!");
                                    cm.dispose(); 
			   }else{
			   cm.warp(910000000);
  cm.dispose(); 
			   }
         

}else if(selection == 1){


           cm.openNpc(9310059);     



}else if(selection == 2){

   cm.openNpc(9105004);	 



}else if(selection == 3){

	   cm.sendOk("请联系管理员QQ 1781933737!!");
	   cm.dispose();

}
else if(selection == 4){
	   var statup = new java.util.ArrayList();
	   var p = cm.c.getPlayer();
	   if(p.getExp() < 0){
		   p.setExp(0)
		   statup.add (org.tools.Pair(net.sf.odinms.client.MapleStat.EXP, java.lang.Integer.valueOf(0))); 
		   p.getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup,cm.getChar().getJob().getId()));
		   cm.sendOk("经验值已修复完成");
		   cm.dispose();
	   }else{
		   cm.sendOk("您的经验值正常,无需修复!");
		

}

}else if(selection == 5){


   cm.openNpc(9105004);	   
}else if(selection == 6){

           cm.openNpc(9310057);  
}else if(selection == 7){
        cm.openShop(603); 
	   cm.dispose();

}else if(selection == 8){
           cm.openNpc(9000020);

}else if(selection == 9){

   cm.openNpc(9120020);	 
}else if(selection == 10){

         cm.openNpc(9100202);
}else if(selection == 11){
       cm.openNpc(9000061); 

}else if(selection == 12){

      	   cm.openShop(9310074);   
	   cm.dispose(); 
}else if(selection == 13){

    cm.openNpc(9000083); 
}else if(selection == 14){
           cm.openNpc(9900007);  

}else if(selection == 15){

        cm.openNpc(9001100); 
}else if(selection == 16){

     cm.openNpc(9330111); 
}else if(selection == 17){
      cm.openNpc(9310073); 

}else if(selection == 18){
    cm.openNpc(9310071); 

}else if(selection == 19){
    cm.openNpc(9300011); 


}else if(selection == 20){

    cm.openNpc(9310072); 
}else if(selection == 21){
 cm.openShop(212); 
	   cm.dispose();


}else if(selection == 22){
 cm.openShop(211); 
	   cm.dispose();


}else if(selection == 23){
   cm.openNpc(9120021);	 

}
}



	}
}	