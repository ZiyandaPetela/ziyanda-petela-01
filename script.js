function calculateFinalMark() {
    const firstName = document.getElementById('firstName').value;
    const surname = document.getElementById('surname').value;
    const studentNumber = document.getElementById('studentNumber').value;
    const yearMark = parseFloat(document.getElementById('yearMark').value);
    const examMark = parseFloat(document.getElementById('examMark').value);
  
    if (isNaN(yearMark) || isNaN(examMark)) {
      alert("Please enter valid numeric values for year and exam marks.");
      return;
    }
  
    if (yearMark < 0 || yearMark > 100 || examMark < 0 || examMark > 100) {
      alert("Marks should be between 0 and 100.");
      return;
    }
  
    const finalMark = (0.6 * examMark) + (0.4 * yearMark);
  
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
      <p>Student: ${firstName} ${surname} (${studentNumber})</p>
      <p>Final Mark: <strong>${finalMark.toFixed(2)}%</strong></p>
    `;
  }
  
  function clearForm() {
    document.getElementById('markForm').reset();
    document.getElementById('result').innerHTML = '';
  }
  