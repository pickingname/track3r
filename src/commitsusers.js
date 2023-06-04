  // Fetch the 5 most recent commits from a GitHub repository
  fetch('https://api.github.com/repos/pickingname/track3r/commits?per_page=5')
    .then(response => response.json())
    .then(data => {
      // Iterate over the commits and append commit message and author
      data.forEach((commit, index) => {
        const commitElement = document.getElementById(`builder-${index + 1}`);
        if (commitElement) {
          const authorName = commit.commit.author.name;
          const commitMessage = commit.commit.message;
          commitElement.innerHTML = `Author: ${authorName}`;
        }
      });
    })
    .catch(error => console.log(error));