/**
 * 戚都翁五星占排盘库
 *
 * 这是一个基于五星占传统占卜算法的排盘库，实现了完整的五星占卜、
 * 体用推算、旺相休废判断等功能。
 *
 * 五星占，又称"戚都翁传未先知时课"，以五星（辰星、荧惑、岁德、太白、镇星）
 * 为核心，通过月将、日宫、时辰的组合推算吉凶。
 *
 * @example
 * ```typescript
 * import { calculateDivination } from 'qiduweng-divination'
 *
 * const result = calculateDivination(3, 15, '辰')
 * console.log(result.fortune) // 输出：吉或凶
 * ```
 */
export declare const FIVE_STARS: {
    name: string;
    element: string;
}[];
export declare const EARTHLY_BRANCHES: string[];
export declare const HOUR_ELEMENTS: Record<string, string>;
export declare const MONTH_GENERALS: string[];
export declare const ELEMENT_RELATIONS: Record<string, {
    generates: string;
    controls: string;
}>;
export declare const PROSPERITY_TABLE: Record<string, Record<string, string>>;
/**
 * 排盘结果接口
 */
export interface DivinationResult {
    /** 月将 */
    monthGeneral: string;
    /** 日宫 */
    dayPosition: string;
    /** 用星 */
    useStar: string;
    /** 体五行 */
    bodyElement: string;
    /** 用五行 */
    useElement: string;
    /** 体用关系 */
    relationship: string;
    /** 吉凶 */
    fortune: string;
    /** 解释说明 */
    explanation: string;
    /** 季节 */
    season: string;
    /** 旺相休废表 */
    prosperityTable: Array<{
        element: string;
        status: string;
    }>;
}
/**
 * 排盘计算参数接口
 */
export interface DivinationParams {
    /** 月份 (1-12) */
    month: number;
    /** 日期 (1-30) */
    day: number;
    /** 时辰 */
    hour: "子" | "丑" | "寅" | "卯" | "辰" | "巳" | "午" | "未" | "申" | "酉" | "戌" | "亥";
}
/**
 * 计算五星占排盘结果
 * @param month 月份 (1-12)
 * @param day 日期 (1-30)
 * @param hour 时辰 (子、丑、寅、卯、辰、巳、午、未、申、酉、戌、亥)
 * @returns 排盘结果对象
 */
export declare function calculateDivination(month: number, day: number, hour: string): DivinationResult;
export declare const version = "1.0.0";
//# sourceMappingURL=index.d.ts.map