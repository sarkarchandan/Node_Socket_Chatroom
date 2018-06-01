const expect = require("expect");
const {createMessage, createLocationMessage} = require("./message");

describe("MessageGeneratorTests", () => {

  it("shouldGenerateMessageObject", () => {
    const from = "#RedViking";
    const text = "Shall We Play";
    const message = createMessage(from,text);
    expect(message).toInclude({from, text});
    expect(message.createdAt).toBeA("number");
  });

  it("shouldGenerateCorrectLocationMessageObject", () => {
    const latitude = 49.9096541;
    const longitude = 10.916267099999999;
    const from = "Admin";
    const locationMessageObject = createLocationMessage(from, latitude, longitude);
    expect(locationMessageObject).toInclude({from});
    expect(locationMessageObject.url).toBe("https://www.google.com/maps?q=49.9096541,10.916267099999999");
    expect(locationMessageObject.createdAt).toBeA("number");
  });
});