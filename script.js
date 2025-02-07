function calculateFinalMark() {
    const subject = document.getElementById("subject").value;
    const firstName = document.getElementById("firstName").value;
    const surname = document.getElementById("surname").value;
    const studentNumber = document.getElementById("studentNumber").value;
    const yearMark = parseFloat(document.getElementById("yearMark").value);
    const examMark = parseFloat(document.getElementById("examMark").value);
  
    if (!subject || !firstName || !surname || !studentNumber || isNaN(yearMark) || isNaN(examMark)) {
      alert("Please fill in all fields correctly.");
      return;
    }
  
    const finalMark = (0.6 * examMark) + (0.4 * yearMark);
    
    document.getElementById("result").innerHTML = `
      <h2>Final Mark for ${subject}</h2>
      <p>Student: ${firstName} ${surname}  ${studentNumber}</p>
      <p>Final Mark: ${finalMark.toFixed(2)}</p>
    `;
  }
  
  function clearForm() {
    document.getElementById("calculatorForm").reset();
    document.getElementById("result").innerHTML = "";
  }
  