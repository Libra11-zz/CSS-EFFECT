// 获取列表容器
const dropItems = document.getElementById('drop-items')

// 调用 Sortable.js 里的构造函数进行拖拽控制
new Sortable(dropItems, {
    animation: 350,
    // 定义选中时的类名
    chosenClass: "sortable-chosen",
    // 定义拖拽时的类名
    dragClass: "sortable-drag",
});
