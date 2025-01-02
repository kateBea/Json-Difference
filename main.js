const fs = require('fs');

const json1Path = './files/json1.json';
const json2Path = './files/json2.json';

const getDifference = (obj1, obj2) => {
    const diff = {};

    for (const key in obj1) {
        if (!obj2.hasOwnProperty(key)) {
            diff[key] = { from: obj1[key], to: undefined };
        } else if (JSON.stringify(obj1[key]) !== JSON.stringify(obj2[key])) {
            diff[key] = { from: obj1[key], to: obj2[key] };
        }
    }

    for (const key in obj2) {
        if (!obj1.hasOwnProperty(key)) {
            diff[key] = { from: undefined, to: obj2[key] };
        }
    }

    return diff;
};

const run = async () => {
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

run();