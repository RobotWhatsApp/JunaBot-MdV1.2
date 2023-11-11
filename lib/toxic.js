const fs = require('fs')

exports.isToxic = function(sender, isPremium, isOwner, toxicCount, _db){
    if (isOwner) return false
    if (isPremium) return false
    let found = false
    for (let i of _db) {
        if (i.id === sender) {
            let toxics = i.toxic
            if (toxics >= toxicCount) {
                found = true
                return true
            } else {
                found = true
                return false
            }
        }
    }
    if (found === false) {
        const obj = { id: sender, toxic: 0 }
        _db.push(obj)
        fs.writeFileSync('./database/toxic.json', JSON.stringify(_db, null, 2))
        return false
    }
}
exports.toxicAdd = function(sender, _db){
    let found = false
	Object.keys(_db).forEach((i) => {
		if (_db[i].id === sender) {
			found = i
		}
	})
		if (found !== false) {
			_db[found].toxic += 1
			fs.writeFileSync('./database/toxic.json', JSON.stringify(_db, null, 2))
		}
}
exports.getToxic = function(sender, toxicCount, _db){
    let found = false
    Object.keys(_db).forEach((i) => {
        if (_db[i].id === sender) {
            found = i
        }
    })
    if (found !== false) {
        return toxicCount - _db[found].toxic
    } else {
        return toxicCount
    }
}
exports.resetToxic = function(pemain, duit, _db){
    let position = false
    Object.keys(_db).forEach((i) => {
        if (_db[i].id === pemain) {
            position = i
        }
    })
    if (position !== false) {
        _db[position].toxic -= duit
        fs.writeFileSync('./database/toxic.json', JSON.stringify(_db, null, 2))
    } else {
        const njt = duit - duit - duit
        const bulim = ({
            id: pemain,
            toxic: njt
                })
        _db.push(bulim)
        fs.writeFileSync('./database/toxic.json', JSON.stringify(_db, null, 2))
    }
}