import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

export async function POST(request: Request) {
    try {
        const { username, email, password, gender } = await request.json();

        // バリデーション（簡易）
        if (!username || !email || !password || !gender) {
            return NextResponse.json({ error: "Missing fields" }, { status: 400 });
        }

        // パスワードをハッシュ化
        const hashedPassword = await bcrypt.hash(password, 10);

        // ユーザー作成
        const user = await prisma.user.create({
            data: {
                username,
                email,
                password: hashedPassword,
                gender,
            },
        });

        return NextResponse.json(user, { status: 201 });
    } catch (error) {
        if (error instanceof Error) {
            return NextResponse.json({ error: error.message }, { status: 500 });
        }
        return NextResponse.json({ error: "Unknown error" }, { status: 500 });
    }
}
