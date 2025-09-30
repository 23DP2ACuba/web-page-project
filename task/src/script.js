function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const btn = document.querySelector('.dark-mode-toggle');
    if (document.body.classList.contains('dark-mode')) {
        btn.textContent = '☀️ Toggle Light Mode';
    } else {
        btn.textContent = '🌙 Toggle Dark Mode';
    }
}

function copyText() {
      const text = document.getElementById("text-to-copy").innerText;
      navigator.clipboard.writeText(text).then(() => {
        alert("Copied: " + text);
      });
    }

document.addEventListener('DOMContentLoaded', function() {
    const saveBtn = document.querySelector('.save-permissions-btn');
    
    if (saveBtn) {
        saveBtn.addEventListener('click', function() {
            const dataCollection = document.getElementById('dataCollection').checked;
            const notifications = document.getElementById('notifications').checked;
            const personalization = document.getElementById('personalization').checked;
            const thirdParty = document.getElementById('thirdParty').checked;
            
            const preferences = {
                dataCollection: dataCollection,
                notifications: notifications,
                personalization: personalization,
                thirdParty: thirdParty
            };
            
            console.log('Saved preferences:', preferences);
            
            const originalText = saveBtn.textContent;
            saveBtn.textContent = '✓ Preferences Saved!';
            saveBtn.style.backgroundColor = '#48bb78';
            
            setTimeout(function() {
                saveBtn.textContent = originalText;
                saveBtn.style.backgroundColor = '';
            }, 2000);
        });
    }
});