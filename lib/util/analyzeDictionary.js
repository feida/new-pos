/**
 * @Description:
 * @author guofeng
 * @date 2019-05-22 10:47
 */

const readline = require("readline");
const fs = require("fs")
let dirMap = {}
exports.formatDictionary = function (callback) {

    rl = readline.createInterface({
        input: fs.createReadStream( "../../../main.sql")
    })
    rl.on("line", (line) => {
        line = line.trimStart().trimEnd();
        if (line.indexOf("CREATE TABLE") != -1) {
            line = line.replace(/\(|\)|TEXT|INTEGER|PRIMARY|1|0|true|false|KEY|DATETIME|DEFAULT|NULL|NOT|,|;|''|\**:\**|`/g, "");
            line = line.split(" ").filter(item => item !=='')
            let rootKey = line[2]
            let arr = line.slice(3, line.length);
            let itemMap = {}
            for (var item of arr) {
                itemMap[item] = item
            }
            dirMap[rootKey] = itemMap
        }
    })
    rl.on("close", function () {
        callback(null,dirMap)
    })
}
// formatDictionary(function (dirMap) {
//     console.log("-------------*---------------", dirMap)
// })