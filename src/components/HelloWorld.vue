<template lang="pug">
    div.element-ui-test
        el-button.el-icon-refresh(@click="visible=!visible") haha
        el-dialog(v-bind:visible.sync="visible" title="hello world")
            p try try
        el-row.custom.my-custom-layout(:gutter="20")
            el-col.bg-red(:span="12")
            el-col.bg-blue(:span="12")
        el-row.custom.my-custom-layout-2(:gutter="20")
            el-col(:span="5")
            el-col(:span="15" :offset="4")
        el-row
            el-button(type="primary" round icon="el-icon-success" @click="isButtonDisabled") 是否可用
            el-button(type="danger" plain v-bind:disabled="isDisabled") 按钮
        el-row
            el-button-group
                el-button(type="primary" icon="el-icon-share" size="small")
                el-button(type="primary" icon="el-icon-delete" size="large")
                el-button(type="primary" :loading="true") 加载中
        el-row
            el-select(v-model="selectedItem" multiple placeholder="请选择")
                el-option(v-for="item in selectItems" 
                :key="item.value"
                :value="item.value"
                :label="item.label"
                )
        el-row
            el-switch(v-model="valueTrue" active-color="green" inactive-color="red"
            )
            span {{valueTrue ? '开' : '关'}}
        el-row
            el-table(:data="tableData" stripe)
                el-table-column(prop="name" label="姓名")
                el-table-column(prop="age" label="年龄")
                el-table-column(prop="gender" label="性别")
</template>

<script>
export default {
    name: 'HelloWorld',
    data () {
        return {
            msg: 'Welcome to Your Vue.js App',
            visible: false,
            isDisabled: false,
            valueTrue: false,
            selectedItem: ['2'],
            selectItems: [
                {
                    label: '选项一',
                    value: '1'
                },
                {
                    label: '选项二',
                    value: '2'
                },
                {
                    label: '选项三',
                    value: '3'
                }
            ],
            tableData: [
                {
                    name: 'jack',
                    age: 66,
                    gender: 'male'
                },
                {
                    name: 'lee',
                    age: 13,
                    gender: 'female'
                },
                {
                    name: 'alex',
                    age: 22,
                    gender: 'male'
                }
            ]
        }
    },
    methods: {
        isButtonDisabled() {
            this.isDisabled = !this.isDisabled;
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.element-ui-test{
    font-size: 18px;
    line-height: 20px;
    .el-row{
        margin: 10px 0;
        height: 40px;
        .el-col{
            border: 1px solid #000;
            border-radius: 5px;
            height: 40px;
            background: red;
        }
    }
}

</style>
