function search(){
    const value = document.getElementById("search").value.toLowerCase();
    const grid = document.getElementById("grid");
    grid.innerHTML = "";

    if(value !== "case closed"){
        alert("No results found");
        return;
    }

    // create 16 boxes
    for(let i = 0; i < 16; i++){
        const b = document.createElement("div");
        b.className = "box";

        if(i === 0){
            b.classList.add("clickable");
            b.innerHTML = `
                <img src="https://anikai.to/watch/case-closed-7qyn">
                <p>Case Closed</p>
            `;
            b.onclick = () => window.location.href = "watch.html";
        } else {
            b.innerHTML = `<p>Untitled</p>`;
        }

        grid.appendChild(b);
    }
}
