let handler = async (m, { conn }) => {
	let emot = conn.pickRandom(["🗿", "👍", "💨", "🩱", "🐷", "🐒", "🌝", "💩", "👻", "🔥", "🖕"])
    conn.sendMessage(m.chat, {
    	react: {
    		text: emot,
    		key: m.key
    	}
    })	
}
handler.customPrefix = /(bile?k|ban?h|ald?i|gp?p|y?|ck?p tw?|p?|b(a|i)?c?(o|i)?(t|d)?|wib?u|zulf?a||gali?h||ary?a||aj?i|zai?n)/i
handler.command = new RegExp

module.exports = handler
