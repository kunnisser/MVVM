import Sub from './subscriber';
import Mount from './mount';

class MVVM {
    constructor (data){
        this.state = data; // vue的data
        this.beforeCreate();
        this.created();
        this.beforeMount();
        this.mounted();
    }

    beforeCreate () {
        // 数据劫持
        this.observer(this.state); // 迭代对数据对象的每个属性节点进行watcher设置
    }

    created () {
        // 数据劫持完成
    }

    beforeMount () {
        // dom渲染 compiled data
        new Mount('#vue'); {{name}}
    }

    mounted () {
        // <div>123</div>
    }

    observer (data) {
        if (!data || typeof data !== 'object') {
            return;
        }
        Object.keys(data).forEach((key) => {
            this.defineReactive(data, key, data[key]);
        });
    }

    defineReactive (data, key, val) {
        let sub = new Sub();
        // 监听子属性
        this.observer(val);
        Object.defineProperty(data, key, {
            enumerable: !0,
            configurable: !1,
            get: () => {
                Sub.target && sub.addSub(Sub.target);
                return val;
            },
            set: (newVal) => {
                if (newVal === val) {
                    return;
                }
                console.log('input 输入：' + newVal);
                val = newVal;
                sub.notify();
            }
        });
    }
}

export default MVVM;