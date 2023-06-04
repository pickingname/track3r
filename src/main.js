fetch('https://api.github.com/repos/pickingname/track3r/commits?per_page=5')
.then(response => response.json())
.then(data => {
  // Iterate over the commits and append them to specific elements
  data.forEach((commit, index) => {
    const commitElement = document.getElementById(`commits-${index + 1}`);
    if (commitElement) {
      commitElement.innerHTML = commit.commit.message;
    }
  });
})
.catch(error => console.log(error));