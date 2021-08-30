import { reactive } from "vue";
import utils from "@/utils";

interface ColumnInfoType {
    title: string
    content: string
    /** 计数 */
    count: number
    /** 参考链接 */
    readonly link: string
}

/** 栏目信息 */
export const columnInfo = reactive<ColumnInfoType>({
    title: "利用 vue 3 新增的 reactive 实现共享数据，所以不需要 vuex 了；也就是 hooks",
    content: `
    import { reactive } from "vue";
    import utils from "@/utils";
    
    interface ColumnInfoType {
        title: string
        content: string
        count: number
    }
    
    /** 栏目信息 */
    export const columnInfo = reactive<ColumnInfoType>({
        title: "",
        content: "",
        count: 1
    });
    
    /**
     * 更新栏目信息
     * @param value 
     */
    export function updateColumnInfo(value: Partial<ColumnInfoType>) {
        utils.modifyData(columnInfo, value);
    }
    `,
    count: 1,
    link: "https://juejin.cn/post/6844903904023429128"
});

/**
 * 更新栏目信息
 * @param value 
 */
export function updateColumnInfo(value: Partial<ColumnInfoType>) {
    utils.modifyData(columnInfo, value);
}