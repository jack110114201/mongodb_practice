
var showCursorItems = function(cursor){
    while (cursor.hasNext()) {
        printjson(cursor.next());
    }
}

var db = db.getSisterDB("tfb102");

db.food.drop();

db.food.insert({_id:1,fruit:['apple','cherry','banana']});
db.food.insert({_id:2,fruit:['apple','watermelon','orange']});
db.food.insert({_id:3,fruit:['cherry','banana','apple']});
db.food.insert({_id:4,fruit:['cherry','apple']});
db.food.insert({_id:5,fruit:['apple','cherry']});
db.food.insert({_id:6,fruit:['banana']});



 // cursor = db.food.find({"fruit":"banana"});
 // showCursorItems(cursor);

 // cursor = db.food.find({"fruit":["banana"]});
 // showCursorItems(cursor);

// 在 [] 裡，數量及位置要相同才會找到
// cursor = db.food.find({"fruit":["apple","cherry"]});
// showCursorItems(cursor);

// cursor = db.food.find({},{_id:0});
// showCursorItems(cursor);


// 尋找cherry 在fruit的第1個位置上(位置從0開始算)
// 用fruit.1的方式 需要+" "
// print("fruit.1':'orange' -------------------------------------------")
// cursor = db.food.find({"fruit.1":"cherry"});
// showCursorItems(cursor);


// print("$all:['apple','cherry'] -------------------------------------------")
// cursor = db.food.find({fruit:['apple','cherry']})
// cursor = db.food.find({
                        // fruit:{
                            // $all:['apple','cherry']
                        // }
                      // }
// );
// // // // // print(cursor);
// showCursorItems(cursor);

// print("{fruit:{$size:2}} -------------------------------------------")
// 找長度是2的資料
// cursor = db.food.find({fruit:{$size:2}});
// showCursorItems(cursor);

// print("{fruit:{$slice:2}}-------------------------------------------")
// 只想看2筆資料(從首位開始找)
// cursor = db.food.find({},{fruit:{$slice:2}});
// showCursorItems(cursor);

// print("{$slice:-1}} -------------------------------------------")
// 只想看2筆資料(從末位開始找)
// cursor = db.food.find({},{fruit:{$slice:-2}});
// showCursorItems(cursor);


// print("{$slice:[2,1]},_id:0} -------------------------------------------")
// 1 是index
// 2 是數量
 // 從第2筆資料開始抓2筆資料
// cursor = db.food.find({},{fruit:{$slice:[1,2]}});
// showCursorItems(cursor);



// var f = function(x){
  // print(x * 2)
// };

// 把FUNCTION放進FUNCTION裡
// [3,4,5,6,7,8].forEach(f); 

// 類似lamda的寫法
//[3,4,5,6,7,8].forEach((x) => print(x*2)); 

//var fun = function(x){print(x*2);}

//[3,4,5,6,7,8].forEach(function(x){print(x*2);});




// print("foreach-------------------------------------------")
cursor = db.food.find({fruit:'banana'});
// //print(cursor);
// cursor.forEach(function(json){ print('first furit:['+json.fruit[0]+"] ((((_id:"+json._id+")");})
// cursor 有支援forEach()
cursor.forEach(function(json){ print(json.fruit[0])})

//解釋
cursor = [{a:1},{b:2}]
cursor.forEach(f)
f({a:1})
f({b:1})


// cursor.forEach((data) =>  print(`
// first    
//  furit:[ ${data.fruit} ] 
//  (_id:
//  ${data._id})`))


