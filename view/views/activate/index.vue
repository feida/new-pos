<template>
    <div class="content" style="background: #eeeeee; padding-top: 142px;">
        <div style="height: 380px;width: 633px; margin: 0px auto 0px auto; background: #FFFFFF;">
            <img src="../../assets/shaolei_img/logo.jpg" alt="resto-logo" style="height: 86px;width: 86px;">
            <div class="content">
                <p style="margin-top: 32px;font-size: 22px;color: #666 ">请输入产品激活码</p>
                <input type="text" name="" class="code-input" autofocus autoComplete="off"/>
                <hr class="code-line"/>
                <input type="text" name="" class="code-input" autoComplete="off"/>
                <hr class="code-line"/>
                <input type="text" name="" class="code-input" autoComplete="off"/>
                <hr class="code-line"/>
                <input type="text" name="" class="code-input" autoComplete="off"/>
                <br>
                <button class="btn-activation" disabled id="activation" @click="activateClick">立即使用</button>
            </div>
        </div>
        <div class="right-info">欢迎使用Resto+餐饮管理系统</div>
        <div class="keybord">
            <span v-for="item in keyBoard" @click="keyBoardHandler(item)">{{item}}</span>
        </div>
        <div class="loading" v-if="loading">
            <div class="loading-content">
                正在激活 ...
            </div>
        </div>
    </div>
</template>

<script>

    import {activeConfig, activeInit} from '@/api/activate'
    export default {
        name: 'activate',
        data() {
            return {
                keyBoard: [1,2,3,4,5,6,7,8,9,'清空',0,'退格'],
                codeInputs: null,
                loading: false
            }
        },
        mounted() {
            //  获取所有的文本框
            this.codeInputs = document.getElementsByClassName("code-input");
            //  激活按钮
            var activationBtn = document.getElementById("activation");
            //  设置当前选中的文本框（默认为第一个）
            var currentInput = this.codeInputs[0];

            var loading = '';
            //  绑定文本框事件
            for (var i = 0; i < this.codeInputs.length; i++) {
                //  自动切换
                this.codeInputs[i].addEventListener("input", function (e) {
                    activationBtn.disabled = true;
                    if (this.value.length == 0) {
                        console.log("pre input ... ");
                        var preElem = this.previousElementSibling.previousElementSibling;
                        if (preElem && !e.detail) {
                            preElem.focus();
                            currentInput = preElem;
                        }
                    }
                    if (this.value.length >= 4) {
                        this.value = this.value.substring(0, 4);
                        var nextElem = this.nextElementSibling.nextElementSibling;
                        if (nextElem.type == "text") {
                            console.log("next input ... ");
                            nextElem.focus();
                            currentInput = nextElem;
                        } else {
                            activationBtn.disabled = false;
                        }
                    }
                    if (this.selectionStart == 0 && this.value.length > 0) {
                        this.setSelectionRange(this.value.length, this.value.length);
                    }
                });

                //  切换当前选中的文本框，并且将光标移动到最后一位。
                this.codeInputs[i].addEventListener("click", function () {
                    currentInput = this;
                    if (this.selectionStart < this.value.length) {
                        var that = this;
                        setTimeout(function function_name(argument) {
                            that.setSelectionRange(that.value.length, that.value.length);
                        }, 1);
                    }
                });

                //  绑定 键盘删除键
                this.codeInputs[i].addEventListener("keydown", function (e) {
                    if (e.key == "Backspace" && currentInput.value.length == 0) {
                        k.focusPreInput();
                    } else if (e.key == "Enter") {
                        activationBtn.click();
                    }
                });
            }


            //  绑定虚拟键盘事件
            var keybord = document.getElementsByClassName("keybord")[0];
            var keys = keybord.querySelectorAll("span");
            for (var i = 0; i < keys.length; i++) {
                var key = keys[i];
                key.addEventListener("click", function () {
                    var option = null;
                    var val = this.innerText;
                    console.log(val);
                    if (val == "退格") {
                        currentInput.value = currentInput.value.substring(0, currentInput.value.length - 1);
                    } else if (val == "清空") {
                        currentInput.value = "";
                        option = {
                            empty: true
                        };
                    } else {
                        currentInput.value += val;
                    }
                    currentInput.focus();
                    currentInput.dispatchEvent(new CustomEvent('input', {
                        detail: option
                    }));
                })
            }
        },
        methods: {
            activateClick() {
                var activationKey = "";
                for (var i = 0; i < this.codeInputs.length; i++) {
                    activationKey += this.codeInputs[i].value;
                }
                this.loading = true
                activeInit({activate: activationKey}).then(response => {
                    if (!response.ok) {
                        this.loading = false
                        this.$message.error(response.message||"请输入正确的key值");
                    } else {
                        this.loading = false
                        this.$message.success("激活成功，请稍等")
                        this.$router.push({path: '/login'})
                    }
                })

            }
        }
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    .content {
        width: 100%;
        height: 100%;
        margin: 0px;
        padding: 0px;
        text-align: center;
        user-select: none;
    }

    .logo {
        width: 400px;
        /* width / height = 5.4*/
        height: 75px;
        margin-top: 5%;
        margin-bottom: 1%;
    }

    img {
        margin-top: -43px;
    }

    .content {
        /*margin-top: 80px;*/
    }

    .code-input {
        width: 100px;
        height: 50px;
        line-height: 50px;
        font-size: 24px;
        color: #333;
        text-align: center;
        background-color: #eee;
        border: none;
        margin-top: 55px;
        outline: none;
        z-index: 100;
    }

    .code-line {
        height: 8px;
        border: none;
        border-top: 1px solid #eee;
        width: 30px;
        margin: 0px;
        line-height: 50px;
        vertical-align: center;
        display: inline-block;
        margin-top: 80px;
        z-index: 100;
    }

    .btn-activation {
        width: 250px;
        height: 50px;
        margin-top: 72px;
        font-size: 22px;
        color: #FFFFFF;
        border-radius: 4px;
        background-color: #000000;
        border: 1px solid #6A7989;
        cursor: pointer;
    }

    .btn-activation:disabled {
        cursor: not-allowed;
    }

    .keybord {
        position: absolute;
        right: 0px;
        bottom: 0px;
        height: 35%;
        width: 20%;
        min-height: 300px;
        min-width: 300px;
        border: 1px solid rgba(255, 255, 255, .8);
        font-size: 0px;
        padding: 0px;
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        align-items: center;
        border-radius: 5px;
        background: linear-gradient(60deg, rgba(158, 180, 185, 1), rgba(222, 157, 193, 1) 50%, rgba(169, 156, 173, 1) 100%);
        box-shadow: 0 0.05em 0.1em rgba(0, 0, 0, .5);
    }

    .keybord > span {
        display: inline-block;
        text-align: center;
        font-size: 30px;
        font-weight: bold;
        width: 26%;
        height: 20%;
        border: 1px solid rgba(255, 255, 255, .8);
        cursor: pointer;
        border-radius: 5px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        background-color: rgba(255, 255, 255, .8);
        box-shadow: 0 0.2em 0.4em rgba(0, 0, 0, .5);
    }

    .loading {
        position: fixed;
        z-index: 10000;
        background-color: hsla(0, 0%, 100%, .9);
        margin: 0;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        transition: opacity .3s;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }

    .loading-content {
        width: 300px;
        height: 300px;
        font-size: 28px;
        font-weight: bold;
    }

    .hide {
        display: none;
    }

    .right-info {
        width: 294px;
        height: 40px;
        background-color: #000;
        color: #fff;
        line-height: 40px;
        position: absolute;
        right: 0;
        top: 44px;
        border-radius: 45px 0 0 45px;
    }
    .code-input-input {
        height: 100%;
        position: absolute;
        width: 100%;
        outline: none;
        border: none;
        color: transparent;
        text-shadow: 0 0 0 transparent;

    }
    .code-input-main {
        width: 80%;
        margin: 0 auto;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        position: relative;
    }


</style>
