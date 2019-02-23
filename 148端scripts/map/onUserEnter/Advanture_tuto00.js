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

/*
  Author: Itzik
  Author: ExtremeDevilz
  Map(s): 400000 (Strange Space: Darkness)
  Desc: Shows the Direction Info And Message
  
  Version 1.0 - Initial Ported
  Version 1.1 - Added Thread
  Version 1.2 - Added printStackTrace();
*/

importPackage(Packages.scripting);
importPackage(java.lang);

function start(ms) {
	try {
		Thread.sleep(2100);
		ms.getDirectionStatus(true);
		ms.EnableUI(1); // Disable UI
		Thread.sleep(2100);
		ms.getDirectionInfo(3,0);
		ms.getDirectionInfo(1,30);
		Thread.sleep(2100);
		ms.getDirectionInfo("Effect/Direction3.img/effect/tuto/BalloonMsg0/0", 2100, 0, -120, 0, 0);
		ms.getDirectionInfo(1,2100);
		Thread.sleep(2800);
		ms.getDirectionInfo(3, 2);
		ms.getDirectionInfo(1, 420);
		Thread.sleep(420);
		ms.getDirectionInfo(3, 1);
		ms.getDirectionInfo(1, 420);
		Thread.sleep(420);
		ms.getDirectionInfo(3, 2);
		ms.getDirectionInfo(1, 420);
		Thread.sleep(420);
		ms.getDirectionInfo(3, 0);
		ms.getDirectionInfo("Effect/Direction12.img/effect/tuto/BalloonMsg0/1", 2100, 0, -120, 0, 0);
		ms.getDirectionInfo(1, 1800);
		Thread.sleep(2800);
		ms.getDirectionInfo("Effect/Direction3.img/effect/tuto/BalloonMsg0/1", 2100, 0, -120, 0, 0);
		ms.getDirectionInfo(1, 2100);
		Thread.sleep(2800);
		ms.getDirectionEffect("Effect/Direction3.img/effect/tuto/key/0", 3000000, -300, 0);
		ms.getDirectionEffect("Effect/Direction3.img/effect/tuto/key/0", 3000000, 0, 0);
		ms.getDirectionEffect("Effect/Direction3.img/effect/tuto/key/0", 3000000, 300, 0);
		ms.getDirectionEffect("Effect/Direction3.img/effect/tuto/key/1", 3000000, 540, 70);
		ms.getDirectionInfo(1, 1200);
		Thread.sleep(1800);
		ms.getDirectionInfo("Effect/Direction3.img/effect/tuto/BalloonMsg0/2", 2100, 0, -120, 0, 0);
		ms.getDirectionInfo(1, 2100);
		Thread.sleep(2800);
		ms.topMsg("Press the left and right keys to move.");
		ms.getDirectionInfo(1, 3000);
		Thread.sleep(3800);
		ms.topMsg("Go to where the portal is and press the up key to move to the next map.");
		ms.EnableUI(0);
	
	} 
	catch(e) {
		if (e.rhinoException != null) {
			e.rhinoException.printStackTrace();
		}
		else if(e.javaException != null) {
			e.javaException.printStackTrace();
		}
	}
}

