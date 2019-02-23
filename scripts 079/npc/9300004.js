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
 Warp to bottom (910000000) 
 located in Amoria (680000000) 
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
   cm.sendNext(""+cm.mxdmz()+"冒险岛结婚系统.\r\n你好！我是专门为人拉红线的月老相信大家都认识我吧！你们是来结婚的吧！带上了结婚卡的吧！可以在外面的红线女处购买喔！要结婚就点击下面吧！"); 
  } else if (status == 1) { 
   cm.sendNextPrev("呵呵,我想你们准备的已经很充分了，你们肯定带了一张结婚的礼卡#v5220001#，那么既然带了，就点下一步吧."); 
  } else if (status == 2) { 
   if (cm.haveItem(5220001)) { 
    cm.sendNext("很好, 你们有婚礼卡. 我将带你们进去.\r\n祝愿你们的婚礼圆满成功.可不要忘记和对方亲吻喔."); 
    cm.gainItem(5220001,-1); 
     
   } else { 
    cm.sendOk("你们没有婚礼卡,不能举行婚礼!下次请带上婚礼卡再来找我!"); 
    status = 9; 
   } 
  } else if (status == 3) {  
    cm.gainItem(5220001,-1);
    cm.serverNotice("『结婚公告』：苍天在上,厚土在下,高堂其中。我,宣布你们俩人结为合法夫妇。小姐珠圆玉润旺夫之相、宜室宜家,先生才高八斗、学富五车。现福禄鸳鸯缘定三生，佳偶天成，珠联壁合。祝二人：永结同心，百年好合、百子千孙,无论富贵贫穷同德同心、琴瑟合鸣、相敬如宾。结此终身之盟,守此终身之誓,不离不弃、白头偕老！"); 
cm.warp(700000101);
   cm.dispose(); 
		}else{
		cm.warp(910000000);
		cm.dispose();
}
} 
}  
