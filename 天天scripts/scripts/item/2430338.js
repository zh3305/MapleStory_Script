/* 
 * ×øÆï ÍÒÄñ 90Ìì
 */
var period = 90;
var mountSkillId = 30011051;

function start() {
    im.giveMountSkill(im.getItem(), mountSkillId, period, true);
    im.dispose();
}