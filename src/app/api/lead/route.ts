import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, caseText, consent } = body;

        // 1. Server-side Validation
        if (!name || !email || !caseText || !consent) {
            return NextResponse.json(
                { error: 'Faltan campos obligatorios' },
                { status: 400 }
            );
        }

        if (name.length < 2) {
            return NextResponse.json({ error: 'Nombre demasiado corto' }, { status: 400 });
        }

        // Simple email regex for validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json({ error: 'Email inválido' }, { status: 400 });
        }

        if (caseText.length < 40 || caseText.length > 800) {
            return NextResponse.json(
                { error: 'El texto de tu caso debe tener entre 40 y 800 caracteres' },
                { status: 400 }
            );
        }

        // 2. Simulate Delay (Network feeling)
        await new Promise((resolve) => setTimeout(resolve, 800));

        // 3. Save to "Database" (JSON file in dev)
        const newLead = {
            id: crypto.randomUUID(),
            name,
            email,
            caseText,
            consent,
            createdAt: new Date().toISOString(),
        };

        if (process.env.NODE_ENV === 'development') {
            try {
                const dbPath = path.join(process.cwd(), 'leads-db.json');
                let leads = [];
                if (fs.existsSync(dbPath)) {
                    console.log("Reading existing DB...");
                    const fileContent = fs.readFileSync(dbPath, 'utf-8');
                    try { leads = JSON.parse(fileContent); } catch (e) { leads = []; }
                }
                leads.push(newLead);
                fs.writeFileSync(dbPath, JSON.stringify(leads, null, 2));
                console.log('Lead saved to local JSON DB');
            } catch (err) {
                console.error('Failed to save to local file', err);
                // Don't fail the request on FS error in dev
            }
        } else {
            // In production, this is where you'd call your Adapter (Brevo/MailerLite)
            console.log('Production Lead Received:', newLead);
        }

        return NextResponse.json({ success: true, message: 'Recibido' });

    } catch (error) {
        console.error('API Error:', error);
        return NextResponse.json(
            { error: 'Error interno del servidor' },
            { status: 500 }
        );
    }
}
