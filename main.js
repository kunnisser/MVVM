import MVVM from './mvvm';

const testData = {
    a: 1,
    b: 2,
    c: {
        name: ''
    }
};
new MVVM(testData);

window.changeVal = (e) => {
    testData.c.name = e.value;
};


