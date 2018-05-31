const expect = require("expect");
const {createMessage} = require("./message");

describe("MessageGeneratorTests", () => {

  it("shouldGenerateMessage", () => {
    const from = "#RedViking";
    const text = "Shall We Play";
    const message = createMessage(from,text);
    expect(message).toInclude({from, text});
    expect(message.createdAt).toBeA("number");
  });
});