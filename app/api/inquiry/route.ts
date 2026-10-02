import { NextResponse } from "next/server";

/** Заглушка: логирует заявку. Подключите SMTP/CRM по инструкции в README. */
export async function POST(request: Request) {
  try {
    const body = await request.json();
    if (!body?.fio || !body?.phone) {
      return NextResponse.json({ ok: false, error: "required" }, { status: 400 });
    }
    console.info("[inquiry]", {
      at: new Date().toISOString(),
      formId: body.formId,
      fio: body.fio,
      phone: body.phone,
      company: body.company,
      email: body.email,
      branch: body.branch,
      product: body.product,
    });
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }
}
