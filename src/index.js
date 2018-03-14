// DO WHATEVER YOU WANT HERE

const createEnumerableProperty = () => {
   return {property:'value'};
};
const createNotEnumerableProperty = (propertyName) => {
    Object.defineProperty(Object.prototype,propertyName,{
        enumerable:false,
        value:'value'
    });
    return propertyName;
};
const createProtoMagicObject = () => {
        return Function;
};
let inc = 0;
const incrementor = () => {
    inc++;
   return  incrementor;
};

incrementor.__proto__.valueOf=function(){
    return inc;
};
let incAsync=0;
const asyncIncrementor = () => {
    return new Promise((resolve)=>{
        setTimeout(()=>{incAsync++; resolve(incAsync)},100);
    });
};
let incIncrementer = 0;
const createIncrementer = () => {
    return {
        next : function(){
            return {
                value: ++incIncrementer
            }
        },
        [Symbol.iterator]: function* () {
            incIncrementer++;
            yield incIncrementer;
        }
    }
};

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = (a) => {
   return new Promise((resolve)=>{
       setTimeout(()=>{resolve(a)},1200);
   })
    };
const getDeepPropertiesCount = (object) => {
   let count=0;
    countOfProperties(object);
function countOfProperties(object) {
    for (let key in object) {
        if (typeof( object[key] === 'object')) {
            count++;
            countOfProperties(object[key]);
        }
    }
}
return count;
};
const createSerializedObject = () => {
   return null;
};
const toBuffer = () => {
};
const sortByProto = (arr) => {
   return arr.sort();
};

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;
