const colors = [
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "violet"
]

function handleOnClick() {
    let output = document.querySelector(".output");
    output.style.display = "block";
  
    let hours = document.getElementById("hours");
    hours.innerHTML = "";
  
    let now = new Date();
    
    let hr = Number.parseInt(document.getElementById("hr").value);
    let min = Number.parseInt(document.getElementById("min").value);
    let ampm = document.getElementById("ampm").value;
    // let x = document.getElementById("hr");
    // console.log({x});
    // console.log("hello");

    hr = ampm === "PM" ? hr + 12 : hr;
    now.setHours(hr);
    now.setMinutes(min);
    
    // if (ampm === "PM") {
    //   now.setHours(now.getHours() + 12);
    // }
    // allow 14 minutes to fall sleep!
    now.setMinutes(now.getMinutes() + 14);
  
    // calculate sleep cycles!
    for (let i = 1; i <= 6; i++) {
      now.setMinutes(now.getMinutes() + 90);
      let elm = document.createElement("div");
      elm.innerText = now.toLocaleTimeString("en-US", { timeStyle: "short" })
      elm.style.color = colors[i - 1];
      hours.appendChild(elm);
    } 
}
