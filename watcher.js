import Sub from './subscriber';
class watcher {
    // 1、在自身实例化时往属性订阅器(dep)里面添加自己
    // 2、自身必须有一个update()方法
    // 3、待属性变动dep.notice()通知时，能调用自身的update()方法，并触发Compile中绑定的回调，则功成身退。
    constructor (data, key, cb) {
        this.data = data;
        this.key = key;
        this.cb = cb;
        this.value = this.get();
    }
    get () {
        Sub.target = this;
        let value = this.data[this.key];
        Sub.target = null;
        return value;
    }

    update () {
        let [newValue, oldValue] = [this.get(), this.value];
        newValue !== oldValue && (
            this.value = newValue,
                this.cb.call(this.data, newValue, oldValue) // 比较新旧数据变化，执行回调事件
        );
    }
}
export default watcher;
