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

   var text = "#r#fUI/UIWindow.img/QuestIcon/3/0#\r\n头目大扫荡!获得 怪物币，换取好东西哦!\r\n"
	
         
       text += "#L3##b①我要参加头目大扫荡获得#v4001626##k\r\n"; 
 text += "#L2##b②我要用#v4001626#怪物币换取奖励#k\r\n"; 
//text += "#L4##b③怪物币抽奖#n#l\r\n"; 
text += "#L5##b③我要领取每日的#v4001626#怪物币#n#l\r\n"; 
//text += "#L6##b⑤我要打工#n#l\r\n"; 
//text += "#L7##b⑥升级加油!#n#l\r\n"; 
//text += "#L8##b⑦假期充值活动!#n#l\r\n"; 
           
                       

			cm.sendSimple(text);
			
		} else if (status == 1) {
			if (selection == 3){
                        cm.dispose();
                          cm.openNpc(9310069); 


			}else if(selection == 2){
		
 

	 cm.openNpc(9310070); 

	

  
			}else if(selection == 4){

		 cm.openNpc(9310073); 	


			}else if(selection == 5){
		
if (cm.getPlayer().getPQLog("qd") >= 1 ) {
      
   	cm.sendOk("#e过24小时再来吧!!");
cm.dispose();

 }  else if (cm.getChar().getLevel() < 13) {


cm.sendOk("13级以上的玩家才能领取");	
cm.dispose();


} else {  

   cm.getPlayer().setPQLog("qd");
 cm.gainItem(4001626, 1);

// cm.serverNotice(5,"[每天签到]：恭喜玩家:"+cm.getChar().getName()+" 成功上线签到!");
                           // cm.getPlayer().getMap().startMapEffect("恭喜玩家:"+cm.getChar().getName()+" 成功上线签到!", 5120006);

			cm.sendOk("#e领取到了#r1#k个#v4001626#\r\n过24小时再来吧!");
			cm.dispose();
		       }	

			}else if(selection == 6){
		
if (cm.getPlayer().getPQLog("51dg") >= 5 ) {

  cm.sendOk("今天你已经打工5次啦!明天再来完成任务吧!");
	cm.dispose();

        }else if ( cm.itemQuantity(1002357) == 1  ) {

cm.gainItem(1002357, -1);


cm.gainItem(4001626, 2);  
   cm.getPlayer().setPQLog("51dg");  

 var p = cm.c.getPlayer();
		   p.setExp(0)




        cm.gainExp(2147483647);

  cm.sendOk("作为报酬,我用#r2#k个#v4001626#和你交换!");
	cm.dispose();

} else {

cm.sendOk("#r嗯哼,最近我在研究一种新头盔,材料需要大量的#v1002357#,只要你能帮我带来#r1#k个  #v1002357#我可以和你交换物品!\r\n\r\n#b#e任务奖励#k：\r\n无条件获得#r2#k个 #v4001626#\r\n等级提升#r1#k级");
 
			cm.dispose();

		       }	


	          

		}else if(selection == 7){



   var text = "五一劳动! 劳动光荣~你想领取升30级的经验吗?你搜集材料来我就帮你!  \r\n"
	
         
       text += "#L0##b我想查看下需要什么材料#k\r\n"; 

text += "#L1##b我要升级!!#n#l\r\n"; 
           
                       

			cm.sendSimple(text);

			}else if(selection == 8){
		

cm.sendOk(" 假期充值 返 50%点卷! 购买VIp 额外赠送玩具、椅子 、购买Vip6 赠送全属性500的 #r#v1002140#!\r\n\r\n充值或者有任何问题请联系 GM ，QQ1781933737");
 
			cm.dispose();


			}else if(selection == 10){

	if( cm.getChar().getVip() ==0 ){
					
					
			cm.getChar().SetVip(2);

						cm.serverNotice(5,"[vip公告]：恭喜玩家:"+cm.getChar().getName()+" 免费加入了本服二星会员行列，欢呼吧！！！");
						cm.serverNotice(5,"[vip公告]：恭喜玩家:"+cm.getChar().getName()+" 免费加入了本服二星会员行列，欢呼吧！！！");
						cm.serverNotice(5,"[vip公告]：恭喜玩家:"+cm.getChar().getName()+" 免费加入了本服二星会员行列，欢呼吧！！！");
						cm.serverNotice(5,"[vip公告]：恭喜玩家:"+cm.getChar().getName()+" 免费加入了本服二星会员行列，欢呼吧！！！");
						cm.serverNotice(5,"[vip公告]：恭喜玩家:"+cm.getChar().getName()+" 免费加入了本服二星会员行列，欢呼吧！！！");
                
					cm.dispose();
				}else{
					cm.sendOk("你已经是Vip2或者以上了!"); 
					cm.dispose();
				}
		
	 


			}else if(selection == 11){
		
	 cm.openNpc(2040049); 


			}else if(selection == 12){
		
	 cm.openNpc(9900005); 


			}else if(selection == 13){
		
	 cm.openNpc(9250025); 


			}else if(selection == 14){
		
	 cm.openNpc(2040039); 


			}else if(selection == 15){
		
	 cm.openNpc(2040039); 


			}else if(selection == 16){
		
	 cm.openShop(9900005); 

cm.dispose();

			}else if(selection == 17){
		
	 cm.openNpc(9100000); 



			}else if(selection == 18){
		
	 cm.openNpc(9330112); 



			}else if(selection == 19){
		
	 cm.openShop(9201060); 

cm.dispose();

			}else if(selection == 20){
		
	 cm.openNpc(9310000); 



			}else if(selection == 21){
		
	 cm.openNpc(9000040); 



			}else if(selection == 22){
		
		
                           cm.getPlayer().dropMessage("注意：购买时要空出消耗栏！");
 cm.openNpc(9330114); 



			}else if(selection == 23){
		
	 cm.openNpc(9310074); 



			}else if(selection == 24){
		
	 cm.openNpc(9330113); 



			}else if(selection == 25){
		
	 cm.openShop(9050008); 

cm.dispose();



			}else if(selection == 26){
		
	 cm.openNpc(9310108); 



			}else if(selection == 27){
		
	 cm.openNpc(2010011); 



			}else if(selection == 28){
		var text = "Hi，#r" + cm.getChar().getName() + "下面你可以变化说话颜色哦!\r\n手续费#v4000019# 100个!#k\r\n";   
     text += "#L0##n我要使用绿说话背景\r\n";     text += "#L1##n我要使用红色说话背景\r\n"; 

text += "#L2##n我要使用橙色说话背景\r\n";  text += "#L3##r我要取消说话背景\r\n"; 
cm.sendSimple(text);

			}else if(selection == 29){
		
	 if(cm.getPlayer().getPQLog("mrshangxian1") >= 1){
                                
  cm.sendOk("您已经领取了!明天再来吧 ");
                    cm.dispose();
}else{ 
    cm.getPlayer().setPQLog("mrshangxian1");
         cm.gainItem(4001126, 50);
        cm.gainItem(2000019, 100);
   cm.gainItem(2022090, 5);
cm.getPlayer().dropMessage(1, "您已经领取了!请明天再来领取吧!.");
cm.dispose();
  
	}		}else if(selection == 30){

				var text = "Hi，#r" + cm.getChar().getName() + "你可以开启、关闭自动捡钱功能哦!!\r\n\r\n手续费#v4000019# 500个\r\n\r\n如果你开启了自动捡钱你认为影响了游戏，你可以关闭此功能的哦!\r\n\r\n";   
     text += "#L4##n我要开启自动捡钱\r\n";     text += "#L5##n我要关闭自动捡钱\r\n"; 
     cm.sendSimple(text);

		}else if(selection == 1){

		 cm.openNpc(9310072); 
           

			
			}else if(selection == 31){

            if(cm.getPlayer().getPQLog("mrgz") >= 1){
                                
  cm.sendOk("你已领取今天的工资了!明天再来吧! ");
                    cm.dispose();

      }   else if (cm.getPlayer().getLevel() <= 9) {
  cm.sendOk("你至少达到10级 再来找我领取每日工资吧! "); 
     cm.dispose(); 
}else{ 
     if (cm.getChar().getVip() <= 0) {
        cm.getPlayer().setPQLog("mrgz");
         cm.getPlayer().modifyCSPoints(1,+5000);
                  cm.gainMeso(1000000);       
cm.serverNotice("[☆☆玩家每日工资领取☆☆]玩家:" + cm.c.getPlayer().getName() + " 领取了今日工资 5000点卷和 1000000冒险b!");
            cm.dispose();
  }
  else if (cm.getChar().getVip() == 1) {
        cm.getPlayer().setPQLog("mrgz");
         cm.getPlayer().modifyCSPoints(1,+8000);
                  cm.gainMeso(5000000);       
cm.serverNotice("[☆☆玩家每日工资领取☆☆]Vip1:" + cm.c.getPlayer().getName() + " 领取了今日工资 8000点卷和 5000000冒险b!");
            cm.dispose();
  } else if (cm.getChar().getVip() == 2) {
        cm.getPlayer().setPQLog("mrgz");
         cm.getPlayer().modifyCSPoints(1,+10000);
                  cm.gainMeso(10000000);       
cm.serverNotice("[☆☆玩家每日工资领取☆☆]Vip2:" + cm.c.getPlayer().getName() + " 领取了今日工资 10000点卷和 10000000冒险b!");
            cm.dispose();
  } else if (cm.getChar().getVip() == 3) {
        cm.getPlayer().setPQLog("mrgz");
         cm.getPlayer().modifyCSPoints(1,+20000);
                  cm.gainMeso(30000000);       
cm.serverNotice("[☆☆玩家每日工资领取☆☆]Vip3:" + cm.c.getPlayer().getName() + " 领取了今日工资 20000点卷和 30000000冒险b!");
            cm.dispose();
  } else if (cm.getChar().getVip() == 4) {
        cm.getPlayer().setPQLog("mrgz");
         cm.getPlayer().modifyCSPoints(1,+50000);
                  cm.gainMeso(100000000);       
cm.serverNotice("[☆☆玩家每日工资领取☆☆]超级Vip:" + cm.c.getPlayer().getName() + " 领取了今日工资 50000点卷和 100000000冒险b!");
            cm.dispose();
  } else if (cm.getChar().getVip() == 5) {
        cm.getPlayer().setPQLog("mrgz");
         cm.getPlayer().modifyCSPoints(1,+50000);
                  cm.gainMeso(300000000);       
cm.serverNotice("[☆☆玩家每日工资领取☆☆]顶级Vip:" + cm.c.getPlayer().getName() + " 领取了今日工资 50000点卷和 300000000冒险b!");
            cm.dispose();
  } else{ 
	 cm.getPlayer().dropMessage(1, "条件不足.");
		cm.dispose(); 
		 }  	   }  
			
 }else if(selection == 9){
 			
if (cm.getPlayer().getMapId() >=910000000 && cm.getPlayer().getMapId() <=910000022) {
					cm.getPlayer().dropMessage(1, "您已经在自由市场中间了.");
					cm.dispose();
}else{                                
                                     cm.getPlayer().dropMessage(1, "聊天窗口输入“@市场”即可满足你");
					cm.dispose();
        }	
				
			}
else if(selection == 10){
				
 cm.openShop(933); cm.dispose(); 
				
			}
		}

else if (status == 2) {
 if(selection == 0){
if (cm.itemQuantity(4000001) == 30) {


cm.sendOk("材料需要 30个 #v4000001#,看来你已经搜集足够了嘛!");	
cm.dispose();
}else{ 
cm.sendOk("材料需要 30个 #v4000001#,不能超过30个! 孩子,快去搜集吧!");	
cm.dispose();
}
}else if(selection == 1){

if (cm.itemQuantity(4000001) == 30) {


 if (cm.getLevel() >= 200) {
     cm.sendOk("你已经满级了 ");
      	cm.dispose();
      
        } else if(cm.getPlayer().getPQLog("meirisj") >= 1) {
     cm.sendOk("每天只能完成#r1#k次任务! ");
      	cm.dispose();
      
        }
        else{
    cm.gainItem(4000001, -30); 
 
	   var p = cm.c.getPlayer();
		   p.setExp(0)




        cm.gainExp(2147483647);
        cm.gainExp(2147483647);
        cm.gainExp(2147483647);
        cm.gainExp(2147483647);
        cm.gainExp(2147483647);
        cm.gainExp(2147483647);
        cm.gainExp(2147483647);
        cm.gainExp(2147483647);
        cm.gainExp(2147483647);
        cm.gainExp(2147483647);
      
        cm.gainExp(2147483647);
        cm.gainExp(2147483647);
        cm.gainExp(2147483647);
        cm.gainExp(2147483647);
        cm.gainExp(2147483647);
      
        cm.gainExp(2147483647);
        cm.gainExp(2147483647);
        cm.gainExp(2147483647);
        cm.gainExp(2147483647);
        cm.gainExp(2147483647);
      
        cm.gainExp(2147483647);
        cm.gainExp(2147483647);
        cm.gainExp(2147483647);
        cm.gainExp(2147483647);
        cm.gainExp(2147483647);
      
        cm.gainExp(2147483647);
        cm.gainExp(2147483647);
        cm.gainExp(2147483647);
        cm.gainExp(2147483647);
        cm.gainExp(2147483647);
      
      

         cm.getPlayer().setPQLog("meirisj");

  cm.serverNotice(5,"[五一假日升级]：恭喜玩家:"+cm.getChar().getName()+" 领取了升30级的经验!");
                            cm.getPlayer().getMap().startMapEffect("恭喜玩家:"+cm.getChar().getName()+" 领取了升30级的经验!", 5120006);


 cm.getPlayer().dropMessage(1, "升级完毕.");
	cm.dispose();
}


}else{ 
  cm.getPlayer().dropMessage(1, "条件不足啊 童鞋!");
cm.dispose();
}
}else if(selection == 2){


if (cm.itemQuantity(4000019) >= 100) {
   cm.gainItem(4000019, -100); 
cm.getChar().SetShuoHua(3);
cm.sendOk("恭喜你设置成功!!");	
cm.dispose();
}else{ 
  cm.getPlayer().dropMessage(1, "材料不足!");
cm.dispose();
}

}else if(selection == 3){
cm.getChar().SetShuoHua(0);
cm.sendOk("恭喜你取消成功!!");	
cm.dispose();
}
else if(selection == 4){
if (cm.itemQuantity(4000019) >= 500) {
cm.gainItem(4000019, -500); 
cm.getChar().SetSD(1);
cm.sendOk("恭喜你开启成功!!如果你打怪会掉线请关闭此功能，当然操作好就不会掉线");	
cm.dispose();
}else{ 
  cm.getPlayer().dropMessage(1, "材料不足!");
cm.dispose();
}
}else if(selection == 5){
cm.getChar().SetSD(0);
cm.sendOk("恭喜你取消成功!!打怪会掉线的玩家必须取消哦，当然操作好就不会掉线");	
cm.dispose();
}
}



	}
}	