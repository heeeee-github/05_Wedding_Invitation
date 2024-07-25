        // Calendar
        function generateCalendar() {
            const weddingDate = new Date(2024, 9, 27); // 10월은 9
            const startDate = new Date(2024, 9, 1);
            const endDate = new Date(2024, 9, 31);
            
            const calendar = document.getElementById('calendar');
            
            // Add day labels
            const days = ['일', '월', '화', '수', '목', '금', '토'];
            days.forEach(day => {
                const dayLabel = document.createElement('div');
                dayLabel.classList.add('calendar-day');
                dayLabel.style.fontWeight = 'bold';
                dayLabel.textContent = day;
                calendar.appendChild(dayLabel);
            });
            
            // Add empty cells for days before the 1st
            for (let i = 0; i < startDate.getDay(); i++) {
                const emptyDay = document.createElement('div');
                calendar.appendChild(emptyDay);
            }
            
            for (let d = startDate; d <= endDate; d.setDate(d.getDate() + 1)) {
                const day = document.createElement('div');
                day.classList.add('calendar-day');
                day.textContent = d.getDate();
                
                if (d.getTime() === weddingDate.getTime()) {
                    day.classList.add('wedding-day');
                }
                
                calendar.appendChild(day);
            }
        }
        
        // D-day countdown
        // (참고) 달력에서 월 입력 할 때 : 0(1월)~11(12월)
        function updateDday() {
            const weddingDate = new Date(2024, 9, 27, 14, 0, 0);
            const now = new Date();
            const diff = weddingDate - now;
            
            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            
            document.getElementById('dday').textContent = `D-${days}`;
        }
        
        // Gallery
        function loadGalleryImages() {
            const gallery = document.getElementById('galleryImages');
            for (let i = 1; i <= 6; i++) {
                const img = document.createElement('img');
                img.src = `./img/img_${i}.jpg`; // 갤러리 이미지 경로를 맞추세요
                img.alt = `Gallery Image ${i}`;
                img.classList.add('gallery-image');
                gallery.appendChild(img);
            }
        }
        
        // Copy account number
        function setupCopyAccountButtons() {
            const copyAccountButtons = document.querySelectorAll('.copy-account-btn');
            copyAccountButtons.forEach(button => {
                button.addEventListener('click', function() {
                    const accountNumber = this.getAttribute('data-account');
                    navigator.clipboard.writeText(accountNumber).then(() => {
                        alert('계좌번호가 복사되었습니다.');
                    });
                });
            });
        }

        // Copy address number
        function setupCopyAddressButtons() {
            const copyAddressButtons = document.querySelectorAll('.copy-address-btn');
            copyAddressButtons.forEach(button => {
                button.addEventListener('click', function() {
                    const address = this.getAttribute('address');
                    navigator.clipboard.writeText(address).then(() => {
                        alert('주소가 복사되었습니다.');
                    });
                });
            });
        }

         // Modal
         const modal = document.getElementById("contactModal");
         const btn = document.getElementById("contactBtn");
         const span = document.getElementsByClassName("close")[0];
 
         btn.onclick = function() {
             modal.style.display = "block";
         }
 
         span.onclick = function() {
             modal.style.display = "none";
         }
 
         window.onclick = function(event) {
             if (event.target == modal) {
                 modal.style.display = "none";
             }
         }
         
         // Initialize
         document.addEventListener('DOMContentLoaded', () => {
             generateCalendar();
             updateDday();
             setInterval(updateDday, 60000); // Update every minute
             loadGalleryImages();
             setupCopyAccountButtons();
             setupCopyAddressButtons();
         });