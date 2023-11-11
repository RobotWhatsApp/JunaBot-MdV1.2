const fs = require('fs')

exports.addCode = function(sender, code, _db){
    let position = false
    Object.keys(_db).forEach((i) => {
        if (_db[i].id === sender) {
            position = i
        }
    })
    if (position !== false) {
        _db[position].code += code
        fs.writeFileSync('./database/daftar.json', JSON.stringify(_db, null, 2))
    } else {
        const bulin = ({
            id: sender,
            code: code
                })
        _db.push(bulin)
        fs.writeFileSync('./database/daftar.json', JSON.stringify(_db, null, 2))
    }
}
exports.getCode = function(sender, _db){
    let position = false
    Object.keys(_db).forEach((i) => {
        if (_db[i].id === sender) {
            position = i
        }
    })
    if (position !== false) {
        return _db[position].code
    } else {
        return 0
    }
}