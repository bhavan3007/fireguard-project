import os
from dotenv import load_dotenv
from supabase import create_client

# Load .env variables
load_dotenv()

SUPABASE_URL = os.getenv("SUPABASE_URL")
SUPABASE_KEY = os.getenv("SUPABASE_SERVICE_KEY")

supabase = create_client(SUPABASE_URL, SUPABASE_KEY)


# ================= CREATE SESSION =================
def create_session(user_id, title="New Chat"):
    res = supabase.table("chat_sessions").insert({
        "user_id": user_id,
        "title": title
    }).execute()

    return res.data[0]["id"]


# ================= SAVE CHAT =================
def save_chat(user_id, session_id, question, response):
    supabase.table("chats").insert({
        "user_id": user_id,
        "session_id": session_id,
        "question": question,
        "response": response
    }).execute()


# ================= GET SESSIONS =================
def get_sessions(user_id):
    return supabase.table("chat_sessions") \
        .select("*") \
        .eq("user_id", user_id) \
        .order("created_at", desc=True) \
        .execute()


# ================= GET CHATS =================
def get_chats_by_session(session_id):
    return supabase.table("chats") \
        .select("*") \
        .eq("session_id", session_id) \
        .order("created_at") \
        .execute()