本项目是仿照：http://www.emberjs.cn/guides/getting-started/planning-the-application所做，
详情请看上述的网址。

项目主要功能
为用户提供一个todos的列表，并且会随着用户添加或移除todos进行增长与缩减。

从一个 <input> 框接收文本作为新建todos的入口，当点击 <enter> 键时，创建一项，并在列表下方显示。

为每一个todo提供一个 checkbox 用于切换完成与未完成状态。新建的todo默认为未完成状态。

显示所有未完成的todos的数量，并在添加新todos和现有todos完成时，动态改变显示的值。

提供导航链接，使用户能切换显示全部（all）、未完成（incomplete）与完成（completed）的todos。

提供一个按钮用于提示用户当前已完成的todos数目，并在点击时移除所有已完成的todos。当无已完成todos时，此按钮不显示。

为每一个todo提供一个删除按钮，这个按钮显示为一个红色的X，并只在用户鼠标移动到这个todo上时显示。

提供一个 checkbox 用于切换列表中所有的todos的完成与未完成状态。而且，当所有的todos状态为完成时，它自动变为勾选状态。

允许用户双击某一个todo，显示一个 textfield 用于修改这个todo。点击 <enter> 键或者当鼠标焦点从这个 textfield 移除时，持久化更改的内容。

使用 本地存储(localstorage) 机制保存用户的todos列表，在应用程序启动时重新加载。

