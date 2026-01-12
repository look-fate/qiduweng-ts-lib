# 戚都翁五星占排盘库

一个基于五星占传统占卜算法的 TypeScript/JavaScript 库，实现完整的五星占卜、体用推算、旺相休废判断等功能。

五星占，又称"戚都翁传未先知时课"，以五星（辰星、荧惑、岁德、太白、镇星）为核心，通过月将、日宫、时辰的组合推算吉凶。

## 特性

- ✅ 完整的五星占排盘算法
- ✅ 体用关系分析（体克用、用克体、体生用、用生体、比和）
- ✅ 五行旺相休废判断
- ✅ 吉凶自动分析
- ✅ 详细的解释说明
- ✅ TypeScript 支持，提供完整类型定义
- ✅ 零依赖，纯算法实现

## 安装

```bash
npm install qiduweng-divination
# 或
yarn add qiduweng-divination
# 或
pnpm add qiduweng-divination
```

## 使用方法

### TypeScript / ES6

```typescript
import { calculateDivination } from 'qiduweng-divination'

// 3月15日，辰时
const result = calculateDivination(3, 15, '辰')

console.log(result.fortune) // "吉"
console.log(result.explanation) // 详细解释
console.log(result.relationship) // "体克用"
```

### CommonJS

```javascript
const { calculateDivination } = require('qiduweng-divination')

const result = calculateDivination(3, 15, '辰')
console.log(result)
```

## API

### `calculateDivination(month, day, hour)`

计算五星占排盘结果。

#### 参数

- `month` (number): 月份 (1-12)
- `day` (number): 日期 (1-30)
- `hour` (string): 时辰，必须是以下之一：
  - `子`、`丑`、`寅`、`卯`、`辰`、`巳`、`午`、`未`、`申`、`酉`、`戌`、`亥`

#### 返回值

返回一个 `DivinationResult` 对象：

```typescript
interface DivinationResult {
  monthGeneral: string    // 月将
  dayPosition: string     // 日宫
  useStar: string         // 用星（含名称和五行）
  bodyElement: string      // 体五行
  useElement: string      // 用五行
  relationship: string     // 体用关系
  fortune: string         // 吉凶（"吉" 或 "凶"）
  explanation: string      // 详细解释
  season: string          // 季节（春、夏、秋、冬）
  prosperityTable: Array<{  // 旺相休废表
    element: string
    status: string
  }>
}
```

### 关系类型

- **体克用**: 吉 - 主动权在手，能够掌控局面
- **用克体**: 凶 - 受到外界制约，处于被动
- **体生用**: 凶 - 付出多回报少，耗损精力
- **用生体**: 吉 - 得到帮助，贵人相助
- **比和**: 吉 - 五行相同，气场和谐

### 旺相休废状态

- **旺**: 气最盛，力量最强
- **相**: 气次盛，力量较强
- **休**: 气衰，力量较弱
- **囚**: 气被囚，力量被束缚
- **死**: 气最衰，力量最弱

## 完整示例

```typescript
import { calculateDivination } from 'qiduweng-divination'

const result = calculateDivination(3, 15, '辰')

console.log('=== 排盘结果 ===')
console.log(`月将: ${result.monthGeneral}`)
console.log(`日宫: ${result.dayPosition}`)
console.log(`用星: ${result.useStar}`)
console.log(`体: ${result.bodyElement}`)
console.log(`用: ${result.useElement}`)
console.log(`关系: ${result.relationship}`)
console.log(`吉凶: ${result.fortune}`)
console.log(`解释: ${result.explanation}`)
console.log(`季节: ${result.season}`)

console.log('\n=== 旺相休废 ===')
result.prosperityTable.forEach(({ element, status }) => {
  console.log(`${element}: ${status}`)
})
```

## 导出常量

该库还导出了以下常量，方便在其他场景使用：

```typescript
import {
  FIVE_STARS,           // 五星数据
  EARTHLY_BRANCHES,     // 十二地支
  HOUR_ELEMENTS,        // 十二时辰五行
  MONTH_GENERALS,        // 十二月将
  ELEMENT_RELATIONS,    // 五行相生相克关系
  PROSPERITY_TABLE,     // 旺相休废表
} from 'qiduweng-divination'
```

## 项目结构

```
qiduweng-divination/
├── src/
│   └── index.ts          # 核心实现
├── dist/                 # 编译输出
├── package.json
└── README.md
```

## 构建

```bash
npm run build
```

## 许可证

MIT

## 贡献

欢迎提交 Issue 和 Pull Request！

## 致谢

基于五星占传统占卜算法，感谢中华传统文化的智慧结晶。
