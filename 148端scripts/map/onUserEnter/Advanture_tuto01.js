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
  Map(s): 400001 (Strange Space: Ray Of Light)
  Desc: Shows the Direction Info And Reactor
  
  Version 1.0 - Initial Ported
*/

importPackage(Packages.scripting);
importPackage(java.lang);

function start(ms) {
	try {
		 ms.getDirectionStatus(true);
		 ms.EnableUI(1);
		 ms.getMap().resetFully();
		 ms.spawnReactorOnGroundBelow(1008010, 365, 216);
		 ms.getDirectionInfo(1, 3000);
		 Thread.sleep(3000);
		 ms.getDirectionInfo("Effect/Direction3.img/effect/tuto/BalloonMsg0/3", 2100, 0, -120, 0, 0);
		 ms.getDirectionInfo(1, 1800);
		 Thread.sleep(1800);
		 ms.topMsg("Press the Ctrl key to use normal attacks.");
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


	