// js/reportAnalytics.js

document.addEventListener('DOMContentLoaded', () => {
    // -----------------------------------------------------------------
    // 1. REPORT CARD SELECTION LOGIC
    // -----------------------------------------------------------------
    const reportCards = document.querySelectorAll('.report-card');
    const reportViewerContainer = document.querySelector('.report-viewer-container');
    const viewerTitle = reportViewerContainer.querySelector('h3');
    const reportContentPlaceholder = document.querySelector('.report-content-placeholder');
    
    reportCards.forEach(card => {
        card.addEventListener('click', (event) => {
            // Find the title and description within the card
            const reportTitleElement = card.querySelector('.report-title');
            const reportTitle = reportTitleElement ? reportTitleElement.textContent.trim() : 'Generic Report';
            
            // Highlight the selected card visually (optional: if you want to apply an 'active' class)
            reportCards.forEach(c => c.classList.remove('active'));
            card.classList.add('active');

            console.log(`[REPORTS] Selected Report Category: ${reportTitle}`);
            
            // Update the viewer title
            viewerTitle.textContent = `${reportTitle} Output Viewer`;

            // --- Simulate Report Loading/Generation ---
            reportContentPlaceholder.innerHTML = `
                <div class="loading-state">
                    <i class="fas fa-spinner fa-spin"></i> 
                    <p>Generating report data for: **${reportTitle}**...</p>
                </div>
            `;
            
            // Simulate a network delay before showing data
            setTimeout(() => {
                showReportData(reportTitle);
            }, 800);
        });
    });

    // Helper function to simulate loading report data (showing the table)
    function showReportData(title) {
        reportContentPlaceholder.innerHTML = `
            <p class="placeholder-text text-green">Report **${title}** successfully loaded for the selected period.</p>
            <div class="report-table-wrapper">
                <table>
                    <thead>
                        <tr>
                            <th>Metric</th>
                            <th>Value</th>
                            <th>Change (%)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>${title.includes('Census') ? 'Total Residents' : title.includes('Financial') ? 'Gross Revenue' : 'Items Used'}</td>
                            <td>${title.includes('Financial') ? 'MYR 50,000' : '130'}</td>
                            <td class="text-green">+5.2%</td>
                        </tr>
                        <tr>
                            <td>${title.includes('Census') ? 'New Admissions' : title.includes('Financial') ? 'Outstanding Dues' : 'Urgent Requests'}</td>
                            <td>${title.includes('Financial') ? 'MYR 5,500' : '4'}</td>
                            <td class="text-red">-2.0%</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        `;
    }

    // -----------------------------------------------------------------
    // 2. VIEWER CONTROLS LOGIC (Time Period and Export)
    // -----------------------------------------------------------------
    const periodSelect = document.querySelector('.report-select');
    const exportBtn = document.querySelector('.report-export-btn');

    // Handle period selection change
    if (periodSelect) {
        periodSelect.addEventListener('change', (event) => {
            const period = event.target.value;
            console.log(`[REPORTS] Time period updated to: ${period}. Re-generating report.`);
            
            // In a real application, you would re-call the data loading function here
        });
    }

    // Handle Export button click
    if (exportBtn) {
        exportBtn.addEventListener('click', () => {
            alert("Exporting current report view to CSV file...");
            console.log("[REPORTS] Export action initiated.");
        });
    }
});