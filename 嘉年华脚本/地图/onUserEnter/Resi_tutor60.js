var status = -1;

function action(mode, type, selection) {
    ms.dispose();
    if (ms.getInfoQuest(23007).indexOf("vel01=2") != -1 && ms.getInfoQuest(23007).indexOf("vel01=3") == -1) {
        ms.openNpc(2159007);
    }
}
