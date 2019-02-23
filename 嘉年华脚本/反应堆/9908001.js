/* 
 *  Witch Tower
 *  Golden Key
 */

function act() {
    var eim = rm.getEventInstance();
    if (eim != null) {
        var keys = eim.getProperty("goldkey");
        keys++;
        eim.setProperty("goldkey", keys);
        rm.playerMessage("锟斤拷取 " + keys + "锟斤拷");
    }
}
