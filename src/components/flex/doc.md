# Flex 布局

## 基本用法

```html
<ayui-row>
    <ayui-col :span="12">
        <div class="flex-content">span:12</div>
    </ayui-col>
    <ayui-col :span="12">
        <div class="flex-content flex-content-light">span:12</div>
    </ayui-col>
</ayui-row>
<ayui-row>
    <ayui-col :span="8">
        <div class="flex-content">span:8</div>
    </ayui-col>
    <ayui-col :span="8">
        <div class="flex-content flex-content-light">span:8</div>
    </ayui-col>
    <ayui-col :span="8">
        <div class="flex-content">span:8</div>
    </ayui-col>
</ayui-row>
<ayui-row>
    <ayui-col :span="6">
        <div class="flex-content">span:6</div>
    </ayui-col>
    <ayui-col :span="6">
        <div class="flex-content flex-content-light">span:6</div>
    </ayui-col>
    <ayui-col :span="6">
        <div class="flex-content">span:6</div>
        </ayui-col>
    <ayui-col :span="6">
        <div class="flex-content flex-content-light">span:6</div>
    </ayui-col>
</ayui-row>
<ayui-row>
    <ayui-col :span="4">
        <div class="flex-content">span:4</div>
    </ayui-col>
    <ayui-col :span="4">
        <div class="flex-content flex-content-light">span:4</div>
    </ayui-col>
    <ayui-col :span="4">
        <div class="flex-content">span:4</div>
    </ayui-col>
    <ayui-col :span="4">
        <div class="flex-content flex-content-light">span:4</div>
    </ayui-col>
    <ayui-col :span="4">
        <div class="flex-content">span:4</div>
    </ayui-col>
    <ayui-col :span="4">
        <div class="flex-content flex-content-light">span:4</div>
    </ayui-col>
</ayui-row>

```

## 设置元素间距

```html
<ayui-row :gutter="10">
    <ayui-col :span="6">
        <div class="flex-content">span:6</div>
    </ayui-col>
    <ayui-col :span="6">
        <div class="flex-content flex-content-light">span:6</div>
    </ayui-col>
    <ayui-col :span="6">
        <div class="flex-content">span:6</div>
    </ayui-col>
    <ayui-col :span="6">
        <div class="flex-content flex-content-light">span:6</div>
    </ayui-col>
</ayui-row>
            
```

## Flex布局

### wrap（是否换行）

```html
<ayui-row type="flex" flexWrap="nowrap" :gutter="10">
    <ayui-col :span="6">
        <div class="flex-content">1</div>
    </ayui-col>
    <ayui-col :span="6">
        <div class="flex-content flex-content-light">2</div>
    </ayui-col>
</ayui-row>
<ayui-row type="flex" flexWrap="wrap" :gutter="10">
    <ayui-col :span="6">
        <div class="flex-content">1</div>
    </ayui-col>
    <ayui-col :span="6">
        <div class="flex-content flex-content-light">2</div>
    </ayui-col>
</ayui-row>
<ayui-row type="flex" flexWrap="reverse" :gutter="10">
    <ayui-col :span="6">
        <div class="flex-content">1</div>
    </ayui-col>
    <ayui-col :span="6">
        <div class="flex-content flex-content-light">2</div>
    </ayui-col>
</ayui-row>

```

### justify（主轴方向）

```html
<ayui-row type="flex">
    <ayui-col :span="6">
        <div class="flex-content">start</div>
    </ayui-col>
</ayui-row>
<ayui-row type="flex" justify="center">
    <ayui-col :span="6">
        <div class="flex-content">center</div>
    </ayui-col>
</ayui-row>
<ayui-row type="flex" justify="end">
    <ayui-col :span="6">
        <div class="flex-content">end</div>
    </ayui-col>
</ayui-row>
<ayui-row type="flex" justify="space-between">
    <ayui-col :span="6">
        <div class="flex-content">between</div>
    </ayui-col>
</ayui-row>
<ayui-row type="flex" justify="space-around">
    <ayui-col :span="6">
        <div class="flex-content">around</div>
    </ayui-col>
</ayui-row>

```

### align（侧轴方向）

```html
<ayui-row type="flex" gutter="10" align="flex-start">
    <ayui-col :span="12">
        <div class="flex-content flex-content-light">顶部对齐 -- flex-start</div>
    </ayui-col>
</ayui-row>
<ayui-row type="flex" gutter="10" align="center">
    <ayui-col :span="12">
        <div class="flex-content flex-content-light">居中对齐 -- center</div>
    </ayui-col>
</ayui-row>
<ayui-row type="flex" gutter="10" align="flex-end">
    <ayui-col :span="12">
        <div class="flex-content flex-content-light">底部对齐 -- flex-end</div>
    </ayui-col>
</ayui-row>

```

## 分栏偏移

```html
<ayui-row type="flex">
    <ayui-col :offset="6" span="6">
        <div class="flex-content">offset:6</div>
    </ayui-col>
    <ayui-col :span="6">
        <div class="flex-content flex-content-light">span:6</div>
    </ayui-col>
    <ayui-col :span="6">
        <div class="flex-content">span:6</div>
    </ayui-col>
</ayui-row>
<ayui-row type="flex">
    <ayui-col span="6">
        <div class="flex-content">span:6</div>
    </ayui-col>
    <ayui-col :offset="8" :span="6">
        <div class="flex-content flex-content-light">offset:8</div>
    </ayui-col>
    <ayui-col :span="6">
        <div class="flex-content">span:6</div>
    </ayui-col>
</ayui-row>
<ayui-row type="flex">
    <ayui-col span="6" :offset="6">
        <div class="flex-content">offset:6</div>
    </ayui-col>
    <ayui-col :span="6" :offset="6">
        <div class="flex-content">offset:6</div>
    </ayui-col>
</ayui-row>

```

## Prop

### row

| 字段 | 说明 | 类型 | 默认值
|----- | ----- | ----- | ----- 
| type | 布局方式，可选值为flex | String | -
| gutter | 列元素之间的间距（单位为px） | String/Number | -
| tag | 自定义元素标签 | String | div
| justify | Flex 主轴对齐方式，可选值为 start end center space-around space-between | String | start
| align | Flex 交叉轴对齐方式，可选值为 flex-start center flex-end | String | flex-start
| flexWrap | Flex是否换行，可选值为 nowrap wrap reverse | String | nowrap

### col

| 字段 | 说明 | 类型 | 默认值
|----- | ----- | ----- | ----- 
| span | 列元素宽度 | String/Number | -
| offset | 列元素偏移距离 | String/Number | - 

