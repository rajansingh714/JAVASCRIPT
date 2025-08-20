console.log("krishna" + { a: 20 });

/**
 * "krishna" is laready a Primitive
 * {"a" : 20} is not a primiteive, so, we call toPrimitive without a hint
 * means hint -> number
 * we first call value on {"a": 10} --> and it returns same object
 * we call toString -> toSTring will return '[boject object] which is a string
 */

console.log(10 - { a: 89 });

/**
 * 10 is already a number
 * {a: 45} is going to get converted ToNumber, and this is an object,
 * for Object we call ToPrimitive with hint number
 * first we call valueOf -> it returns the same object --> {"a": 45}
 * then we call toString  ---> it return '[object object]' which is primitive
 *
 * 10 - NaN = NaN
 *
 */
