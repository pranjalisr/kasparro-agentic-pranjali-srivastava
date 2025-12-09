module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/Downloads/agentic-content-generation (2)/src/agents/base-agent.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Base agent class with common functionality
__turbopack_context__.s([
    "BaseAgent",
    ()=>BaseAgent
]);
class BaseAgent {
    log(message) {
        console.log(`[${this.name}] ${message}`);
    }
    logError(error) {
        console.error(`[${this.name}] ERROR: ${error}`);
    }
}
}),
"[project]/Downloads/agentic-content-generation (2)/src/blocks/question-generator.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Question generator block that creates categorized FAQs
__turbopack_context__.s([
    "QuestionGeneratorBlock",
    ()=>QuestionGeneratorBlock
]);
class QuestionGeneratorBlock {
    name = "QuestionGenerator";
    description = "Generates structured user questions from product data";
    execute(product) {
        const questions = [];
        // Informational questions
        questions.push({
            question: `What is ${product.name}?`,
            category: "Informational",
            keyword: "product-intro"
        }, {
            question: `What are the key ingredients in ${product.name}?`,
            category: "Informational",
            keyword: "ingredients"
        }, {
            question: `What are the main benefits of ${product.name}?`,
            category: "Informational",
            keyword: "benefits"
        });
        // Safety & Side Effects
        questions.push({
            question: `Is ${product.name} safe for sensitive skin?`,
            category: "Safety",
            keyword: "sensitivity"
        }, {
            question: `What are the side effects of ${product.name}?`,
            category: "Safety",
            keyword: "side-effects"
        }, {
            question: `Who should not use ${product.name}?`,
            category: "Safety",
            keyword: "contraindications"
        });
        // Usage questions
        questions.push({
            question: `How do I use ${product.name}?`,
            category: "Usage",
            keyword: "usage-instructions"
        }, {
            question: `How often should I use ${product.name}?`,
            category: "Usage",
            keyword: "frequency"
        }, {
            question: `Can I use ${product.name} with other products?`,
            category: "Usage",
            keyword: "compatibility"
        });
        // Purchase & Value
        questions.push({
            question: `How much does ${product.name} cost?`,
            category: "Purchase",
            keyword: "pricing"
        }, {
            question: `Where can I buy ${product.name}?`,
            category: "Purchase",
            keyword: "availability"
        }, {
            question: `Is ${product.name} worth the price?`,
            category: "Purchase",
            keyword: "value"
        });
        // Comparison
        questions.push({
            question: `How does ${product.name} compare to similar products?`,
            category: "Comparison",
            keyword: "competitive-analysis"
        }, {
            question: `What makes ${product.name} different?`,
            category: "Comparison",
            keyword: "differentiation"
        });
        // Results & Expectations
        questions.push({
            question: `When will I see results from ${product.name}?`,
            category: "Results",
            keyword: "timeline"
        });
        return questions;
    }
}
}),
"[project]/Downloads/agentic-content-generation (2)/src/templates/template-engine.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Template engine that defines content structure and composition rules
__turbopack_context__.s([
    "ComparisonPageTemplate",
    ()=>ComparisonPageTemplate,
    "FAQTemplate",
    ()=>FAQTemplate,
    "ProductPageTemplate",
    ()=>ProductPageTemplate
]);
class FAQTemplate {
    name = "FAQTemplate";
    description = "Template for generating FAQ pages from questions and answers";
    fields = [
        {
            name: "title",
            type: "string",
            required: true,
            description: "FAQ page title"
        },
        {
            name: "productName",
            type: "string",
            required: true,
            description: "Product name"
        },
        {
            name: "faqs",
            type: "array",
            required: true,
            description: "Array of Q&A pairs"
        },
        {
            name: "categories",
            type: "array",
            required: true,
            description: "FAQ categories"
        }
    ];
    rules = [];
    compose(blocks) {
        return {
            title: blocks.get("title") || "Frequently Asked Questions",
            productName: blocks.get("productName"),
            faqs: blocks.get("faqs") || [],
            categories: blocks.get("categories") || [],
            generatedAt: new Date().toISOString()
        };
    }
}
class ProductPageTemplate {
    name = "ProductPageTemplate";
    description = "Template for generating product description pages";
    fields = [
        {
            name: "title",
            type: "string",
            required: true,
            description: "Page title"
        },
        {
            name: "overview",
            type: "string",
            required: true,
            description: "Quick overview"
        },
        {
            name: "ingredients",
            type: "string",
            required: true,
            description: "Ingredients block"
        },
        {
            name: "benefits",
            type: "string",
            required: true,
            description: "Benefits block"
        },
        {
            name: "usage",
            type: "string",
            required: true,
            description: "Usage instructions"
        },
        {
            name: "skinType",
            type: "string",
            required: true,
            description: "Skin type info"
        },
        {
            name: "sideEffects",
            type: "string",
            required: true,
            description: "Safety info"
        },
        {
            name: "pricing",
            type: "string",
            required: true,
            description: "Price info"
        }
    ];
    rules = [];
    compose(blocks) {
        return {
            title: blocks.get("title") || "Product Information",
            sections: {
                overview: blocks.get("overview"),
                ingredients: blocks.get("ingredients"),
                benefits: blocks.get("benefits"),
                usage: blocks.get("usage"),
                skinType: blocks.get("skinType"),
                sideEffects: blocks.get("sideEffects"),
                pricing: blocks.get("pricing")
            },
            generatedAt: new Date().toISOString()
        };
    }
}
class ComparisonPageTemplate {
    name = "ComparisonPageTemplate";
    description = "Template for generating product comparison pages";
    fields = [
        {
            name: "title",
            type: "string",
            required: true,
            description: "Comparison title"
        },
        {
            name: "productA",
            type: "object",
            required: true,
            description: "First product"
        },
        {
            name: "productB",
            type: "object",
            required: true,
            description: "Second product"
        },
        {
            name: "attributes",
            type: "array",
            required: true,
            description: "Comparison attributes"
        },
        {
            name: "verdict",
            type: "string",
            required: false,
            description: "Comparison verdict"
        }
    ];
    rules = [];
    compose(blocks) {
        return {
            title: blocks.get("title") || "Product Comparison",
            comparison: {
                productA: blocks.get("productA"),
                productB: blocks.get("productB"),
                attributes: blocks.get("attributes") || []
            },
            verdict: blocks.get("verdict"),
            generatedAt: new Date().toISOString()
        };
    }
}
}),
"[project]/Downloads/agentic-content-generation (2)/src/agents/faq-agent.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// FAQ Agent: Responsible for generating FAQ pages
__turbopack_context__.s([
    "FAQAgent",
    ()=>FAQAgent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$agentic$2d$content$2d$generation__$28$2$292f$src$2f$agents$2f$base$2d$agent$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/agentic-content-generation (2)/src/agents/base-agent.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$agentic$2d$content$2d$generation__$28$2$292f$src$2f$blocks$2f$question$2d$generator$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/agentic-content-generation (2)/src/blocks/question-generator.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$agentic$2d$content$2d$generation__$28$2$292f$src$2f$templates$2f$template$2d$engine$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/agentic-content-generation (2)/src/templates/template-engine.ts [app-route] (ecmascript)");
;
;
;
class FAQAgent extends __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$agentic$2d$content$2d$generation__$28$2$292f$src$2f$agents$2f$base$2d$agent$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BaseAgent"] {
    name = "FAQAgent";
    description = "Generates FAQ pages from product data";
    responsibility = "Transform questions and product data into structured FAQ entries with answers";
    async execute(context) {
        this.log("Starting FAQ generation...");
        try {
            const questionGenerator = new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$agentic$2d$content$2d$generation__$28$2$292f$src$2f$blocks$2f$question$2d$generator$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["QuestionGeneratorBlock"]();
            const generatedQuestions = questionGenerator.execute(context.product);
            this.log(`Generated ${generatedQuestions.length} questions`);
            // Generate answers based on product data and questions
            const faqEntries = generatedQuestions.map((q)=>({
                    question: q.question,
                    category: q.category,
                    answer: this.generateAnswer(q.question, q.keyword, context)
                }));
            // Group by category
            const categorized = this.groupByCategory(faqEntries);
            const template = new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$agentic$2d$content$2d$generation__$28$2$292f$src$2f$templates$2f$template$2d$engine$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["FAQTemplate"]();
            const faqPage = template.compose(new Map([
                [
                    "title",
                    "Frequently Asked Questions"
                ],
                [
                    "productName",
                    context.product.name
                ],
                [
                    "faqs",
                    faqEntries
                ],
                [
                    "categories",
                    Object.keys(categorized)
                ]
            ]));
            this.log("FAQ page generated successfully");
            return faqPage;
        } catch (error) {
            this.logError(`Failed to generate FAQ: ${error}`);
            throw error;
        }
    }
    generateAnswer(question, keyword, context) {
        const { product } = context;
        const answers = {
            "product-intro": `${product.name} is a skincare product featuring ${product.concentration || "a premium formulation"}. It is designed for ${product.skinType.join(" and ")} skin types.`,
            ingredients: `The primary ingredients in ${product.name} include: ${product.keyIngredients.join(", ")}.`,
            benefits: `The main benefits of using ${product.name} are: ${product.benefits.join(", ")}.`,
            sensitivity: `${product.name} contains ${product.keyIngredients.join(", ")}. ${product.sideEffects} For sensitive skin, we recommend testing on a small area first.`,
            "side-effects": `${product.sideEffects}`,
            contraindications: `Those with known allergies to ${product.keyIngredients[0]} or similar products should consult a dermatologist before use.`,
            "usage-instructions": `${product.howToUse}`,
            frequency: `Apply ${product.name} as per the instructions: ${product.howToUse}. Daily use is recommended for best results.`,
            compatibility: `${product.name} can be used with most skincare routines. Apply it in the morning or evening as part of your regular skincare regimen.`,
            pricing: `${product.name} is priced at ₹${product.price}.`,
            availability: `${product.name} is available through authorized retailers and online platforms.`,
            value: `At ₹${product.price}, ${product.name} offers excellent value for its concentration of ${product.concentration || "premium ingredients"}.`,
            "competitive-analysis": `${product.name} stands out with its ${product.concentration} formulation and focus on ${product.benefits[0]} benefits, making it competitive in its category.`,
            differentiation: `What makes ${product.name} unique is its specific blend of ${product.keyIngredients.slice(0, 2).join(" and ")}, combined with its suitability for ${product.skinType.join(" and ")} skin types.`,
            timeline: `Most users report seeing initial results from ${product.name} within 2-4 weeks of consistent use.`
        };
        return answers[keyword] || `For more information about ${product.name}, please refer to the product documentation or consult a skincare professional.`;
    }
    groupByCategory(faqs) {
        return faqs.reduce((acc, faq)=>{
            if (!acc[faq.category]) {
                acc[faq.category] = [];
            }
            acc[faq.category].push(faq);
            return acc;
        }, {});
    }
}
}),
"[project]/Downloads/agentic-content-generation (2)/src/blocks/content-logic-blocks.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Reusable content logic blocks that transform product data into structured copy
__turbopack_context__.s([
    "BenefitBlockGenerator",
    ()=>BenefitBlockGenerator,
    "IngredientBlockGenerator",
    ()=>IngredientBlockGenerator,
    "PricingBlockGenerator",
    ()=>PricingBlockGenerator,
    "QuickOverviewBlockGenerator",
    ()=>QuickOverviewBlockGenerator,
    "SideEffectsBlockGenerator",
    ()=>SideEffectsBlockGenerator,
    "SkinTypeBlockGenerator",
    ()=>SkinTypeBlockGenerator,
    "UsageBlockGenerator",
    ()=>UsageBlockGenerator
]);
class BenefitBlockGenerator {
    name = "BenefitBlock";
    description = "Generates benefit-focused copy from product benefits";
    execute(product) {
        const benefitList = product.benefits.map((benefit)=>`• ${benefit}`).join("\n");
        return `Key Benefits:\n${benefitList}`;
    }
}
class IngredientBlockGenerator {
    name = "IngredientBlock";
    description = "Transforms ingredients into descriptive copy";
    execute(product) {
        const ingredientList = product.keyIngredients.join(", ");
        return `Primary Ingredients: ${ingredientList}`;
    }
}
class UsageBlockGenerator {
    name = "UsageBlock";
    description = "Formats usage instructions clearly";
    execute(product) {
        return `Usage Instructions:\n${product.howToUse}`;
    }
}
class SideEffectsBlockGenerator {
    name = "SideEffectsBlock";
    description = "Formats safety and side effect information";
    execute(product) {
        return `Safety Information:\n${product.sideEffects}`;
    }
}
class SkinTypeBlockGenerator {
    name = "SkinTypeBlock";
    description = "Generates skin type compatibility information";
    execute(product) {
        const types = product.skinType.join(", ");
        return `Suitable For: ${types}`;
    }
}
class PricingBlockGenerator {
    name = "PricingBlock";
    description = "Formats pricing information";
    execute(product) {
        const currency = product.currency || "₹";
        return `Price: ${currency}${product.price}`;
    }
}
class QuickOverviewBlockGenerator {
    name = "QuickOverviewBlock";
    description = "Generates a concise product overview";
    execute(product) {
        return `${product.name} - ${product.concentration || "Premium Formula"} for ${product.skinType.join("/")} skin. ${product.benefits[0] && `Featuring ${product.benefits[0]}`}.`;
    }
}
}),
"[project]/Downloads/agentic-content-generation (2)/src/agents/product-page-agent.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Product Page Agent: Responsible for generating product description pages
__turbopack_context__.s([
    "ProductPageAgent",
    ()=>ProductPageAgent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$agentic$2d$content$2d$generation__$28$2$292f$src$2f$agents$2f$base$2d$agent$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/agentic-content-generation (2)/src/agents/base-agent.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$agentic$2d$content$2d$generation__$28$2$292f$src$2f$templates$2f$template$2d$engine$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/agentic-content-generation (2)/src/templates/template-engine.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$agentic$2d$content$2d$generation__$28$2$292f$src$2f$blocks$2f$content$2d$logic$2d$blocks$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/agentic-content-generation (2)/src/blocks/content-logic-blocks.ts [app-route] (ecmascript)");
;
;
;
class ProductPageAgent extends __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$agentic$2d$content$2d$generation__$28$2$292f$src$2f$agents$2f$base$2d$agent$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BaseAgent"] {
    name = "ProductPageAgent";
    description = "Generates product description pages from structured content blocks";
    responsibility = "Orchestrate content logic blocks to compose a complete product page";
    async execute(context) {
        this.log("Starting product page generation...");
        try {
            // Initialize content blocks
            const blocks = new Map([
                [
                    "overview",
                    new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$agentic$2d$content$2d$generation__$28$2$292f$src$2f$blocks$2f$content$2d$logic$2d$blocks$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["QuickOverviewBlockGenerator"]().execute(context.product)
                ],
                [
                    "ingredients",
                    new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$agentic$2d$content$2d$generation__$28$2$292f$src$2f$blocks$2f$content$2d$logic$2d$blocks$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["IngredientBlockGenerator"]().execute(context.product)
                ],
                [
                    "benefits",
                    new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$agentic$2d$content$2d$generation__$28$2$292f$src$2f$blocks$2f$content$2d$logic$2d$blocks$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BenefitBlockGenerator"]().execute(context.product)
                ],
                [
                    "usage",
                    new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$agentic$2d$content$2d$generation__$28$2$292f$src$2f$blocks$2f$content$2d$logic$2d$blocks$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["UsageBlockGenerator"]().execute(context.product)
                ],
                [
                    "skinType",
                    new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$agentic$2d$content$2d$generation__$28$2$292f$src$2f$blocks$2f$content$2d$logic$2d$blocks$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SkinTypeBlockGenerator"]().execute(context.product)
                ],
                [
                    "sideEffects",
                    new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$agentic$2d$content$2d$generation__$28$2$292f$src$2f$blocks$2f$content$2d$logic$2d$blocks$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SideEffectsBlockGenerator"]().execute(context.product)
                ],
                [
                    "pricing",
                    new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$agentic$2d$content$2d$generation__$28$2$292f$src$2f$blocks$2f$content$2d$logic$2d$blocks$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PricingBlockGenerator"]().execute(context.product)
                ]
            ]);
            this.log(`Composed ${blocks.size} content blocks`);
            // Add metadata block
            blocks.set("title", `${context.product.name} - Product Information`);
            // Use template to compose final page
            const template = new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$agentic$2d$content$2d$generation__$28$2$292f$src$2f$templates$2f$template$2d$engine$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ProductPageTemplate"]();
            const productPage = template.compose(blocks);
            this.log("Product page generated successfully");
            return productPage;
        } catch (error) {
            this.logError(`Failed to generate product page: ${error}`);
            throw error;
        }
    }
}
}),
"[project]/Downloads/agentic-content-generation (2)/src/agents/comparison-agent.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Comparison Agent: Responsible for generating product comparison pages
__turbopack_context__.s([
    "ComparisonAgent",
    ()=>ComparisonAgent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$agentic$2d$content$2d$generation__$28$2$292f$src$2f$agents$2f$base$2d$agent$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/agentic-content-generation (2)/src/agents/base-agent.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$agentic$2d$content$2d$generation__$28$2$292f$src$2f$templates$2f$template$2d$engine$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/agentic-content-generation (2)/src/templates/template-engine.ts [app-route] (ecmascript)");
;
;
class ComparisonAgent extends __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$agentic$2d$content$2d$generation__$28$2$292f$src$2f$agents$2f$base$2d$agent$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BaseAgent"] {
    name = "ComparisonAgent";
    description = "Generates product comparison pages";
    responsibility = "Compare primary product with a fictional competitor product";
    createFictionalProduct() {
        return {
            name: "RadiantGlow Serum Pro",
            concentration: "12% Vitamin C",
            skinType: [
                "Normal",
                "Dry"
            ],
            keyIngredients: [
                "Vitamin C",
                "Ferulic Acid",
                "Vitamin E"
            ],
            benefits: [
                "Deep hydration",
                "Anti-aging",
                "Brightening"
            ],
            howToUse: "Apply 3-4 drops evenly across face at night",
            sideEffects: "Minimal irritation, suitable for sensitive skin",
            price: 899,
            currency: "₹"
        };
    }
    async execute(context) {
        this.log("Starting comparison page generation...");
        try {
            const productA = context.product;
            const productB = this.createFictionalProduct();
            this.log(`Comparing ${productA.name} with ${productB.name}`);
            // Generate comparison attributes
            const attributes = this.generateComparison(productA, productB);
            // Use template to compose comparison page
            const template = new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$agentic$2d$content$2d$generation__$28$2$292f$src$2f$templates$2f$template$2d$engine$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ComparisonPageTemplate"]();
            const comparisonPage = template.compose(new Map([
                [
                    "title",
                    `${productA.name} vs ${productB.name}`
                ],
                [
                    "productA",
                    this.productToComparableFormat(productA)
                ],
                [
                    "productB",
                    this.productToComparableFormat(productB)
                ],
                [
                    "attributes",
                    attributes
                ],
                [
                    "verdict",
                    this.generateVerdict(productA, productB)
                ]
            ]));
            this.log("Comparison page generated successfully");
            return comparisonPage;
        } catch (error) {
            this.logError(`Failed to generate comparison page: ${error}`);
            throw error;
        }
    }
    generateComparison(productA, productB) {
        return [
            {
                attribute: "Product Name",
                productA: productA.name,
                productB: productB.name,
                comparison: "Both are premium vitamin C serums"
            },
            {
                attribute: "Concentration",
                productA: productA.concentration || "N/A",
                productB: productB.concentration || "N/A",
                comparison: productB.concentration && productA.concentration ? `${productB.name} has higher concentration` : "Comparable"
            },
            {
                attribute: "Skin Type",
                productA: productA.skinType.join(", "),
                productB: productB.skinType.join(", "),
                comparison: "Different skin type focus"
            },
            {
                attribute: "Key Ingredients",
                productA: productA.keyIngredients.join(", "),
                productB: productB.keyIngredients.join(", "),
                comparison: `${productB.name} has additional antioxidant support`
            },
            {
                attribute: "Price",
                productA: `₹${productA.price}`,
                productB: `₹${productB.price}`,
                comparison: `${productA.price < productB.price ? productA.name : productB.name} is more affordable`
            },
            {
                attribute: "Side Effects",
                productA: productA.sideEffects,
                productB: productB.sideEffects,
                comparison: `${productB.name} reports fewer irritation issues`
            }
        ];
    }
    generateVerdict(productA, productB) {
        return `${productA.name} is ideal for ${productA.skinType.join("/")} skin and offers excellent value at ₹${productA.price}. ${productB.name} is better suited for ${productB.skinType.join("/")} skin types and provides higher concentration benefits. Choose based on your skin type and budget preferences.`;
    }
    productToComparableFormat(product) {
        return {
            name: product.name,
            concentration: product.concentration,
            skinType: product.skinType,
            benefits: product.benefits,
            price: product.price
        };
    }
}
}),
"[project]/Downloads/agentic-content-generation (2)/src/orchestrator/orchestrator.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Orchestrator: Coordinates agents in a DAG-based execution model
__turbopack_context__.s([
    "Orchestrator",
    ()=>Orchestrator
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$agentic$2d$content$2d$generation__$28$2$292f$src$2f$agents$2f$faq$2d$agent$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/agentic-content-generation (2)/src/agents/faq-agent.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$agentic$2d$content$2d$generation__$28$2$292f$src$2f$agents$2f$product$2d$page$2d$agent$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/agentic-content-generation (2)/src/agents/product-page-agent.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$agentic$2d$content$2d$generation__$28$2$292f$src$2f$agents$2f$comparison$2d$agent$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/agentic-content-generation (2)/src/agents/comparison-agent.ts [app-route] (ecmascript)");
;
;
;
class Orchestrator {
    agents = new Map();
    nodes = [];
    executionOrder = [];
    constructor(){
        this.registerAgents();
        this.buildDAG();
    }
    registerAgents() {
        const agents = [
            new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$agentic$2d$content$2d$generation__$28$2$292f$src$2f$agents$2f$faq$2d$agent$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["FAQAgent"](),
            new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$agentic$2d$content$2d$generation__$28$2$292f$src$2f$agents$2f$product$2d$page$2d$agent$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ProductPageAgent"](),
            new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$agentic$2d$content$2d$generation__$28$2$292f$src$2f$agents$2f$comparison$2d$agent$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ComparisonAgent"]()
        ];
        agents.forEach((agent)=>{
            this.agents.set(agent.name, agent);
            console.log(`[Orchestrator] Registered agent: ${agent.name}`);
        });
    }
    buildDAG() {
        // Build directed acyclic graph for agent execution
        this.nodes = [
            {
                id: "faq",
                agentName: "FAQAgent",
                dependsOn: [],
                output: undefined
            },
            {
                id: "product-page",
                agentName: "ProductPageAgent",
                dependsOn: [],
                output: undefined
            },
            {
                id: "comparison",
                agentName: "ComparisonAgent",
                dependsOn: [],
                output: undefined
            }
        ];
        // Determine execution order (topological sort)
        this.executionOrder = this.topologicalSort();
        console.log(`[Orchestrator] Execution order: ${this.executionOrder.join(" -> ")}`);
    }
    topologicalSort() {
        const visited = new Set();
        const stack = [];
        const visit = (nodeId)=>{
            visited.add(nodeId);
            const node = this.nodes.find((n)=>n.id === nodeId);
            if (node) {
                node.dependsOn.forEach((dep)=>{
                    if (!visited.has(dep)) {
                        visit(dep);
                    }
                });
            }
            stack.push(nodeId);
        };
        this.nodes.forEach((node)=>{
            if (!visited.has(node.id)) {
                visit(node.id);
            }
        });
        return stack;
    }
    async orchestrate(product) {
        console.log(`[Orchestrator] Starting orchestration with product: ${product.name}\n`);
        const context = {
            product
        };
        const results = new Map();
        for (const nodeId of this.executionOrder){
            const node = this.nodes.find((n)=>n.id === nodeId);
            if (!node) continue;
            const agent = this.agents.get(node.agentName);
            if (!agent) {
                console.error(`[Orchestrator] Agent not found: ${node.agentName}`);
                continue;
            }
            try {
                console.log(`[Orchestrator] Executing: ${node.agentName}`);
                const output = await agent.execute(context);
                node.output = output;
                results.set(nodeId, output);
                console.log(`[Orchestrator] ✓ ${node.agentName} completed\n`);
            } catch (error) {
                console.error(`[Orchestrator] ✗ ${node.agentName} failed:`, error);
            }
        }
        return results;
    }
    getExecutionGraph() {
        return this.nodes;
    }
}
}),
"[project]/Downloads/agentic-content-generation (2)/app/api/generate-content/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$agentic$2d$content$2d$generation__$28$2$292f$src$2f$orchestrator$2f$orchestrator$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/agentic-content-generation (2)/src/orchestrator/orchestrator.ts [app-route] (ecmascript)");
;
async function POST() {
    try {
        const glowBoostProduct = {
            name: "GlowBoost Vitamin C Serum",
            concentration: "10% Vitamin C",
            skinType: [
                "Oily",
                "Combination"
            ],
            keyIngredients: [
                "Vitamin C",
                "Hyaluronic Acid"
            ],
            benefits: [
                "Brightening",
                "Fades dark spots"
            ],
            howToUse: "Apply 2–3 drops in the morning before sunscreen",
            sideEffects: "Mild tingling for sensitive skin",
            price: 699,
            currency: "₹"
        };
        const orchestrator = new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$agentic$2d$content$2d$generation__$28$2$292f$src$2f$orchestrator$2f$orchestrator$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Orchestrator"]();
        const results = await orchestrator.orchestrate(glowBoostProduct);
        return Response.json({
            faq: results.get("faq"),
            productPage: results.get("product-page"),
            comparison: results.get("comparison")
        });
    } catch (error) {
        console.error("Content generation error:", error);
        return Response.json({
            error: error instanceof Error ? error.message : "Failed to generate content"
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__772599f5._.js.map