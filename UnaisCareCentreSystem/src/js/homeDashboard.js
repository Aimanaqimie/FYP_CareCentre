// js/homeDashboard.js

document.addEventListener('DOMContentLoaded', () => {
    
    // -----------------------------------------------------------------
    // 1. DASHBOARD INITIALIZATION & DATA SIMULATION
    // -----------------------------------------------------------------
    console.log("[DASHBOARD] Initializing Home Dashboard components...");
    
    // --- Simulate Data Fetching ---
    const dashboardData = {
        residentTrend: [110, 115, 120, 125, 128], // Last 5 months resident count
        revenue: [15000, 18000, 20000, 22000, 25000],
        expense: [8000, 8500, 9000, 9500, 10000],
        months: ['July', 'Aug', 'Sept', 'Oct', 'Nov']
    };

    // -----------------------------------------------------------------
    // 2. CHART RENDERING SIMULATION
    // -----------------------------------------------------------------

    /**
     * Simulates rendering a chart on the dashboard.
     * In a real application, this function would use Chart.js or D3.js.
     * * @param {string} canvasId The ID of the canvas element.
     * @param {string} chartName The name of the chart being rendered.
     * @param {object} data The simulated data.
     */
    function renderChartSimulation(canvasId, chartName, data) {
        const canvas = document.getElementById(canvasId);
        
        if (canvas) {
            // Placeholder: Visually indicate a chart is "rendered"
            canvas.style.height = '300px'; 
            canvas.style.backgroundColor = '#f0f0f0';
            canvas.style.border = '1px solid #ddd';
            canvas.textContent = `[Placeholder for ${chartName} Chart - Data Source: Console]`;
            canvas.style.textAlign = 'center';
            canvas.style.paddingTop = '100px';
            canvas.style.color = '#6a7a9a';
            canvas.style.fontSize = '14px';

            console.log(`[DASHBOARD] Chart rendered: ${chartName}`);
            console.table(data);

        } else {
            console.error(`[DASHBOARD] Error: Canvas element with ID "${canvasId}" not found.`);
        }
    }

    // Call the simulation functions for the two main charts
    renderChartSimulation('residentChart', 'Monthly Resident Trend', {
        labels: dashboardData.months,
        data: dashboardData.residentTrend
    });
    
    renderChartSimulation('financialChart', 'Income vs Expense', {
        labels: dashboardData.months,
        income: dashboardData.revenue,
        expense: dashboardData.expense
    });


    // -----------------------------------------------------------------
    // 3. RECENT ACTIVITIES/ALERTS INTERACTION (Optional)
    // -----------------------------------------------------------------

    const alerts = document.querySelectorAll('.recent-activity-card.text-red');
    if (alerts.length > 0) {
        alerts.forEach(alertCard => {
            alertCard.addEventListener('click', () => {
                const alertText = alertCard.querySelector('span:nth-child(2)').textContent.trim();
                alert(`Redirecting to view details for the critical alert: "${alertText}"`);
                console.log(`[DASHBOARD] Critical alert clicked: ${alertText}`);
                
                // In a real app, this would redirect to Requests.html or Inventory.html
            });
        });
    }
});