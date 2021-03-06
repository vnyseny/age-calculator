const dob = document.querySelector("#dob");
const doc = document.querySelector("#checkDate");
const calBtn = document.querySelector("body div div button");
const dayOP = document.querySelector("#day");
const monthOP = document.querySelector("#month");
const yearOP = document.querySelector("#year");

const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

calBtn.addEventListener("click", function () {
  let dobIP = dob.value.split("-");
  let docIP = doc.value.split("-");
  if (dobIP.length != 3 || docIP.length != 3) {
    setTimeout(()=>{
      alert("Please fill both fileds.");
    },1);
    return;
  }
  dobIP = dobIP.map((ele) => Number.parseInt(ele));
  docIP = docIP.map((ele) => Number.parseInt(ele));

  if (
    dobIP[0] > docIP[0] ||
    (dobIP[0] == docIP[0] && dobIP[1] > docIP[1]) ||
    (dobIP[0] == docIP[0] && dobIP[1] == docIP[1] && dobIP[2] > docIP[2])
  ) {
    setTimeout(() => {
      alert("Please enter valid birth date.");
    }, 1);
    return;
  }

  months[1] =
    (docIP[0] % 4 == 0 && docIP[0] % 100 != 0) ||
    (docIP[0] % 400 == 0 && docIP[0] % 100 == 0)
      ? 29
      : 28;

  const year =
    docIP[1] < dobIP[1] || (dobIP[1] == docIP[1] && docIP[2] < dobIP[2])
      ? docIP[0] - dobIP[0] - 1
      : docIP[0] - dobIP[0];
  const month =
    dobIP[2] > docIP[2]
      ? (12 - dobIP[1] + docIP[1] + 11) % 12
      : (12 - dobIP[1] + docIP[1]) % 12;
  const day =
    (months[dobIP[1] - 1] - dobIP[2] + docIP[2]) % months[dobIP[1] - 1];

  yearOP.innerHTML = year;
  monthOP.innerHTML = month;
  dayOP.innerHTML = day;
});
