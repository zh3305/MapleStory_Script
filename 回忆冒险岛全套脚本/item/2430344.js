/* 
 * ×øÆï öùÓãÍõ 90Ìì
 */
var period = 90;
var mountSkillId = 30001027;

function start() {
    im.giveMountSkill(im.getItem(), mountSkillId, period, true);
    im.dispose();
}