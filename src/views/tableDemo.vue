<template>
    <div class="tree" v-if="data.name">
        <table>
            <tbody>
            <tr align="center">
                <td class="tree-node"
                    :colspan="data.child ? data.child.length : 1"
                    :class="{'tree-node_last': !data.child, 'tree-node_level_one': data.isLevelOne}">
                    <div class="tree-node-content">
                        <span>{{ data.name }}</span>
                    </div>
                </td>
            </tr>
            <tr v-if="data.child">
                <td class="tree-node-child" v-for="(child, index) in data.child" :key="index">
                    <table class="tree-node-child-line">
                        <tbody>
                        <tr>
                            <td :class="{'tree-node_hide': index === 0}"></td>
                            <td :class="{'tree-node_hide': index === (data.child.length - 1)}"></td>
                        </tr>
                        </tbody>
                    </table>
                    <tree-component :treeData="child"></tree-component>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script type="text/javascript">
    /**
     *  树形组件
     *
     *  @props treeData {object} 树形组件对象
     */
    export default {
        name: "tree-component",
        props: {
            treeData: Object,
            default: () => {"child":[{"category":"总公司","catenumber":"1","child":[{"companyid":44,"count":0,"groupid":25,"id":20,"name":"拂晓","owner":"拂晓2","parentid":0,"phone":"18195082631","status":0,"type":2}],"count":0,"groupid":25,"id":44,"name":"腾讯","number":"3443242","status":0,"type":1}],"count":0,"id":25,"name":"歌山建设","owner":"杨庄镇","phone":"13654614588","status":0,"type":0,"isLevelOne":true}
        },
        watch: {
            treeData: {
                handler: function(data){
                    if(!data.child || !data.child.length) {
                        delete data.child;
                    }
                    this.data = data;
                },
                immediate: true
            }
        },
        data() {
            return {
                data: {}
            }
        },
        created () {
        }
    }
</script>

<style rel="stylesheet/scss" lang="scss">
    .tree {
        /*overflow-x: auto;*/

        table {
            height: 0;
            margin: 0 auto;
            /*min-width: 100%;*/
        }

        &-node {
            padding-bottom: 24px;
            position: relative;
            // background: url('../../assets/images/tree-line.gif') center center repeat-y;
            text-align: center;
            white-space:nowrap;

            &-content {
                padding: 5px 16px;
                // background: $text-color-primary;
                color: #fff;
                border-radius: 4px;
                display: inline-block;
            }

            &_last {
                padding-bottom: 0;
            }

            &_level_one {
                padding-left: 20px;
                padding-right: 20px;
            }

            &_hide {
                background: none !important;
            }

            &-child {
                position: relative;
                padding: 0 20px;
                vertical-align: top;

                .tree-node {
                    padding-top: 24px;
                }

                &-content {
                    padding: 5px 16px;
                    // background: $text-color-primary;
                    color: #fff;
                    border-radius: 4px;
                    white-space:nowrap;
                }


                &-line {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    width: 100%;

                    td {
                        width: 50%;
                        background: #979797;
                        height: 1px;
                    }
                }
            }
        }
    }
</style>
