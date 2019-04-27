module.exports = {
    env: {
        browser: true,
        node: true,
        es6: true
    },
    parserOptions: {
        ecmaVersion: 9,
        sourceType: 'module',
    },
    rules: {
        // -------------------注释------------------- 
        // 注释写在代码上方
        'line-comment-position': [2, {
            position: 'above'
        }],

        // 建议注释前空一行
        'lines-around-comment': [1, {
            beforeBlockComment: true
        }],

        // 建议注释开头空格
        'spaced-comment': [1, 'always'],
        
        // -------------------代码风格-------------------
        // 缩进使用 4 个空格
        indent: [2, 4],

        // 行尾不使用 ;
        semi: [2, 'never'],

        // 驼峰命名
        camelcase: 2,

        // 单行最大长度100，忽略注释限制
        'max-len': [2, {
            code: 100,
            ignoreComments: true
        }],

        // 关键字前后留空
        'keyword-spacing': [2, {
            before: true,
            after: true
        }],

        // , 前不留空后留空
        'comma-spacing': [2, {
            before: false,
            after: true
        }],

        // 行尾不留空
        'no-trailing-spaces': 2,

        // 建议 () 内侧不留空
        'space-in-parens': [1, 'never'],

        // 建议 [] 内侧不留空
        'array-bracket-spacing': [1, 'never'],

        // 建议 {} 内侧不留空
        'object-curly-spacing': [1, 'never'],
        'block-spacing': [1, 'never'],

        // 建议块内侧不留空行
        'padded-blocks': [1, 'never'],

        // -------------------变量-------------------
        // 不能有未定义的变量
        'no-undef': 2,

        // 不要有未使用的变量
        'no-unused-vars': [2, 'all'],

        // 建议不使用链式变量定义赋值
        'no-multi-assign': 1,
        
        // -------------------块-------------------
        // { 前面留空
        'space-before-blocks': [2, 'always'],

        // 块的左大括号 { 应该与对应的语句在同一行
        'brace-style': [2, '1tbs'],

        // 不允许在 else 块中返回
        'no-else-return': 2,

        // 多行代码块需要用 {} 包裹
        'nonblock-statement-body-position': [2, 'beside'],

        // 建议 case 块用 {} 包裹
        'no-case-declarations': 1,
        
        // -------------------操作-------------------
        // 操作符前后留空
        'space-infix-ops': 2,

        // 比较 null 使用 ===
        'no-eq-null': 2,

        // 建议使用 === 比较
        eqeqeq: [1, 'always'],

        // 建议表达式超过最大长度时在操作符前换行
        'operator-linebreak': [1, 'before'],
        
        // 避免不需要的三元表达式
        'no-unneeded-ternary': 2,

        // 使用 () 包裹逻辑混合的操作表达式，除非优先级很清晰
        'no-mixed-operators': [2, {
            allowSamePrecedence: true
        }],

        // -------------------string-------------------
        // 使用单引号
        quotes: [2, 'single'],
        
        // 不使用无用的反斜杠
        'no-useless-escape': 2,

        // 不使用eval
        'no-eval': 2,

        // -------------------array-------------------
        // 不使用 new Array
        'no-array-constructor': 2,

        // -------------------object-------------------
        // 不使用 new Object
        'no-new-object': 2,

        // 对象属性key在需要时才使用引号
        'quote-props': [2, 'as-needed'],
        
        // 对象属性冒号前不留空，后留空
        'key-spacing': [2, {
            'beforeColon': false,
            'afterColon': true
        }],

        // 使用 . 操作符访问属性
        // 变量使用 [] 访问
        // 允许关键字使用 [] 访问
        'dot-notation': [2, {
            allowKeywords: true
        }],

        // -------------------function-------------------
        // 不使用 new Function
        'no-new-func': 2,

        // 构造函数使用大写驼峰
        'new-cap': 2,
        
        // 推荐使用函数表达式，使用箭头函数
        'func-style': [1, 'expression', {
            allowArrowFunctions: true
        }],

        // 立即执行函数外部用()包裹
        'wrap-iife': [2, 'outside'],

        // 不在循环内创建函数
        'no-loop-func': 2,

        // 函数名和 ( 之间不留空格
        'space-before-function-paren': [2, 'never'],

        // 左大括号 { 之前留空格
        'space-before-blocks': [2, 'always'],

        // 不对参数重新赋值，可以对参数属性修改
        'no-param-reassign': [2, {
            props: false
        }],

        // -------------------ES6-------------------
        // 不使用 var，用 let/const 代替
        'no-var': 2,

        // 使用模板代替字符串拼接
        'prefer-template': 2,

        // 建议对象和数组使用解构
        'prefer-destructuring': [1, {
            object: true,
            array: true
        }],

        // 建议使用 object 缩写
        'object-shorthand': 1,

        // 箭头前后留空
        'arrow-spacing': [2, {
            before: true,
            after: true
        }],

        // 建议箭头函数参数超过一个时才使用括号
        'arrow-parens': [1, 'as-needed'],

        // 建议箭头函数体需要时使用大括号
        'arrow-body-style': [1, 'as-needed'],

        // 箭头函数容易混淆时函数体用大括号，不允许小括号
        'no-confusing-arrow': [2, {
            allowParens: false
        }],
        
        // class中不能有重名的成员
        'no-dupe-class-members': 2,

        // 不能有重复的import
        'no-duplicate-imports': [1, {
            includeExports: true
        }],

        // ... 操作符前后不留空
        'rest-spread-spacing': [2, 'never']
    }
}
