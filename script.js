//your JS code here. If required.
const delay=(ms)=>new Promise((resolve)=>setTimeout(resolve,ms));
async function handleSubmit()
{
	const textInput=document.getElementById("text").value;
	const delayInput=Number(document.getElementById("delay").value);
	const outputDiv=document.getElementById("output");

	await delay(delayInput);

	outputDiv.innerText=textInput;
}
document.getElementById("btn").addEventListener("click",handleSubmit);