
function fetchResult() {
    const roll = document.getElementById("rollNumber").value.trim();
    const resultDiv = document.getElementById("result");

    if (!roll) {
        resultDiv.innerHTML = "<p>Please enter a roll number.</p>";
        return;
    }

    const url = "https://script.google.com/macros/s/AKfycbzH0LlfyXeZy3GQRkAdut6n0D2f-akXlZL4K5rmQNENKvYS6rWpVCZK0lYPq1uHAGyt/exec?roll=" + encodeURIComponent(roll);

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (!data || data === "No record found") {
                resultDiv.innerHTML = "<p>No record found.</p>";
            } else {
                resultDiv.innerHTML = `
                    <h2>Result</h2>
                    <p><strong>Roll No:</strong> ${data["Roll No"]}</p>
                    <p><strong>Name:</strong> ${data["Name"]}</p>
                    <p><strong>Marks:</strong> ${data["Marks"]}</p>
                    <p><strong>Rank:</strong> ${data["Rank"]}</p>
                `;
            }
        })
        .catch(error => {
            resultDiv.innerHTML = "<p>Error fetching data. Please try again.</p>";
            console.error("Fetch error:", error);
        });
}
