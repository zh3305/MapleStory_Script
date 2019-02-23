/*  This is mada by Kent    
 *  This source is made by Funms Team
 *  功能：组队任务：陷入危机的坎特
 *  反应堆脚本
 *  @Author Kent 
 */
function act() {
    var em = rm.getEventManager("Kenta");
    var eim = rm.getEventInstance();
    if (em != null && eim != null && rm.getPlayer().getParty() != null) {
        eim.setProperty("KentaSave", "1");
        rm.startMapEffect("我呼吸困难……请你消灭周边的怪物，拿到10个空气铃。快……", 5120052);
        eim.setProperty("KentaSave", "2");
    }
}
