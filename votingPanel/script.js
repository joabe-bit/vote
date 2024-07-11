document.addEventListener('DOMContentLoaded', function () {
    // Timing Chart
    var ctx = document.getElementById('timingChart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Mouth1', 'Mouth2', 'Mouth3', 'Mouth4', 'Mouth5', 'Mouth6', 'Mouth7'],
            datasets: [{
                label: 'Candidate 1',
                borderColor: '#e91e63',
                data: [200, 100, 300, 250, 200, 100, 300],
                fill: false
            }, {
                label: 'Candidate 2',
                borderColor: '#3f51b5',
                data: [100, 200, 200, 300, 150, 200, 250],
                fill: false
            }]
        },
        options: {
            responsive: true,
            scales: {
                x: {
                    display: true,
                    title: {
                        display: true,
                        text: 'Months'
                    }
                },
                y: {
                    display: true,
                    title: {
                        display: true,
                        text: 'Values'
                    }
                }
            }
        }
    });

    // Candidates Chart
    var ctx2 = document.getElementById('candidatesChart').getContext('2d');
    new Chart(ctx2, {
        type: 'bar',
        data: {
            labels: ['Year1', 'Year2', 'Year3', 'Year4', 'Year5', 'Year6', 'Year7', 'Year8', 'Year9', 'Year10'],
            datasets: [{
                label: 'Candidate A',
                backgroundColor: '#e91e63',
                data: [180, 160, 200, 140, 150, 140, 130, 120, 110, 100]
            }, {
                label: 'Candidate B',
                backgroundColor: '#3f51b5',
                data: [140, 150, 140, 130, 120, 110, 100, 90, 80, 70]
            }]
        },
        options: {
            responsive: true,
            scales: {
                x: {
                    display: true,
                    title: {
                        display: true,
                        text: 'Years'
                    }
                },
                y: {
                    display: true,
                    title: {
                        display: true,
                        text: 'Values'
                    }
                }
            }
        }
    });
});

function selectCandidate(candidate) {
    const allCandidates = document.querySelectorAll('.candidate-card');
    allCandidates.forEach(card => {
        card.classList.remove('selected');
    });
    candidate.classList.add('selected');
}
