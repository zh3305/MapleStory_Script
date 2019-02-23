/**
 *2006001.js - Spawns Minevra
 *@author Jvlaple
 */

function act() {
    rm.spawnNpc(2013002);
    rm.removeItem(4001055);
    var em = rm.getEventManager("OrbisPQ");
    if (em != null) {
        em.setProperty("finished", "1");
    }
}
