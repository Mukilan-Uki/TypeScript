const loadBtn = document.getElementById('loadBtn');
        const userContainer = document.getElementById('userContainer');
        const searchInput = document.getElementById('searchInput');
        let users = [];

        // Fetch users from API
        async function loadUsers() {
            userContainer.innerHTML = "<p class='text-center fw-bold'>Loading users...</p>";

            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users');
                users = await response.json();
                displayUsers(users);
            } catch (error) {
                userContainer.innerHTML = "<p class='text-danger text-center'>Failed to load users.</p>";
            }
        }

        // Display users dynamically
        function displayUsers(data) {
            userContainer.innerHTML = "";
            data.forEach(user => {
                const card = document.createElement('div');
                card.className = "col-md-3 m-3 card p-3 shadow-sm";
                card.innerHTML = `
                    <p class="fw-bold">${user.name}</p>
                    <p>${user.email}</p>
                    <p>${user.company.name}</p>
                `;
                userContainer.appendChild(card);
            });
        }

        // Filter users by search input
        searchInput.addEventListener('input', () => {
            const filtered = users.filter(user => 
                user.name.toLowerCase().includes(searchInput.value.toLowerCase())
            );
            displayUsers(filtered);
        });

        // Load users when button clicked
        loadBtn.addEventListener('click', loadUsers);