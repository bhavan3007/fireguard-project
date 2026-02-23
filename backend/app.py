from flask import Flask, request, jsonify
from flask_cors import CORS

from matcher import find_answer
from lang_utils import detect_language
from translator import to_english, from_english
from fire_filter import is_fire_related
from ai_service import get_ai_fire_answer

# 👉 NEW: import database functions
from db import create_session, save_chat, get_sessions, get_chats_by_session

app = Flask(__name__)
CORS(app)


# ================= CHAT API =================
@app.route("/chat", methods=["POST"])
def chat():
    data = request.get_json()

    question = data.get("question", "")
    user_id = data.get("user_id")        # NEW
    session_id = data.get("session_id")  # NEW

    # 1️⃣ Detect language
    user_lang = detect_language(question)

    # 2️⃣ Translate to English
    english_question = to_english(question, user_lang)

    # 3️⃣ Rule-based match
    answer = find_answer(english_question)

    # 4️⃣ AI fallback
    if answer["purpose"] == "Unsupported query":
        if is_fire_related(english_question):
            answer = get_ai_fire_answer(english_question)

    # 5️⃣ Translate back
    final_answer = from_english(answer, user_lang)

    # ================= SAVE CHAT TO DB =================
    try:
        if user_id and session_id:
            save_chat(user_id, session_id, question, final_answer)
    except Exception as e:
        print("DB Save Error:", e)

    return jsonify(final_answer)


# ================= CREATE NEW SESSION =================
@app.route("/session", methods=["POST"])
def new_session():
    data = request.get_json()
    user_id = data.get("user_id")

    session_id = create_session(user_id)

    return jsonify({"session_id": session_id})


# ================= GET ALL SESSIONS =================
@app.route("/sessions/<user_id>", methods=["GET"])
def sessions(user_id):
    res = get_sessions(user_id)
    return jsonify(res.data)


# ================= GET CHATS OF SESSION =================
@app.route("/session/<session_id>", methods=["GET"])
def session_chats(session_id):
    res = get_chats_by_session(session_id)
    return jsonify(res.data)

# ================= UPDATE SESSION TITLE =================
@app.route("/session/title", methods=["POST"])
def update_title():
    data = request.get_json()
    session_id = data.get("session_id")
    title = data.get("title")

    from db import supabase

    supabase.table("chat_sessions").update({
        "title": title
    }).eq("id", session_id).execute()

    return jsonify({"status": "ok"})

if __name__ == "__main__":
    if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
