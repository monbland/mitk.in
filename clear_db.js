
const db = require("./server/plugins/db")
const hui = async function() { 
  return await db.list(
      'pageItem',
    ).then(
      matches => {
        return matches.map(match => db.get(match).then(value => {
          return JSON.parse(value)
        }))
      }
    )
 }
hui().then(a => {
  console.log(a)
})