import { useState } from "react";
import { QRCode } from "react-qr-code";

export default function QRCodeGenerator() {
  const [qrCode, setQrCode] = useState("");
  const [input, setInput] = useState("");

  function handleGenerateQrCode() {
    setQrCode(input);
    setInput("");
  }
  return (
    <div className="container">
      <h1>QR Code Generator</h1>
      <div>
        <input
          type="text"
          name="qr-code"
          placeholder="Enter the URL"
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
        <button
          disabled={input && input.trim() !== "" ? false : true}
          onClick={handleGenerateQrCode}
        >
          Generate
        </button>
      </div>
      <div>
        <QRCode id="qr-code-value" value={qrCode} bgColor="#fff" />
      </div>
    </div>
  );
}
