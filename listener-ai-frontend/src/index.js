var MyClass = React.createClass({
  render: function() {
    return (
      <div>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Listener AI</title>
        <style dangerouslySetInnerHTML={{__html: "\n    body {\n      font-family: Arial, sans-serif;\n      margin: 0;\n      padding: 0;\n      overflow: hidden;\n      background-color: #1e1e1e;\n      color: #fff;\n    }\n    .container {\n      display: flex;\n      height: 100vh;\n      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);\n      border-radius: 10px;\n      overflow: hidden;\n      margin: 1rem;\n      background-color: #2e2e2e;\n    }\n    .sidebar {\n      width: 20%;\n      background-color: #2a2a2a;\n      padding: 1rem;\n      box-shadow: 2px 0 10px rgba(0, 0, 0, 0.5);\n    }\n    .content {\n      width: 80%;\n      display: flex;\n      flex-direction: column;\n    }\n    .header {\n      padding: 1rem;\n      background-color: #2a2a2a;\n      display: flex;\n      justify-content: space-between;\n      align-items: center;\n      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);\n      border-radius: 10px;\n      margin: 0 1rem;\n    }\n    .audio-player {\n      padding: 1rem;\n      background-color: #333;\n      display: flex;\n      justify-content: center;\n      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);\n      border-radius: 10px;\n      margin: 1rem;\n    }\n    .audio-player audio {\n      width: 100%;\n      max-width: 600px;\n    }\n    .buttons {\n      margin: 1rem;\n      display: flex;\n      justify-content: space-around;\n      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);\n      border-radius: 10px;\n      padding: 0.5rem;\n      background-color: #2e2e2e;\n    }\n    .button {\n      padding: 0.7rem 1.5rem;\n      border: none;\n      cursor: pointer;\n      background-color: #d32f2f;\n      color: #fff;\n      border-radius: 20px;\n      font-size: 1rem;\n      transition: all 0.3s ease;\n      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);\n    }\n    .button:hover {\n      background-color: #f44336;\n      box-shadow: 0 6px 10px rgba(0, 0, 0, 0.3);\n      transform: translateY(-2px);\n    }\n    .button.active {\n      background-color: #b71c1c;\n    }\n    .section {\n      padding: 1rem;\n      overflow-y: auto;\n      flex: 1;\n      display: none;\n      margin: 1rem;\n      background-color: #2a2a2a;\n      border-radius: 10px;\n      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);\n    }\n    .section.active {\n      display: block;\n    }\n    .call {\n      background-color: #333;\n      padding: 1rem;\n      margin-bottom: 1rem;\n      border-radius: 10px;\n      cursor: pointer;\n      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);\n      transition: all 0.3s ease;\n    }\n    .call:hover {\n      background-color: #444;\n      transform: translateY(-2px);\n    }\n    .call.active {\n      background-color: #444;\n    }\n    .dialogue {\n      margin-bottom: 1rem;\n    }\n    .dispatcher {\n      color: #f25b5b;\n    }\n    .caller {\n      color: #4aa3f5;\n    }\n    .scores {\n      display: grid;\n      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));\n      gap: 1rem;\n      margin-bottom: 1rem;\n    }\n    .score-box h3 {\n      font-size: 1.5rem;\n      color: #4caf50;\n    }\n    .score-box p {\n      font-size: 1rem;\n      color: #aaa;\n    }\n    .analysis-section {\n      margin-top: 1rem;\n      padding: 1rem;\n      background-color: #333;\n      border-radius: 10px;\n      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);\n    }\n    .analysis-section h3 {\n      color: #4caf50;\n    }\n    .analysis-section ul {\n      list-style-type: disc;\n      padding-left: 1.5rem;\n      color: #aaa;\n    }\n    .analysis-section ul li {\n      margin-bottom: 0.5rem;\n    }\n    .score-box {\n      text-align: center;\n      background-color: #333;\n      padding: 1rem;\n      border-radius: 10px;\n      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);\n    }\n    .dialogue-box {\n      margin: 1rem 0;\n      background-color: #333;\n      padding: 1rem;\n      border-radius: 15px;\n      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);\n    }\n    .dialogue-header {\n      display: flex;\n      align-items: center;\n      margin-bottom: 0.5rem;\n    }\n    .role {\n      display: inline-block;\n      padding: 0.3rem 0.8rem;\n      border-radius: 15px;\n      font-size: 0.9rem;\n      font-weight: bold;\n      margin-right: 0.5rem;\n    }\n    .dispatcher {\n      background-color: #f25b5b;\n      color: #fff;\n    }\n    .caller {\n      background-color: #4aa3f5;\n      color: #fff;\n    }\n    .timestamp {\n      font-weight: 400;\n      font-size: 0.9rem;\n      color: #aaa;\n    }\n    .dialogue-content {\n      font-size: 1rem;\n      line-height: 1.5;\n    }\n    .pagination {\n      display: flex;\n      justify-content: space-between;\n      margin-top: 1rem;\n    }\n    .pagination button {\n      padding: 0.5rem 1rem;\n      border: none;\n      border-radius: 5px;\n      background-color: #d32f2f;\n      color: #fff;\n      cursor: pointer;\n      transition: all 0.3s ease;\n    }\n    .pagination button:hover {\n      background-color: #f44336;\n      transform: translateY(-2px);\n    }\n  " }} />
        <div className="container">
          {/* Sidebar */}
          <div className="sidebar">
            <h2>Calls</h2>
            <div className="call active">Conversation [1]<br /><small>03:18</small></div>
            <div className="pagination">
              <button>Previous</button> <span>1/1</span> <button>Next</button>
            </div>
          </div>
          {/* Main Content */}
          <div className="content">
            {/* Header */}
            <div className="header">
              <h1>Listener AI</h1>
              <a href="https://josh-listener-ai.streamlit.app/" target="_self">
                <button className="button">Record / Upload Call Audio</button>
              </a>
            </div>
            {/* Audio Player */}
            <div className="audio-player" style={{display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', maxWidth: '1200px', margin: '5 auto'}}>
              <audio controls style={{width: '100%', maxWidth: '100%', border: '1px solid #ccc', borderRadius: '8px'}}>
                <source src="/public/call-audio.mp3" type="audio/mp3" />
                Your browser does not support the audio element.
              </audio>
              {/* Toggle Buttons */}
              <div className="buttons" style={{display: 'flex', gap: '10px', marginTop: '10px', width: '100%', justifyContent: 'center'}}>
                <button className="button active" id="transcription-btn" style={{flex: 1, padding: '10px 20px', maxWidth: '200px'}}>Transcription</button>
                <button className="button" id="analysis-btn" style={{flex: 1, padding: '10px 20px', maxWidth: '200px'}}>Performance Analysis</button>
              </div>
            </div>
            {/* Transcription Section */}
            <div className="section active" id="transcription">
              <h2>Transcript</h2>
              <div className="dialogue-box">
                <div className="dialogue-header">
                  <span className="role dispatcher">Scammer</span>
                  <span className="timestamp">(0:02 - 0:06)</span>
                </div>
                <div className="dialogue-content">
                  Hello! Good Morning. How are you doing today?
                </div>
              </div>
              <div className="dialogue-box">
                <div className="dialogue-header">
                  <span className="role caller">Victim</span>
                  <span className="timestamp">(0:07 - 0:08)</span>
                </div>
                <div className="dialogue-content">
                  I am fine. Thanks for asking.
                </div>
              </div>
              <div className="dialogue-box">
                <div className="dialogue-header">
                  <span className="role dispatcher">Scammer</span>
                  <span className="timestamp">(0:09 - 0:15)</span>
                </div>
                <div className="dialogue-content">
                  Great! I am calling from your bank. We noticed some suspicious activity on your credit card. Have you authorized any transactions recently?
                </div>
              </div>
              <div className="dialogue-box">
                <div className="dialogue-header">
                  <span className="role caller">Victim</span>
                  <span className="timestamp">(0:25 - 0:27)</span>
                </div>
                <div className="dialogue-content">
                  Oh no, I haven’t. What kind of transactions are you seeing?
                </div>
              </div>
              <div className="dialogue-box">
                <div className="dialogue-header">
                  <span className="role dispatcher">Scammer</span>
                  <span className="timestamp">(0:42 - 0:44)</span>
                </div>
                <div className="dialogue-content">
                  There are several charges at an electronics store. To verify, could you please confirm your credit card number and CVV?
                </div>
              </div>
              <div className="dialogue-box">
                <div className="dialogue-header">
                  <span className="role caller">Victim</span>
                  <span className="timestamp">(0:50 - 0:54)</span>
                </div>
                <div className="dialogue-content">
                  Um, sure... It’s 1234-5678-9012-3456 and the CVV is 123.
                </div>
              </div>
            </div>
            {/* Performance Analysis Section */}
            <div className="section" id="analysis">
              <h2>Performance Analysis</h2>
              <div className="scores">
                <div className="score-box">
                  <h3>2/10</h3>
                  <p>Legitimacy Score</p>
                </div>
                <div className="score-box">
                  <h3>9/10</h3>
                  <p>Persuasiveness</p>
                </div>
                <div className="score-box">
                  <h3>8/10</h3>
                  <p>Deception Level</p>
                </div>
                <div className="score-box">
                  <h3>9/10</h3>
                  <p>Urgency Tactics</p>
                </div>
                <div className="score-box">
                  <h3>10/10</h3>
                  <p>Risk of Fraud</p>
                </div>
                <div className="score-box">
                  <h3>1/10</h3>
                  <p>Trustworthiness</p>
                </div>
              </div>
              <div className="analysis-section" style={{fontFamily: 'Arial, sans-serif'}}>
                <h3 style={{textAlign: 'center', color: '#ff4d4d', marginBottom: '20px'}}>Scam Indicators</h3>
                <ul style={{listStyle: 'none', padding: 0}}>
                  <li style={{marginBottom: '15px'}}>
                    <strong style={{color: '#f44336', fontSize: '18px'}}>Red Flags</strong>
                    <ul style={{margin: '10px 0 0 20px', listStyle: 'disc'}}>
                      <li>Caller claimed to be from a bank but failed to provide specific details about the institution.</li>
                      <li>Created a false sense of urgency by mentioning suspicious transactions.</li>
                      <li>Requested sensitive financial information (credit card number and CVV) over the phone.</li>
                      <li>Lacked official verification steps or customer security measures.</li>
                    </ul>
                  </li>
                  <li style={{marginBottom: '15px'}}>
                    <strong style={{color: '#ff9800', fontSize: '18px'}}>Common Scam Techniques Used</strong>
                    <ul style={{margin: '10px 0 0 20px', listStyle: 'disc'}}>
                      <li><strong style={{color: '#ff5722'}}>Social Engineering:</strong> The scammer built rapport with the victim to lower suspicion.</li>
                      <li><strong style={{color: '#ff5722'}}>Fear Tactics:</strong> The mention of fraudulent transactions pressured the victim into compliance.</li>
                      <li><strong style={{color: '#ff5722'}}>Phishing for Sensitive Information:</strong> The direct request for card details confirmed fraudulent intent.</li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div className="analysis-section">
                <h3 style={{textAlign: 'center', color: '#4caf50', fontSize: '18px'}}>How to Protect Yourself</h3>
                <ul style={{margin: '10px 0 0 20px', listStyle: 'disc'}}>
                  <li><strong style={{color: '#009688'}}>Verify Caller Identity:</strong> Always contact your bank directly using official numbers instead of sharing details on an unsolicited call.</li>
                  <li><strong style={{color: '#009688'}}>Never Share Financial Info:</strong> Banks will never ask for your full credit card number or CVV over the phone.</li>
                  <li><strong style={{color: '#009688'}}>Be Cautious of Urgent Requests:</strong> Scammers often use urgency to push victims into making quick, uninformed decisions.</li>
                </ul>
              </div> 
              <div className="analysis-section">
                <h3 style={{textAlign: 'center'}}>Final Verdict</h3>
                <ul>
                  <li><strong style={{color: '#ff0000'}}>This call was a scam.</strong> The caller exhibited clear fraudulent behavior by impersonating a bank representative, using fear tactics, and attempting to extract sensitive financial information.</li>
                  <li>If you receive a similar call, hang up immediately and report it to your bank and local authorities.</li>
                </ul>
              </div>  
              {/* Report Scam Call Button */}
              <div style={{textAlign: 'center', marginTop: '30px'}}>
                <button onclick="reportScam()" style={{backgroundColor: '#ff4d4d', color: 'white', fontSize: '18px', padding: '12px 24px', border: 'none', borderRadius: '8px', cursor: 'pointer', transition: 'background-color 0.3s ease'}}>
                  🚨 Report Scam Call
                </button>
              </div>
            </div>
          </div></div></div>
    );
  }
});