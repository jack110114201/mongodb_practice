db = connect("localhost:27017/tfb102");

var showCursorItems = function(cursor){
    while (cursor.hasNext()) {
        printjson(cursor.next());
    }
}

db.iiiCollection.drop();

for(var i = 0; i < 100; i++){
    db.iiiCollection.insert({age:i,name:'user'+i});
}


//cursor = db.iiiCollection.find({},{_id:0,name:1});
//showCursorItems(cursor);


print('------------between the ages of 20 and 30   -----------------');

 // cursor = db.iiiCollection.find({age:{$gte:20,$lte:30}},{_id:0,age:1,name:1});
 // showCursorItems(cursor);

// 不建議用此方法，速度比較慢
// cursor = db.iiiCollection.find("this.age >= 20 && this.age <= 30")
// showCursorItems(cursor);



 print('------------about $in -----------------');
 // cursor = db.iiiCollection.find(
 // {age:{$in:[25,36,47,99]}},
 // {age:1,name:1,_id:0}
 // );
 // showCursorItems(cursor);


//print('------------about $nin-----------------');
//cursor = db.iiiCollection.find(
// {age:{$nin:[20,21,22,23,24,25,26,27,28,29,30,8,16]}},
//  {age:1,name:1,_id:0}
// );
// showCursorItems(cursor);


// 正規表達式
// cursor = db.iiiCollection.find(
//  {"name":/^user[^1-5][7-8]$/},
//  {age:1,name:1,_id:0}
// );
// showCursorItems(cursor);






















