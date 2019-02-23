/* 
 * ×øÆï Í¸Ã÷òùòğ¹Ö 90Ìì
 */
var period = 90;
var mountSkillId = 10001154 ;

function start() {
    im.giveMountSkill(im.getItem(), mountSkillId, period, true);
    im.dispose();
}