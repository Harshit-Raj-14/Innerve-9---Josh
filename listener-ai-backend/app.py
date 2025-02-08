import streamlit as st
import tempfile
import os
import google.generativeai as genai

from dotenv import load_dotenv

load_dotenv()

# Configure Google API key
GOOGLE_API_KEY = os.getenv("GOOGLE_API_KEY")
genai.configure(api_key=GOOGLE_API_KEY)

performance_prompt = """
Analyze the transcription of the live phone call to detect potential scam indicators. Provide a comprehensive performance analysis with a focus on fraud detection, conversational patterns, and user security.

### Scam Risk Analysis
- **Overall Risk Score** (out of 10):  
- **Suspicious Language Score** (out of 10):  
- **Urgency & Pressure Tactics Score** (out of 10):  
- **Personal Information Request Score** (out of 10):  
- **Emotional Manipulation Score** (out of 10):  

### Key Scam Indicators
- List detected red flags, such as urgency, impersonation, or phishing attempts.  

### Weaknesses & Potential Risks
- Identify moments where the user may have been vulnerable or misled.  

### Recommended Actions
- Steps the user should take next, such as reporting the call, blocking the number, or being cautious in future interactions.  

### How to Protect Yourself
- Provide actionable tips to recognize and avoid scams in future calls.  

### Key Insights
- Summarize critical takeaways from the call, including scam patterns and tactics.  

### Conclusion
- Brief summary of the call analysis, risk level, and final recommendations.  
"""

def transcribe_audio(audio_file_path):
    model = genai.GenerativeModel("models/gemini-1.5-pro-latest")
    audio_file = genai.upload_file(path=audio_file_path)
    response = model.generate_content(
        [
            "Transcribe the following audio as a conversation call between you and person 1. Mark the dialogues as you and person 1. Put a line space between each dialogue. Write nothing else.",
            audio_file
        ]
    )
    return response.text

def analyze_performance(transcription):
    model = genai.GenerativeModel("models/gemini-1.5-pro-latest")
    response = model.generate_content(
        [
            performance_prompt,transcription
        ]
    )
    return response.text

def save_uploaded_file(uploaded_file):
    try:
        with tempfile.NamedTemporaryFile(delete=False, suffix='.' + uploaded_file.name.split('.')[-1]) as tmp_file:
            tmp_file.write(uploaded_file.getvalue())
            return tmp_file.name
    except Exception as e:
        st.error(f"Error handling uploaded file: {e}")
        return None

# Streamlit app interface
st.title('Listener AI')

# Initialize session state for transcription and performance analysis
if "transcription" not in st.session_state:
    st.session_state["transcription"] = None

if "performance" not in st.session_state:
    st.session_state["performance"] = None

audio_file = st.file_uploader("Upload Audio File", type=['wav', 'mp3'])
if audio_file is not None:
    audio_path = save_uploaded_file(audio_file)  # Save the uploaded file and get the path
    st.audio(audio_path)

    if st.button('Analyze Audio'):
        with st.spinner('Processing audio...'):
            st.session_state["transcription"] = transcribe_audio(audio_path)
            st.session_state["performance"] = analyze_performance(st.session_state["transcription"])

# Add toggle buttons for switching between panes
if st.session_state["transcription"] and st.session_state["performance"]:
    pane = st.radio("Choose an output view:", ("Transcription", "Performance Analysis"))

    if pane == "Transcription":
        st.subheader("Transcription Pane")
        st.markdown(st.session_state["transcription"], unsafe_allow_html=True)

    elif pane == "Performance Analysis":
        st.markdown(st.session_state["performance"], unsafe_allow_html=True)
