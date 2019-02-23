/* 
 * ×øÆï ×ßÂ·¼¦ 7Ìì
 */
var period = 7;
var mountSkillId = 10001054;

function start() {
    im.giveMountSkill(im.getItem(), mountSkillId, period, true);
    im.dispose();
}