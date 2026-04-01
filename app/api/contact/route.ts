import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/contact-schema";

export async function POST(request: Request) {
  let json: unknown;
  try {
    json = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Validation failed", fields: parsed.error.flatten().fieldErrors },
      { status: 400 },
    );
  }

  // Hook: email provider, CRM, or ticket system.
  console.info("[contact]", parsed.data);

  return NextResponse.json({ ok: true });
}
