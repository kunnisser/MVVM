class mount {
    constructor (el) {
        this.$el = this.isElementNode(el) ? el : document.querySelector(el);
        if (this.$el) {
            this.$fragment = this.node2Fragment(this.$el);
            this.init();
        }
    }

    node2Fragment (el) { // 将el元素提取为documentFragment 文档碎片 占位
        let fragment = document.createDocumentFragment(), child;
        while (child = el.firstChild) {
            fragment.appendChild(child);
        }
        return fragment;
    }

    isElementNode (el) {
        el.nodeType === 1;
    }

    init () {
        this.compiledElement(this.$fragment);
    }

    compiledElement (el) {
        let childNodes = el.childNodes;
        console.log(childNodes);
    }


}

export default mount;