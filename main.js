const fs = require('fs');

const getDifference = (obj1, obj2) => {
    const diff = {};

    // Check keys in obj1
    for (const key in obj1) {
        if (!obj2.hasOwnProperty(key)) {
            diff[key] = { from: obj1[key], to: undefined };
        } else if (typeof obj1[key] === 'object' && typeof obj2[key] === 'object') {
            const nestedDiff = getDifference(obj1[key], obj2[key]);
            if (Object.keys(nestedDiff).length > 0) {
                // Add only if there are differences in the nested object
                diff[key] = nestedDiff;
            }
        } else if (JSON.stringify(obj1[key]) !== JSON.stringify(obj2[key])) {
            diff[key] = { from: obj1[key], to: obj2[key] };
        }
    }

    // Check keys in obj2 that are not in obj1
    for (const key in obj2) {
        if (!obj1.hasOwnProperty(key)) {
            diff[key] = { from: undefined, to: obj2[key] };
        }
    }

    return diff;
};
const run = async (json1Path, json2Path) => {
    console.info(`Comparison: '${json1Path}' and '${json1Path}'`);

    try {
        const contentesFile1 = await fs.readFileSync(json1Path, 'utf8');
        const contentesFile2 = await fs.readFileSync(json2Path, 'utf8');
    
        const object1 = JSON.parse(contentesFile1);
        const object2 = JSON.parse(contentesFile2);
    
        console.info(object1);
        console.info(object2);

        const differences = getDifference(object1, object2);

        console.info("Differences:", differences);
    
    } catch (error) {
        console.error(error);
    }

    
}

const json1Path = './files/json1.json';
const json2Path = './files/json2.json';
run(json1Path, json2Path);