import contractabi from "./CareerBuild.json";

export const contractAbi = contractabi.abi;
export const contractAddress = "0xAa3C537CDeeFc8Ea9e86b7C5dAecF11fa4cDA01E"

export const converTime = (time) => {
  const newTime = new Date(time.toNumber());

  const realTime =
    newTime.getHours() +
    "/" +
    newTime.getMinutes() +
    "/" +
    newTime.getSeconds() +
    "  Date:" +
    newTime.getDate() +
    "/" +
    (newTime.getMonth() + 1) +
    "/" +
    newTime.getFullYear();

  return realTime;
};

export const convertToDate = (number) =>{
  const date = new Date(number);
  const formattedDate = date.toLocaleDateString('en-US', {timeZone: 'UTC'})
  return formattedDate;
}

export const convertToTime = (time) => {
  const timeElement = time.split("");
  const hours = parseInt(timeElement[0], 10);
  const minute = parseInt(timeElement[1], 10);
  const seconds = parseInt(timeElement[2], 10);

  const formattedHours = hours.toString().padStart(2, "0");
  const formattedMinutes = minute.toString().padStart(2, "0");
  const formattedSeconds = seconds.toString().padStart(2, "0");

  const formattedTime = [formattedHours, formattedMinutes, formattedSeconds].join(":");
   return formattedTime;
};
