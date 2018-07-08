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
</template>

<script>
export default {
    name: 'HelloWorld',
    data () {
        return {
          msg: 'Welcome to Your Vue.js App',
          visible: false,
          isDisabled: false
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
    .custom{
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
