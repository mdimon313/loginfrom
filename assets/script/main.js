const main = document.getElementById("main");
const head = document.head;

document.title = "Login";

// creating elements
const element = (elementName) => {
  return document.createElement(elementName);
};

// style Links
function styleLink(elementName, rel, href) {
  const stylesheet = element(elementName);
  stylesheet.setAttribute("rel", rel);
  stylesheet.setAttribute("href", href);
  return stylesheet;
}

head.appendChild(styleLink("link", "stylesheet", "./assets/style/all.min.css"));
head.appendChild(styleLink("link", "stylesheet", "./assets/style/style.css"));

// create elements
const section = element("section");
const container = element("div");
const formMain = element("div");
const formDiv = element("div");
const form = element("form");
const imgDiv = element("div");
const imgTemp = element("img");
const headingTwo = element("h2");
const inputDiv = element("div");
const icon = element("i");

// form input element
const inputName = element("input");
const inputMail = element("input");
const inputSub = element("input");
const message = element("textarea");
const button = element("button");

// set attribute
section.setAttribute("class", "main");
container.setAttribute("class", "container");
formMain.setAttribute("class", "form_main");
formDiv.setAttribute("class", "form_div");
imgDiv.setAttribute("class", "img_div");
imgTemp.setAttribute("src", "./assets/img/3646374.jpg");

// form elemets
// name
inputName.setAttribute("type", "text");
inputName.setAttribute("placeholder", "Name");
inputName.setAttribute("id", "name");
// email
inputMail.setAttribute("type", "email");
inputMail.setAttribute("placeholder", "Email");
inputMail.setAttribute("id", "email");
// subject
inputSub.setAttribute("type", "text");
inputSub.setAttribute("placeholder", "Subject");
inputSub.setAttribute("id", "sub");
// message
message.setAttribute("type", "text");
message.setAttribute("placeholder", "Message");
message.setAttribute("id", "msg");

button.setAttribute("type", "submit");
button.setAttribute("class", "btn_submit");
icon.setAttribute("class", "fal fa-arrow-right");
button.innerHTML += icon;

// add text
headingTwo.textContent = "Get in touch";
button.textContent = "Send Email";

// append elements
main.appendChild(section);
section.appendChild(container);
container.appendChild(formMain);
formMain.appendChild(imgDiv);
imgDiv.appendChild(imgTemp);
formMain.appendChild(formDiv);
formDiv.appendChild(form);
form.appendChild(headingTwo);
form.appendChild(inputName);
form.appendChild(inputMail);
form.appendChild(inputSub);
form.appendChild(message);
form.appendChild(button);

// get validation

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = inputName.value;
  const email = inputMail.value;
  const sub = inputSub.value;
  const msg = message.value;

  if (name !== "" || email !== "" || sub !== "" || msg !== "") {
    const storeFormData = {
      name: name,
      email: email,
      subject: sub,
      message: msg,
    };
    console.log(storeFormData);
  } else {
    alert("Blank are not allwoed!");
  }
});
