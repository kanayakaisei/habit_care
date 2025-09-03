import { NextResponse } from "next/server";
import OpenAI from "openai";

const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
    const { food, sleep, sports } = await req.json();

    const prompt = `
        あなたは健康アドバイザーです。
        以下の最新の記録の数値データ（最大90点）を分析し、2つのセクションをポジティブに出力してください：
        出力形式は必ずJSONで返してください。
        {
            "analysis": {
                "食事": "一言の分析結果",
                "睡眠": "一言の分析結果",
                "運動": "一言の分析結果"
            },
            "advice": {
                "食事": "一言のアドバイス",
                "睡眠": "一言のアドバイス",
                "運動": "一言のアドバイス"
            }
        }
        条件：
        - 分析は前回データとの比較を含めること（数値が下がった場合はその旨を簡潔に指摘）
        - ユーザーにストレスを与えないために、なるべくポジティブな文章であること

        データ:
        - 食事: ${food.join(", ")}
        - 睡眠: ${sleep.join(", ")}
        - 運動: ${sports.join(", ")}
    `;

    const completion = await client.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [{ role: "user", content: prompt }],
        response_format: { type: "json_object" },
    });

    const text = completion.choices[0].message.content;
    return NextResponse.json(JSON.parse(text || "{}"));
}