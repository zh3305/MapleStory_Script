/* 
 * 2430297 - ×øÆï °µ¹âÁú ÓÀ¾Ã
 */
var period = -1;
var mountSkillId = 10001148;

function start() {
    im.giveMountSkill(im.getItem(), mountSkillId, period);//, true);
    im.dispose();
}