function deepCompare(obj1, obj2) {

    let keys1 = Object.keys(obj1);
    let keys2 = Object.keys(obj2);

    // 1. same amount of keys
    if (keys1.length !== keys2.length) {
        return false;
    }

    // 2 + 3. same keys AND same values
    for (let key of keys1) {

        // key must exist in both
        if (!obj2.hasOwnProperty(key)) {
            return false;
        }

        // values must match
        if (obj1[key] !== obj2[key]) {
            return false;
        }
    }

    return true;
}

console.log(deepCompare(fruits, fruits2));
