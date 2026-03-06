/* github-stats.js */
let cachedStats = null;

async function fetchGitHubStats() {
    if (cachedStats) return;

    try {
        // Target the specific nested path: exb/cop
        const commitRes = await fetch('https://api.github.com/repos/VCGI/vem-gis-docs/commits?path=exb/cop&per_page=1');
        const repoRes = await fetch('https://api.github.com/repos/VCGI/vem-gis-docs');

        const commitData = await commitRes.json();
        const repoData = await repoRes.json();

        if (commitData && commitData.length > 0) {
            // Extracts the date from the most recent commit to touch the 'exb/cop' folder
            const lastCommitDate = commitData[0].commit.committer.date;
            
            cachedStats = {
                update: new Date(lastCommitDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }),
                create: new Date(repoData.created_at).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })
            };
            applyStats();
        }
    } catch (e) {
        console.error("GitHub fetch failed:", e);
    }
}

function applyStats() {
    if (!cachedStats) return;

    const lastUpdateEl = document.getElementById('github-last-update');
    const createdDateEl = document.getElementById('github-created-date');
    const textSpans = document.querySelectorAll('.last-update-text');

    if (lastUpdateEl) lastUpdateEl.innerText = cachedStats.update;
    if (createdDateEl) createdDateEl.innerText = cachedStats.create;

    textSpans.forEach(el => {
        el.innerText = cachedStats.update;
    });
}

fetchGitHubStats();

// Essential for MkDocs Material theme navigation
document.addEventListener("DOMContentSwitch", applyStats);