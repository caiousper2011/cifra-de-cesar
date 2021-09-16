import cipher from "../src/cipher";

describe("cipher latin alphabet", () => {
  const latinAlphabet = [...cipher.alphabets[0].value];

  it("should be an object", () => {
    expect(typeof cipher).toBe("object");
  });

  describe("cipher.encode with latin alphabet", () => {
    it("should be a function", () => {
      expect(typeof cipher.encode).toBe("function");
    });

    it("should throw TypeError when invoked without alphabet", () => {
      expect(() => cipher.encode()()).toThrow(TypeError);
    });

    it("should throw TypeError when invoked without text", () => {
      expect(() => cipher.encode(latinAlphabet)()).toThrow(TypeError);
    });

    it('should return "HIJKLMNOPQRSTUVWXYZABCDEFG" for "ABCDEFGHIJKLMNOPQRSTUVWXYZ" with offset 7', () => {
      expect(
        cipher.encode(latinAlphabet)("ABCDEFGHIJKLMNOPQRSTUVWXYZ", 7)
      ).toBe("HIJKLMNOPQRSTUVWXYZABCDEFG");
    });

    it('should return "hijklmnopqrstuvwxyzabcdefg" for "abcdefghijklmnopqrstuvwxyz" with offset 7', () => {
      const preparedText = cipher.prepareText(
        "abcdefghijklmnopqrstuvwxyz",
        latinAlphabet
      );
      expect(cipher.encode(latinAlphabet)(preparedText, 7)).toBe(
        "hijklmnopqrstuvwxyzabcdefg".toUpperCase()
      );
    });

    it('should return "CAIO !@" for "JHPV !@"', () => {
      expect(cipher.encode(latinAlphabet)("CAIO !@", 7)).toBe("JHPV !@");
    });

    it('should replace accent characters "OLÁ MUNDO!!!" for "OLA MUNDO!!!"', () => {
      expect(cipher.replaceAccentedWords("", null)).toBe("");
      expect(cipher.prepareText("OLÁ MUNDO!!!", latinAlphabet)).toBe(
        "OLA MUNDO!!!"
      );
    });
  });

  describe("cipher.decode", () => {
    it('should return "ABCDEFGHIJKLMNOPQRSTUVWXYZ4" for "HIJKLMNOPQRSTUVWXYZABCDEFG4" with offset 7', () => {
      expect(
        cipher.decode(latinAlphabet)("HIJKLMNOPQRSTUVWXYZABCDEFG4", 7)
      ).toBe("ABCDEFGHIJKLMNOPQRSTUVWXYZ4");
    });
  });
});
