importPackage(java.util);
importPackage(net.sf.odinms.client);
importPackage(net.sf.odinms.server);
var chance = Math.floor(Math.random()*10+1);
var luk =0 ;
var status = 0;
var display;
var jilv;
var needap = 0
var beilv = 0.02;   //副装备属性相加后相乘的倍率
var needmon = 1 ;  //需要的元宝
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
		if (mode == 1)
			status++;
		if (status == 0) {
			cm.sendNext("#b"+cm.mxdmz()+"冒险岛#k武器强化部门.#k\r\n#r强化说明#k:\r\n每次强化需要消耗:#b"+needmon+"#k元宝.\r\n#r注：装备栏的前一格不得为空！强化装备从+0到+10都不会损坏，+10再丢会随机损坏，请勇士们做好心理准备！#k #k\r\n您当前的元宝是#e：" + cm.getzb() + "个");
		} else if (status == 1) {
		    if (cm.getzb() < needmon) {
		            
		            cm.sendOk("#b武器强化需要#r"+needmon+"元宝#k#b,您的余额不足!#k");
					cm.dispose();
				    
		    } else if (cm.getChar().getRemainingAp() < 0)  {
		            cm.sendOk("#b#b武器强化需要#r"+needap+"点属性值#k#b,您剩余的属性值不足!#k");
				    cm.dispose();
		  
} else if (cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1) == null)  {
		            cm.sendOk("请把要强化的装备放在第一格才能进行.");
				    cm.dispose();
} else if(cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).getExpiration() !=null) {
		            cm.sendOk("租赁装备不能进行强化.");
				    cm.dispose();
} else if (cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1) != null) {
		   var item1 = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
		   var itemId1 = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).getItemId();
		   var newstr = (item1.getStr())* beilv;
		   
		   
		   var newdex = Math.floor((item1.getDex())* beilv);
		   var newint = Math.floor((item1.getInt())* beilv);
		   var newluk = Math.floor((item1.getLuk())* beilv);
		   var newspeed = Math.floor((item1.getSpeed())* beilv);
		   var newwatk = Math.floor((item1.getWatk())* beilv);
		   var newmatk = Math.floor((item1.getMatk())* beilv);
		   var newwdef = Math.floor((item1.getWdef())* beilv);
		   var newmdef = Math.floor((item1.getMdef())* beilv);
		   var newacc = Math.floor((item1.getAcc())* beilv);
		   var newavoid = Math.floor((item1.getAvoid())* beilv);
		   var sumstr = Math.floor(item1.getStr() + newstr);
		   var sumdex = Math.floor(item1.getDex() + newdex);
		   var sumint = Math.floor(item1.getInt() + newint);
		   var sumluk = Math.floor(item1.getLuk() + newluk);
		   var sumspeed = Math.floor(item1.getSpeed() + newspeed);
		   var sumwatk = Math.floor(item1.getWatk() + newwatk);
		   var summatk = Math.floor(item1.getMatk() + newmatk);
		   var sumwdef = Math.floor(item1.getWdef() + newwdef);
		   var summdef = Math.floor(item1.getMdef() + newmdef);
		   var sumacc = Math.floor(item1.getAcc() + newacc);
		   var sumavoid = Math.floor(item1.getAvoid() + newavoid);

		   var mek ="";
                       if (item1.getStr() != 0) {
                       mek+="\r\n     >> 力量:"+item1.getStr();
                       }
                       if (item1.getDex() != 0) {
                       mek+="\r\n     >> 敏捷:"+item1.getDex();
                       }
                       if (item1.getInt() != 0) {
                       mek+="\r\n     >> 智力:"+item1.getInt();
                       }
                       if (item1.getLuk() != 0) {
                       mek+="\r\n     >> 运气:"+item1.getLuk();
                       }
                       if (item1.getSpeed() != 0) {
                       mek+="\r\n     >> 移动速度:+"+item1.getSpeed();
                       }
                       if (item1.getAcc() != 0) {
                       mek+="\r\n     >> 命中率:"+item1.getAcc();
                       }
                       if (item1.getAvoid() != 0) {
                       mek+="\r\n     >> 回避率:"+item1.getAvoid();
                       }
                       if (item1.getWatk() != 0) {
                       mek+="\r\n     >> 物理攻击力:"+item1.getWatk();
                       }
                       if (item1.getMatk() != 0) {
                       mek+="\r\n     >> 魔法攻击力:"+item1.getMatk();
                       }
                       if (item1.getWdef() != 0) {
                       mek+="\r\n     >> 物理防御力:"+item1.getWdef();
                       }
                       if (item1.getStr() != 0) {
                       mek+="\r\n魔法防御力:"+item1.getMdef();
                       }
                   var pai ="";
                       if (newstr >= 1) {
                       pai+="\r\n     >> 力量增加:"+newstr;
                       }
                       if (newdex >= 1) {
                       pai+="\r\n     >> 敏捷增加:"+newdex;
                       }
                       if (newint >= 1) {
                       pai+="\r\n     >> 智力增加:"+newint;
                       }
                       if (newluk >= 1) {
                       pai+="\r\n     >> 运气增加:"+newluk;
                       }
                       if (newspeed >= 1) {
                       pai+="\r\n     >> 移动速度增加:"+newspeed;
                       }
                       if (newacc >= 1) {
                       pai+="\r\n     >> 命中率增加:"+newacc;
                       }
                       if (newavoid >= 1) {
                       pai+="\r\n     >> 回避率增加:"+newavoid;
                       }
                       if (newwatk >= 1) {
                       pai+="\r\n     >> 物理攻击力增加:"+newwatk;
                       }
                       if (newmatk >= 1) {
                       pai+="\r\n     >> 魔法攻击力增加:"+newwatk;
                       }
                       if (newwdef >= 1) {
                       pai+="\r\n     >> 物理防御力增加:"+newwdef;
                       }
                       if (newmdef >= 1) {
                       pai+="\r\n     >> 魔法防御力增加:"+newmdef;
                       }
                   var paiid ="";
                       if (sumstr >= 1) {
                       paiid+="\r\n     >> 力量:"+sumstr;
                       }
                       if (sumdex >= 1) {
                       paiid+="\r\n     >> 敏捷:"+sumdex;
                       }
                       if (sumint >= 1) {
                       paiid+="\r\n     >> 智力:"+sumint;
                       }
                       if (sumluk >= 1) {
                       paiid+="\r\n     >> 运气:"+sumluk;
                       }
                       if (sumspeed >= 1) {
                       paiid+="\r\n     >> 移动速度:"+sumspeed;
                       }
                       if (sumacc >= 1) {
                       paiid+="\r\n     >> 命中率:"+sumacc;
                       }
                       if (sumavoid >= 1) {
                       paiid+="\r\n     >> 回避率:"+sumavoid;
                       }
                       if (sumwatk >= 1) {
                       paiid+="\r\n     >> 物理攻击力:"+sumwatk;
                       }
                       if (summatk >= 1) {
                       paiid+="\r\n     >> 魔法攻击力:"+summatk;
                       }
                       if (sumwdef >= 1) {
                       paiid+="\r\n     >> 物理防御力:"+sumwdef;
                       }
                       if (summdef >= 1) {
                       paiid+="\r\n     >> 魔法防御力:"+summdef;
                       }

		   var add="#r强化前属性：#k"+mek;

		       add+="\r\n#r强化增加属性：#k"+pai;

		       add+="\r\n#r强化后综合属性：#k"+paiid;
                  cm.sendNext("#b您当前装备#v"+itemId1+"#的强化次数为：#k#r("+item1.getLevel()+"次)#k\r\n#b您总共强化悲剧次数为：#k#r"+cm.getwqqhfail()+" 次#k\r\n#b您总共强化成功次数为：#k#r"+cm.getwqqhok()+" 次#k\r\n#b您的强化总和为：#k#r"+cm.getwqqhfull()+" 次#k\r\n\r\n"+add,2);
if(item1.getUniqueId() == 0)

item1.setUniqueId(1); 
 
	  } else if (cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1) == null) {
	
if(item1.getUniqueId() == 0)

item1.setUniqueId(1); 
			   			  cm.sendOk("请将要强化的武器放在第一格才能进行!");
				cm.dispose();  
			}
		} else if (status == 2) {
		    var itemId1 = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).getItemId();
		    var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
         if (item.getLevel() <= 3) {
			   if (chance <= 0) {
					cm.sendOk("#b强化失败，祝您下次好运!#k");
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.getItemMega(cm.getC().getChannel(),cm.getPlayer().getName() + " : " + " 强化失败了！合计成功次数："+cm.getwqqhok()+"，悲剧次数："+(cm.getwqqhfail() +1)+"，总合："+(cm.getwqqhfull() +1)+"， 共使用元宝："+(cm.getwqqhfull() * (""+needmon+""))+".",item, true).getBytes());
					cm.gainwqqhfail(1);
cm.gainwqqhfull(1);
				    var statup = new java.util.ArrayList();
				    cm.setzb(-needmon);
				    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingAp())));
				    cm.dispose();
                }
                else if (chance >= 1) {
                       cm.sendNext("#r确定要开始强化武器?");
                    luk = 1 ;
                }
}
		  else if ((item.getLevel() >= 4)&&(item.getLevel() <= 7))
           {
           if (chance <= 3) {
var itemId1 = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).getItemId();
			 var item1 = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
		   var itemId1 = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).getItemId();
		   var newstr = (item1.getStr())* 0.17;
		   
		   
		   var newdex = (item1.getDex())* 0.17;
		   var newint = (item1.getInt())* 0.17;
		   var newluk = (item1.getLuk())* 0.17;
		   var newspeed = (item1.getSpeed())* 0.17;
		   var newwatk = (item1.getWatk())* 0.17;
		   var newmatk = (item1.getMatk())* 0.17;
		   var newwdef = (item1.getWdef())* 0.17;
		   var newmdef = (item1.getMdef())* 0.17;
		   var newacc = (item1.getAcc())* 0.17;
		   var newavoid = (item1.getAvoid())* 0.17;
		   var sumstr = item1.getStr() - newstr;
		   var sumdex = item1.getDex() - newdex;
		   var sumint = item1.getInt() - newint;
		   var sumluk = item1.getLuk() - newluk;
		   var sumspeed = item1.getSpeed() - newspeed;
		   var sumwatk = item1.getWatk() - newwatk;
		   var summatk = item1.getMatk() - newmatk;
		   var sumwdef = item1.getWdef() - newwdef;
		   var summdef = item1.getMdef() - newmdef;
		   var sumacc = item1.getAcc() - newacc;
		   var sumavoid = item1.getAvoid() - newavoid;
		   
			
			//if ((itemId1 == itemId1)&&(itemId1 == itemId1)) {
		            var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
item.setStr(sumstr); // STR     
item.setDex(sumdex); // DEX     
item.setInt(sumint); // INT 
item.setLuk(sumluk); // INT       
item.setWatk(sumwatk); //WATK    
item.setMatk(summatk); //MATK    
item.setWdef(sumwdef); //WDEF    
item.setMdef(summdef); //MDEF    
item.setAcc(sumacc); // ACC     
item.setAvoid(sumavoid); // AVOID 
item.setSpeed(item.getSpeed() - 1); // SPEED 
item.setJump(item.getJump() - 1);
					item.setLevel((item.getLevel() - 1));
					MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1,1, true);
					MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, "Edit by Kevin");
					cm.sendOk("#b强化失败，祝您下次好运!#k");
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.getItemMega(cm.getC().getChannel(),cm.getPlayer().getName() + " : " + " 强化失败了！合计成功次数："+cm.getwqqhok()+"，悲剧次数："+(cm.getwqqhfail() +1)+"，总合："+(cm.getwqqhfull() +1)+"， 共使用元宝："+(cm.getwqqhfull() * (""+needmon+""))+"",item, true).getBytes());
					cm.gainwqqhfail(1);
cm.gainwqqhfull(1);
				    var statup = new java.util.ArrayList();
				    cm.setzb(-needmon);
				    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingAp())));
				    cm.dispose();
                }
                 else if (chance >= 4) {
                   
                    cm.sendNext("#r确定要开始强化武器?");
                    luk = 1 ;
                }
           
           }
           else if (item.getLevel() == 8)
           {
           if (chance <= 4) {
var itemId1 = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).getItemId();
			 var item1 = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
		   var itemId1 = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).getItemId();
		   var newstr = (item1.getStr())* 0.765;
		   var newdex = (item1.getDex())* 0.765;
		   var newint = (item1.getInt())* 0.765;
		   var newluk = (item1.getLuk())* 0.765;
		   var newspeed = (item1.getSpeed())* 0.765;
		   var newwatk = (item1.getWatk())* 0.765;
		   var newmatk = (item1.getMatk())* 0.765;
		   var newwdef = (item1.getWdef())* 0.765;
		   var newmdef = (item1.getMdef())* 0.765;
		   var newacc = (item1.getAcc())* 0.765;
		   var newavoid = (item1.getAvoid())* 0.765;
		   var sumstr = item1.getStr() - newstr;
		   var sumdex = item1.getDex() - newdex;
		   var sumint = item1.getInt() - newint;
		   var sumluk = item1.getLuk() - newluk;
		   var sumspeed = item1.getSpeed() - newspeed;
		   var sumwatk = item1.getWatk() - newwatk;
		   var summatk = item1.getMatk() - newmatk;
		   var sumwdef = item1.getWdef() - newwdef;
		   var summdef = item1.getMdef() - newmdef;
		   var sumacc = item1.getAcc() - newacc;
		   var sumavoid = item1.getAvoid() - newavoid;
		            var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
item.setStr(sumstr); // STR     
item.setDex(sumdex); // DEX     
item.setInt(sumint); // INT 
item.setLuk(sumluk); // INT       
item.setWatk(sumwatk); //WATK    
item.setMatk(summatk); //MATK    
item.setWdef(sumwdef); //WDEF    
item.setMdef(summdef); //MDEF    
item.setAcc(sumacc); // ACC     
item.setAvoid(sumavoid); // AVOID 
item.setSpeed(item.getSpeed() - 8); // SPEED 
item.setJump(item.getJump() - 8);
					item.setLevel((item.getLevel() - 8));
					MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1,1, true);
					MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, "Edit by Kevin");
					cm.sendOk("#b强化失败，祝您下次好运!#k");
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.getItemMega(cm.getC().getChannel(),cm.getPlayer().getName() + " : " + " 强化失败归0了！合计成功次数："+cm.getwqqhok()+"，悲剧次数："+(cm.getwqqhfail() +1)+"，总合："+(cm.getwqqhfull() +1)+"， 共使用元宝："+(cm.getwqqhfull() * (""+needmon+""))+"",item, true).getBytes());
					cm.gainwqqhfail(1);
cm.gainwqqhfull(1);
				    var statup = new java.util.ArrayList();
				    cm.setzb(-needmon);
				    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingAp())));
				    cm.dispose();
                }
                 else if (chance >= 5) {
                    cm.sendNext("#r确定要开始强化武器?");
                    luk = 1 ;
                }
           
           }
           else if (item.getLevel() == 9)
           {
           if (chance <= 5) {
var itemId1 = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).getItemId();
			 var item1 = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
		   var itemId1 = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).getItemId();
		   var newstr = (item1.getStr())* 0.805;
		   var newdex = (item1.getDex())* 0.805;
		   var newint = (item1.getInt())* 0.805;
		   var newluk = (item1.getLuk())* 0.805;
		   var newspeed = (item1.getSpeed())* 0.805;
		   var newwatk = (item1.getWatk())* 0.805;
		   var newmatk = (item1.getMatk())* 0.805;
		   var newwdef = (item1.getWdef())* 0.805;
		   var newmdef = (item1.getMdef())* 0.805;
		   var newacc = (item1.getAcc())* 0.805;
		   var newavoid = (item1.getAvoid())* 0.805;
		   var sumstr = item1.getStr() - newstr;
		   var sumdex = item1.getDex() - newdex;
		   var sumint = item1.getInt() - newint;
		   var sumluk = item1.getLuk() - newluk;
		   var sumspeed = item1.getSpeed() - newspeed;
		   var sumwatk = item1.getWatk() - newwatk;
		   var summatk = item1.getMatk() - newmatk;
		   var sumwdef = item1.getWdef() - newwdef;
		   var summdef = item1.getMdef() - newmdef;
		   var sumacc = item1.getAcc() - newacc;
		   var sumavoid = item1.getAvoid() - newavoid;
		   
			
			//if ((itemId1 == itemId1)&&(itemId1 == itemId1)) {
		            var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
item.setStr(sumstr); // STR     
item.setDex(sumdex); // DEX     
item.setInt(sumint); // INT 
item.setLuk(sumluk); // INT       
item.setWatk(sumwatk); //WATK    
item.setMatk(summatk); //MATK    
item.setWdef(sumwdef); //WDEF    
item.setMdef(summdef); //MDEF    
item.setAcc(sumacc); // ACC     
item.setAvoid(sumavoid); // AVOID 
item.setSpeed(item.getSpeed() - 9); // SPEED 
item.setJump(item.getJump() - 9);
					item.setLevel((item.getLevel() - 9));
					MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1,1, true);
					MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, "Edit by Kevin");
					cm.sendOk("#b强化失败，祝您下次好运!#k");
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.getItemMega(cm.getC().getChannel(),cm.getPlayer().getName() + " : " + " 强化失败归0了！合计成功次数："+cm.getwqqhok()+"，悲剧次数："+(cm.getwqqhfail() +1)+"，总合："+(cm.getwqqhfull() +1)+"， 共使用元宝："+(cm.getwqqhfull() * (""+needmon+""))+"",item, true).getBytes());
					cm.gainwqqhfail(1);
cm.gainwqqhfull(1);
				    var statup = new java.util.ArrayList();
				    cm.setzb(-needmon);
				    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingAp())));
				    cm.dispose();
                }
                 else if (chance >= 6) {
                    cm.sendNext("#r确定要开始强化武器?");
                    luk = 1 ;
                }
           
           }
           else if (item.getLevel() == 10)
           {
           if (chance <= 5) {
var itemId1 = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).getItemId();
			 var item1 = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
		   var itemId1 = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).getItemId();
		   var newstr = (item1.getStr())* 0.837;
		   var newdex = (item1.getDex())* 0.837;
		   var newint = (item1.getInt())* 0.837;
		   var newluk = (item1.getLuk())* 0.837;
		   var newspeed = (item1.getSpeed())* 0.837;
		   var newwatk = (item1.getWatk())* 0.837;
		   var newmatk = (item1.getMatk())* 0.837;
		   var newwdef = (item1.getWdef())* 0.837;
		   var newmdef = (item1.getMdef())* 0.837;
		   var newacc = (item1.getAcc())* 0.837;
		   var newavoid = (item1.getAvoid())* 0.837;
		   var sumstr = item1.getStr() - newstr;
		   var sumdex = item1.getDex() - newdex;
		   var sumint = item1.getInt() - newint;
		   var sumluk = item1.getLuk() - newluk;
		   var sumspeed = item1.getSpeed() - newspeed;
		   var sumwatk = item1.getWatk() - newwatk;
		   var summatk = item1.getMatk() - newmatk;
		   var sumwdef = item1.getWdef() - newwdef;
		   var summdef = item1.getMdef() - newmdef;
		   var sumacc = item1.getAcc() - newacc;
		   var sumavoid = item1.getAvoid() - newavoid;
		   
			
			//if ((itemId1 == itemId1)&&(itemId1 == itemId1)) {
		            var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
item.setStr(sumstr); // STR     
item.setDex(sumdex); // DEX     
item.setInt(sumint); // INT 
item.setLuk(sumluk); // INT       
item.setWatk(sumwatk); //WATK    
item.setMatk(summatk); //MATK    
item.setWdef(sumwdef); //WDEF    
item.setMdef(summdef); //MDEF    
item.setAcc(sumacc); // ACC     
item.setAvoid(sumavoid); // AVOID 
item.setSpeed(item.getSpeed() - 10); // SPEED 
item.setJump(item.getJump() - 10);
					item.setLevel((item.getLevel() - 10));
					MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1,1, true);
					MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, "Edit by Kevin");
					cm.sendOk("#b强化失败，祝您下次好运!#k");
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.getItemMega(cm.getC().getChannel(),cm.getPlayer().getName() + " : " + " 强化失败归0了！合计成功次数："+cm.getwqqhok()+"，悲剧次数："+(cm.getwqqhfail() +1)+"，总合："+(cm.getwqqhfull() +1)+"， 共使用元宝："+(cm.getwqqhfull() * (""+needmon+""))+"",item, true).getBytes());
					cm.gainwqqhfail(1);
cm.gainwqqhfull(1);
				    var statup = new java.util.ArrayList();
				    cm.setzb(-needmon);
				    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingAp())));
				    cm.dispose();
                }
                 else if (chance >= 6) {
                    cm.sendNext("#r确定要开始强化武器?");
                    luk = 1 ;
                }
           
           }
           else if (item.getLevel() >= 11){
           if (chance <= 7) {
          MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1,1, true);
					var statup = new java.util.ArrayList();
				    cm.setzb(-needmon);
				    cm.getChar().setRemainingAp (cm.getChar().getRemainingAp() - needap);
				    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingAp())));
				    cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
					cm.sendOk("#b强化失败，祝您下次好运!#k");
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.getItemMega(cm.getC().getChannel(),cm.getPlayer().getName() + " : " + " 被强爆了！合计成功次数："+cm.getwqqhok()+"，悲剧次数："+(cm.getwqqhfail() +1)+"，总合："+(cm.getwqqhfull() +1)+"， 共使用元宝："+(cm.getwqqhfull() * (""+needmon+""))+"",item, true).getBytes());
					cm.gainwqqhfail(1);
cm.gainwqqhfull(1);
				    cm.dispose();
                }
                else if (chance >= 8) {
                    cm.sendNext("#r确定要开始强化武器?");
                    luk = 1 ;
                }
}
			}else if ((status == 3)||(luk == 1)) {
			var itemId1 = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).getItemId();
			 var item1 = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
		   var itemId1 = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).getItemId();
		   var newstr = (item1.getStr())* beilv;
		   
		   
		   var newdex = (item1.getDex())* beilv;
		   var newint = (item1.getInt())* beilv;
		   var newluk = (item1.getLuk())* beilv;
		   var newspeed = (item1.getSpeed())* beilv;
		   var newwatk = (item1.getWatk())* beilv;
		   var newmatk = (item1.getMatk())* beilv;
		   var newwdef = (item1.getWdef())* beilv;
		   var newmdef = (item1.getMdef())* beilv;
		   var newacc = (item1.getAcc())* beilv;
		   var newavoid = (item1.getAvoid())* beilv;
		   var sumstr = item1.getStr() + newstr;
		   var sumdex = item1.getDex() + newdex;
		   var sumint = item1.getInt() + newint;
		   var sumluk = item1.getLuk() + newluk;
		   var sumspeed = item1.getSpeed() + newspeed;
		   var sumwatk = item1.getWatk() + newwatk;
		   var summatk = item1.getMatk() + newmatk;
		   var sumwdef = item1.getWdef() + newwdef;
		   var summdef = item1.getMdef() + newmdef;
		   var sumacc = item1.getAcc() + newacc;
		   var sumavoid = item1.getAvoid() + newavoid;
		            var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
item.setStr(sumstr+0.4); // STR     
item.setDex(sumdex+0.4); // DEX     
item.setInt(sumint+0.4); // INT 
item.setLuk(sumluk+0.4); // INT       
item.setWatk(sumwatk); //WATK    
item.setMatk(summatk); //MATK    
item.setWdef(sumwdef); //WDEF    
item.setMdef(summdef); //MDEF    
item.setAcc(sumacc); // ACC     
item.setAvoid(sumavoid); // AVOID 
item.setSpeed(item.getSpeed() + 1); // SPEED 
item.setJump(item.getJump() + 1); // Jump
					item.setLevel((item.getLevel() + 1));
					MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1,1, true);
					MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, "Edit by Kevin");
					cm.sendOk("#r恭喜您，武器#v"+itemId1+"#成功\r\n强化次数+1，各属性值上升!#k");
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.getItemMegas(cm.getC().getChannel(),cm.getPlayer().getName() + " : " + " +"+(item1.getLevel() +1) +" 成功!合计成功次数："+(cm.getwqqhok() +1)+"，悲剧次数："+cm.getwqqhfail()+"，总合："+(cm.getwqqhfull() +1)+"， 共使用元宝："+(cm.getwqqhfull() * (""+needmon+""))+"， 余额. " + cm.getzb() + "",item, true).getBytes());
          cm.gainwqqhok(1);
cm.gainwqqhfull(1);
				    var statup = new java.util.ArrayList();
				    cm.setzb(-needmon);
				    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingAp())));

				
				    cm.dispose();
		}
		
	}
}