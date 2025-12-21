import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email } = body;

        // Validation
        if (!name || name.trim() === '' || !email || !email.includes('@')) {
            return NextResponse.json(
                { ok: false, error: 'Datos inválidos' },
                { status: 400 }
            );
        }

        // Log to console as "Database"
        console.log("[JOIN]", {
            name,
            email,
            at: new Date().toISOString()
        });

        return NextResponse.json({ ok: true });

    } catch (error) {
        return NextResponse.json(
            { ok: false, error: 'Error del servidor' },
            { status: 500 }
        );
    }
}
