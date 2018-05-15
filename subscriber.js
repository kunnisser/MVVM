class sub {
    constructor () {
        // 订阅器是用来管理watchers数组状态
        this.watchers = [];
    }

    addSub (watcher) {
        // 添加订阅者
        this.watchers.push(watcher);
    }

    notify () {
        // 分发通知
        this.watchers.forEach((watcher) => {
           watcher.update();
        });
    }
}

export default sub;