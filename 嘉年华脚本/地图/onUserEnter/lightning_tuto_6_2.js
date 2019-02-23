/*
 Made by Kent
 */

var status = -1;

function action(mode, type, selection) {

        status++;

    if (status == 0) {
ms.spawnNPCRequestController(2159358, -153, -508);
ms.spawnNPCRequestController(2159362, 0,-499);
ms.spawnNPCRequestController(2159357, 300, -80);
ms.spawnNPCRequestController(2159363, 600, -310);
ms.setNPCSpecialAction(2159363 , "summon");
ms.spawnNPCRequestController(2159364, 150, -520);
ms.setNPCSpecialAction(2159364 , "summon");
ms.spawnNPCRequestController(2159365, -150,-520);
ms.setNPCSpecialAction(2159365 , "summon");
ms.spawnNPCRequestController(2159366, -600,-310);
ms.setNPCSpecialAction(2159366 , "summon");
ms.spawnNPCRequestController(2159367, 0, -80);
ms.setNPCSpecialAction(2159367, "summon");
		ms.DisableUI(false);
	ms.dispose();
	ms.enableActions();
    }
}

