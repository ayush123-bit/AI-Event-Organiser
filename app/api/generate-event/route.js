import Groq from "groq-sdk";
import { NextResponse } from "next/server";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

// Helper to safely parse JSON returned by AI
function extractJSON(text) {
  try {
    let cleaned = text.replace(/```json\n?/g, "").replace(/```\n?/g, "").trim();
    const jsonMatch = cleaned.match(/\{[\s\S]*\}/);
    if (jsonMatch) cleaned = jsonMatch[0];
    return JSON.parse(cleaned);
  } catch (e) {
    console.error("JSON parsing failed. Raw text:", text);
    throw new Error("Failed to parse JSON");
  }
}

export async function POST(req) {
  try {
    const { prompt } = await req.json();

    if (!prompt) {
      return NextResponse.json({ error: "Prompt is required" }, { status: 400 });
    }

    const systemPrompt = `You are an event planning assistant. Generate event details based on the user's description.

CRITICAL: Return ONLY valid JSON with properly escaped strings. No newlines in string values - use spaces instead.

Return this exact JSON structure:
{
  "title": "Event title (catchy and professional, single line, under 80 chars)",
  "description": "Detailed event description in a single paragraph. Use spaces instead of line breaks. Make it 2-3 sentences describing what attendees will learn and experience.",
  "category": "One of: tech, music, sports, art, food, business, health, education, gaming, networking, outdoor, community",
  "suggestedCapacity": 50,
  "suggestedTicketType": "free"
}

User's event idea: ${prompt}

Rules:
- Return ONLY the JSON object, no markdown, no explanation
- All string values must be on a single line with no line breaks
- Use spaces instead of \\n or line breaks in description
- suggestedTicketType should be either "free" or "paid"
`;

    // Generate content using Groq
    const completion = await groq.chat.completions.create({
      model: "llama-3.1-8b-instant",
      messages: [{ role: "user", content: systemPrompt }],
      temperature: 0.7,
      max_tokens: 500,
    });

    const responseText = completion.choices[0]?.message?.content?.trim() || "";

    console.log("=== RAW AI RESPONSE ===");
    console.log(responseText);
    console.log("=== END RAW RESPONSE ===");

    // Parse AI response as JSON
    const eventData = extractJSON(responseText);

    return NextResponse.json(eventData);
  } catch (error) {
    console.error("Error generating event:", error);
    return NextResponse.json(
      { error: "Failed to generate event: " + error.message },
      { status: 500 }
    );
  }
}
