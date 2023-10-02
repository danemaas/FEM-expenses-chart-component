const chartColumns = document.querySelectorAll('.chart .column');
let data = [];

fetch('data.json')
    .then(response => response.json())
    .then(parsedData => {
        data = parsedData;
        
        const maxAmount = Math.max(...data.map(item => item.amount));

        data.forEach((item, index) => {
            const column = chartColumns[index];
            const bar = column.querySelector('.bar');
            const day = column.querySelector('.day');
            
            // const height = (item.amount * 3) + 'px';
            const height = (item.amount / maxAmount) * 65 + '%';
            if(maxAmount === item.amount) {
                bar.style.height = height;
                bar.classList.add('max');
            } else {
                bar.style.height = height;
            }

            day.textContent = item.day;
        });
    })
    .catch(error => {
        console.error('Error:', error);
    }
);