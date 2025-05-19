document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('profile-form');
    const saveBtn = document.getElementById('save-btn');
    const editBtn = document.getElementById('edit-btn');
    const fields = ['fullname', 'dob', 'cccd', 'address', 'email', 'phone'];
    function loadUserData() {
        const userData = JSON.parse(localStorage.getItem('userProfile'));
        if (userData) {
            fields.forEach(id => {
                const input = document.getElementById(id);
                if (input) {
                    input.value = userData[id] || '';
                    input.disabled = true;
                }
            });
            saveBtn.style.display = 'none';
            editBtn.style.display = 'inline-block';
        } else {
            editBtn.style.display = 'none';
        }
    }
    function updateDisplay(userData) {
        fields.forEach(id => {
            const input = document.getElementById(id);
            if (input) {
                input.value = userData[id] || '';
                input.disabled = true;
            }
        });
        saveBtn.style.display = 'none';
        editBtn.style.display = 'inline-block';
    }
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const data = {};
        fields.forEach(id => {
            const input = document.getElementById(id);
            if (input) {
                data[id] = input.value;
                input.disabled = true;
            }
        });
        localStorage.setItem('userProfile', JSON.stringify(data));
        alert('Thông tin đã được lưu.');
        updateDisplay(data);
    });
    editBtn.addEventListener('click', () => {
        fields.forEach(id => {
            const input = document.getElementById(id);
            if (input) input.disabled = false;
        });
        saveBtn.style.display = 'inline-block';
        editBtn.style.display = 'none';
    });
    loadUserData();
});
