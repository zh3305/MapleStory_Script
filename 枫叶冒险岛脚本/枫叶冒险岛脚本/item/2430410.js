/* 
 * ×øÆï ½î¶·ÔÆ 7Ìì
 */
var period = 7;
var mountSkillId = 10001150;

function start() {
    im.giveMountSkill(im.getItem(), mountSkillId, period, true);
    im.dispose();
}