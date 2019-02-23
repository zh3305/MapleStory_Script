function start(mode, type, selection) {
    qm.dispose();
}

function end(mode, type, selection) {
    qm.forceCompleteQuest();
    qm.teachSkill(30010166, -1, 0);
    qm.teachSkill(30011167, -1, 0);
    qm.teachSkill(30011168, -1, 0);
    qm.teachSkill(30011169, -1, 0);
    qm.teachSkill(30011170, -1, 0);
    qm.removeNPCRequestController(2159309);
    qm.dispose();
    qm.warp(927000070, 0);
}