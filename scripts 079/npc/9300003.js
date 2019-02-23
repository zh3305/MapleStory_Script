/* 
 This file is part of the OdinMS Maple Story Server 
    Copyright (C) 2008 Patrick Huy <patrick.huy@frz.cc>  
        Matthias Butz <matze@odinms.de> 
        Jan Christian Meyer <vimes@odinms.de> 
    This program is free software: you can redistribute it and/or modify 
    it under the terms of the GNU Affero General Public License as 
    published by the Free Software Foundation version 3 as published by 
    the Free Software Foundation. You may not use, modify or distribute 
    this program under any other version of the GNU Affero General Public 
    License. 
    This program is distributed in the hope that it will be useful, 
    but WITHOUT ANY WARRANTY; without even the implied warranty of 
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the 
    GNU Affero General Public License for more details. 
    You should have received a copy of the GNU Affero General Public License 
    along with this program.  If not, see <http://www.gnu.org/licenses/>. 
*/ 
/* Assistant Nancy 
 Warp to bottom (700000101) 
 located in Amoria (700000100) 
*/ 
var status = 0; 
function start() { 
 status = -1; 
 action(1, 0, 0); 
} 
function action(mode, type, selection) { 
 if (mode == -1) { 
  cm.dispose(); 
 } else { 
  if (status >= 2 && mode == 0) { 
   cm.sendOk("再见,亲爱的宝贝!"); 
   cm.dispose(); 
   return; 
  } 
  if (mode == 1) 
   status++; 
  else 
   status--; 
  if (status == 0) { 
   cm.sendNext(""+cm.mxdmz()+"冒险岛结婚系统.\r\n欢迎光临!我猜想你们是来这里结婚的吧. 那么我希望你们有充裕的准备,因为结婚的花费可不是那么便宜的哟!"); 
  } else if (status == 1) { 
   cm.sendNextPrev("呵呵,我猜想你们大概已经做好生个小宝宝的准备了吧? 那么你们现在只需要给我一张结婚的礼卡#v5220001#我就可以让你们进去结婚."); 
  } else if (status == 2) { 
   if (cm.haveItem(5220001)) { 
        cm.gainItem(5220001,-1); 
        cm.sendNextPrev("很好, 你们有婚礼卡. 我将带你们进去.\r\n祝愿你们的婚礼圆满成功.可不要忘记和对方亲吻喔."); 
   } else { 
    cm.sendOk("你们没有婚礼卡,不能举行婚礼!下次请带上婚礼卡再来找我!"); 
    status = 9; 
   cm.dispose(); 
}
  } else if (status == 3) { 
   cm.warp(700000101); 
    cm.changeMusic("BgmGL/cathedral"); 
   cm.mapMessage(5,"苍天在上,厚土在下,高堂其中。我,宣布你们俩人结为合法夫妇。小姐珠圆玉润旺夫之相、宜室宜家,先生才高八斗、学富五车。现福禄鸳鸯缘定三生，佳偶天成，珠联壁合。祝二人：永结同心，百年好合、百子千孙,无论富贵贫穷同德同心、琴瑟合鸣、相敬如宾。结此终身之盟,守此终身之誓,不离不弃、白头偕老！"); 
   cm.gainItem(1112803,1); 
   cm.gainItem(1050113,1); 
   cm.gainItem(1000029,1); 
   cm.gainItem(1081002,1); 
   cm.dispose(); 
   }else{
   cm.warp(910000000);
   cm.dispose(); 
  } 
 } 
}  
