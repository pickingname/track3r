  fetch('https://api.github.com/repos/pickingname/track3r/commits?per_page=5')
    .then(response => response.json())
    .then(data => {
      // Iterate over the commits and append commit message, author, and time
      data.forEach((commit, index) => {
        const commitElement = document.getElementById(`time-${index + 1}`);
        if (commitElement) {
          const authorName = commit.commit.author.name;
          const commitMessage = commit.commit.message;
          const commitTime = new Date(commit.commit.author.date).toLocaleString('en-US', {
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
            month: 'numeric',
            day: 'numeric',
            year: '2-digit'
          });
          commitElement.innerHTML = `Author: ${authorName}<br>Time: ${commitTime}`;
        }
      });
    })
    .catch(error => console.log(error));